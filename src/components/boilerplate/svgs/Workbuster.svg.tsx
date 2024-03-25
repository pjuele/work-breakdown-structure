'use client';

const DEFAULT_SVG_FILL_CLASS = "fill-foreground stroke-none";

const Workbuster = (
    {svgClassName, textClassName, strokeWidth}:
    { svgClassName?: string, textClassName?: string, strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1224}
    height={172}
    viewBox="-51 -8 102 16"
    className={svgClassName ?? ""}
  >
    <path
      d="M11.84 10.12h3.02L11.1 20H9.16l-1.84-4.78C6.7 16.88 6.1 18.44 5.52 20H3.56l-3.78-9.88h3.04l1.72 5.44 1.7-5.44h2.18l1.7 5.46zm8.388 2.3c-1.22 0-2.24 1.08-2.24 2.66 0 1.56 1.02 2.64 2.24 2.64 1.24 0 2.26-1.08 2.26-2.64 0-1.58-1.02-2.66-2.26-2.66zm0-2.44c2.9 0 5.22 2.18 5.22 5.1 0 2.92-2.32 5.08-5.22 5.08-2.88 0-5.2-2.16-5.2-5.08s2.32-5.1 5.2-5.1zm12.927.28-.4 2.22c-.74-.32-.88-.26-1.22-.26-1.2 0-1.9.64-1.9 2.22V20h-2.96v-9.88h2.96V11c.38-.68 1.42-1.02 2.08-1.02.62 0 .98.02 1.44.28zM40.103 20l-3.2-4.06c-.08.08-.22.18-.34.28V20h-2.98V5.48h2.98v7.12l2.84-2.48h4.42l-4.78 4c1.46 1.8 3.38 4.14 4.78 5.88h-3.72zm9.808-10.02c2.9 0 4.82 2.18 4.82 5.1 0 2.92-2.12 5.08-5.02 5.08-.64 0-1.72-.36-2.04-.82V20h-2.96V5.48h2.96v5.34c.34-.5 1.62-.84 2.24-.84zm-.4 7.94c1.24 0 2.26-1.28 2.26-2.84 0-1.58-1.02-2.86-2.26-2.86-1.36 0-2.24 1.54-2.24 2.86 0 1.32.9 2.84 2.24 2.84zm6.668-2.16v-5.64h2.96v5.64c0 1.52.42 2.16 1.56 2.16 1.2 0 1.9-.64 1.9-2.16v-5.64h2.96V20h-2.96v-.9c-.56.7-1.78 1.06-2.64 1.06-2.78 0-3.78-1.32-3.78-4.4zm13.627-2.52c0 1.18 5 .62 5 3.74 0 2.04-1.8 3.18-4.04 3.18-1.42 0-2.84-.7-3.96-1.82l1.94-1.94c.56.68 1.36 1.2 2.02 1.26.66.06 1.22-.22 1.32-.52.24-.76-1.14-.8-1.56-.92-1.58-.48-3.42-1.14-3.42-3.1 0-2.34 2.44-3.14 3.66-3.14 1.4 0 2.82.64 3.96 1.8l-1.92 1.92c-.52-.68-1.42-1.22-2.04-1.22-.32 0-.96.12-.96.76zm9.728 2.56c0 .72-.02 1.92 1.08 1.92.54 0 .88-.22 1.26-.5v2.44c-.46.26-1.02.5-1.62.5-2.54 0-3.68-1.08-3.68-4.36v-3.24h-1.1v-2.44h1.1V7.28h2.96v2.84h2.34v2.44h-2.34v3.24zm14.008-.72v.66h-7.04c0 1.16 1.18 1.98 2.16 1.98.96 0 1.84-.38 2.3-1.22l1.98 1.82c-.8 1.08-2.02 1.84-4.28 1.84-3.24 0-5.22-2.16-5.22-5.08s1.92-5.1 5.04-5.1 5.06 2.14 5.06 5.1zm-6.98-1.22h3.88c-.16-.94-.84-1.44-1.96-1.44-1.08 0-1.74.58-1.92 1.44zm14.667-3.6-.4 2.22c-.74-.32-.88-.26-1.22-.26-1.2 0-1.9.64-1.9 2.22V20h-2.96v-9.88h2.96V11c.38-.68 1.42-1.02 2.08-1.02.62 0 .98.02 1.44.28z"
      style={{
        // strokeWidth: strokeWidth ?? 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: 0,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(-50.5 -12.82)"
      vectorEffect="non-scaling-stroke"
      className={textClassName ?? DEFAULT_SVG_FILL_CLASS}
    />
  </svg>
)
export default Workbuster
