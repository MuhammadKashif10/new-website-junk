import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string | StaticImageData;
  /** Describe the image for screen readers/SEO. Leave empty for decorative images. */
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[color:var(--color-cream)]">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-end md:py-28">
        <div className="animate-rise">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1
            className="mt-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div className="animate-fade">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:aspect-[5/6]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
