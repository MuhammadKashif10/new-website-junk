export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className="mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {body && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{body}</p>}
    </div>
  );
}
