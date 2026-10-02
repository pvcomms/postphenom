import { site } from "@/content/site";

export type Post = { title: string; url: string };

// The one place this site asks another host for anything, and it is the server asking, never the
// reader's browser: the feed is read at build and again at most once an hour. The reader's browser
// is only ever sent a link. Anything that goes wrong yields no posts, and the page still renders.
export async function latestPosts(count: number): Promise<Post[]> {
  try {
    const res = await fetch(site.substack.feed, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
      headers: { "user-agent": "postphenom.com feed reader" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const posts: Post[] = [];
    for (const item of xml.match(/<item>[\s\S]*?<\/item>/g) ?? []) {
      const title = item.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)?.[1]?.trim();
      const url = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim();
      // The feed is someone else's data: keep a post only if its link stays on the Substack.
      if (title && url?.startsWith(`${site.substack.url}/`)) posts.push({ title: decode(title), url });
      if (posts.length === count) break;
    }
    return posts;
  } catch {
    return [];
  }
}

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'");
