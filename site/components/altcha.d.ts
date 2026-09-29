import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "data-obfuscated"?: string;
        display?: string;
        auto?: string;
        challenge?: string;
        configuration?: string;
      };
    }
  }
}
