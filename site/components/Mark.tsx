import { MARK, GLYPH, CARET, UNDERLINE, RULE } from "./marks";

const svgs = { mark: MARK, glyph: GLYPH, caret: CARET, underline: UNDERLINE, rule: RULE } as const;

export function Mark({ kind, className = "", style }: { kind: keyof typeof svgs; className?: string; style?: React.CSSProperties }) {
  return <span className={`mark-inline ${className}`} style={style} dangerouslySetInnerHTML={{ __html: svgs[kind] }} />;
}
