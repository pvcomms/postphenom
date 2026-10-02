import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import type { NextConfig } from "next";

const dev = process.env.NODE_ENV === "development";

// altcha writes its stylesheet into a <style> element when it loads. Allow exactly that sheet by
// hash, taken from the vendored file so that updating altcha cannot leave the policy behind.
// The sheet is the string literal that closes altcha's style-injecting call.
const altchaStyleHash = (() => {
  const src = readFileSync("public/vendor/altcha/altcha.min.js", "utf8");
  const call = "document.head.appendChild(n)}}(";
  const literal = src
    .slice(src.indexOf(call) + call.length)
    .match(/^'((?:[^'\\]|\\.)*)'/);
  if (!literal)
    throw new Error(
      "next.config.ts: cannot find altcha's stylesheet in the vendored file",
    );
  const css = literal[1].replace(/\\n/g, "\n").replace(/\\t/g, "\t");
  return `'sha256-${createHash("sha256").update(css).digest("base64")}'`;
})();

// The site loads nothing from any other origin, so the policy names none. Two things are
// loosened, each for a stated reason (docs/DECISIONS.md, 2 Oct 2026):
//  - script-src keeps 'unsafe-inline'. Next prerenders every page as static HTML with inline
//    flight-data scripts that differ per page; hashes or nonces would mean rendering every
//    request dynamically, and there is no user input anywhere for an injected script to arrive by.
//  - worker-src allows blob:, because altcha builds its proof-of-work Web Worker from one.
// The figures are standalone documents with inline <style> and style attributes, so they alone
// also get style-src 'unsafe-inline'.
const policy = (style: string) =>
  [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
    `style-src ${style}`,
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'none'",
    "frame-ancestors 'none'",
    ...(dev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

const standalone = [
  "/figures",
  "/figures.html",
  "/figures/:path*",
  "/position",
  "/position.html",
];

const everywhere = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Access-Control-Allow-Origin", value: "https://postphenom.com" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "same-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer",
      "autoplay",
      "bluetooth",
      "browsing-topics",
      "camera",
      "display-capture",
      "geolocation",
      "gyroscope",
      "hid",
      "interest-cohort",
      "magnetometer",
      "microphone",
      "midi",
      "payment",
      "serial",
      "usb",
    ]
      .map((f) => `${f}=()`)
      .join(", "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: everywhere },
      {
        source: "/((?!figures|position).*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: policy(
              dev ? "'self' 'unsafe-inline'" : `'self' ${altchaStyleHash}`,
            ),
          },
        ],
      },
      ...standalone.map((source) => ({
        source,
        headers: [
          {
            key: "Content-Security-Policy",
            value: policy("'self' 'unsafe-inline'"),
          },
        ],
      })),
    ];
  },
  // The figures, their legend and the position page are standalone HTML in public/, moved over
  // from paramv.com as they were. These give them clean URLs.
  async rewrites() {
    return [
      { source: "/figures", destination: "/figures.html" },
      { source: "/figures/legend", destination: "/figures/legend.html" },
      { source: "/position", destination: "/position.html" },
    ];
  },
};
export default nextConfig;
