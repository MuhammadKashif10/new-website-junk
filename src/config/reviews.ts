// Mock customer reviews.
//
// This file is the single source of truth for the reviews shown on the site.
// It is deliberately shaped to mirror the Google Places API "review" object so
// that real Google reviews can replace this mock data LATER WITHOUT touching the
// UI — only this file changes.
//
// Google Place Details `result.reviews[]` field  →  our field
//   author_name                                   →  author
//   rating (1–5)                                  →  rating
//   text                                          →  text
//   relative_time_description ("2 weeks ago")     →  relativeTime
//   profile_photo_url                             →  avatar (optional)
//
// And `result.rating` / `result.user_ratings_total` → reviewsSummary below.
//
// When wiring the live API, map the response into these shapes and (optionally)
// add AggregateRating / Review JSON-LD. NOTE: do not add rating structured data
// while this is mock content — Google's guidelines require real, on-site reviews.

export type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  /** Optional avatar URL (Google's profile_photo_url). Falls back to initials. */
  avatar?: string;
};

export const reviewsSummary = {
  rating: 4.9,
  count: 138,
  source: "Google",
} as const;

export const reviews: Review[] = [
  {
    author: "Sarah Al Marri",
    rating: 5,
    text: "Booked a villa clearout in Arabian Ranches and the crew was punctual, uniformed and incredibly careful with the floors. Fixed price, no surprises. Exactly what they promise.",
    relativeTime: "2 weeks ago",
  },
  {
    author: "James Whitfield",
    rating: 5,
    text: "Sent a photo of an old sofa on WhatsApp in the morning and it was gone by the afternoon. Fast, polite and genuinely reasonable pricing. Will use again.",
    relativeTime: "1 month ago",
  },
  {
    author: "Priya Nair",
    rating: 5,
    text: "We cleared an entire apartment before moving out. The team handled the building paperwork with security and left every room broom-clean. Stress-free from start to finish.",
    relativeTime: "1 month ago",
  },
  {
    author: "Mohammed Rashid",
    rating: 5,
    text: "Removed two mattresses and a broken wardrobe from a 4th-floor flat with no lift access. Wrapped everything, protected the walls, done in under an hour. Highly recommend.",
    relativeTime: "2 months ago",
  },
  {
    author: "Elena Petrova",
    rating: 4,
    text: "Great service for our office refit in Business Bay — they worked after hours so we lost no time. Arrived slightly late but called ahead, and the clearance itself was spotless.",
    relativeTime: "3 months ago",
  },
  {
    author: "Daniel Okoro",
    rating: 5,
    text: "The garden waste from our Al Barari villa was cleared in a single trip, including heavy planters. Friendly crew, fair quote, tidy finish. This is how it should be done.",
    relativeTime: "3 months ago",
  },
];
