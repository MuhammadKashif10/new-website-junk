import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { reviews, reviewsSummary, type Review } from "@/config/reviews";

// Renders `reviews` from src/config/reviews.ts. When real Google reviews are
// wired in, only that config file changes — this component and the UI stay put.

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${
            i < Math.round(rating)
              ? "fill-[color:var(--color-bronze)] text-[color:var(--color-bronze)]"
              : "fill-transparent text-border"
          }`}
        />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          aria-hidden
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-ink)] text-[11px] font-semibold text-[color:var(--color-cream)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {initials(review.author)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold leading-tight">{review.author}</span>
          <span className="block text-xs text-muted-foreground">{review.relativeTime}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  return (
    <section className="bg-[color:var(--color-cream)] py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="What clients say"
            title="Trusted across Dubai homes and offices."
          />
          <div className="flex items-center gap-3">
            <Stars rating={reviewsSummary.rating} />
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{reviewsSummary.rating.toFixed(1)}</span>{" "}
              from {reviewsSummary.count}+ {reviewsSummary.source} reviews
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={`${review.author}-${review.relativeTime}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
