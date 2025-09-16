import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatCurrency(amount: number, currency: string = "PKR") {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

// Converts Google Drive share links to direct-view image URLs.
// Supports common patterns like:
// - https://drive.google.com/file/d/<id>/view?usp=sharing
// - https://drive.google.com/open?id=<id>
// - https://drive.google.com/uc?id=<id>
// Returns original URL if it doesn't match Drive patterns.
export function resolveImageUrl(imageUrl: string): string {
  if (!imageUrl) return imageUrl;

  try {
    const url = new URL(imageUrl, typeof window !== "undefined" ? window.location.origin : "https://local.invalid");

    const hostIsDrive = /(^|\.)drive\.google\.com$/i.test(url.hostname);
    if (!hostIsDrive) return imageUrl;

    // Pattern 1: /file/d/<id>/view
    const fileIdFromPathMatch = url.pathname.match(/\/file\/d\/([^/]+)\//i);
    if (fileIdFromPathMatch && fileIdFromPathMatch[1]) {
      const id = fileIdFromPathMatch[1];
      return `https://drive.google.com/uc?export=view&id=${id}`;
    }

    // Pattern 2: open?id=<id>
    const openId = url.searchParams.get("id");
    if (openId) {
      return `https://drive.google.com/uc?export=view&id=${openId}`;
    }

    // Pattern 3: uc?id=<id> already direct-ish; ensure export=view
    if (url.pathname.startsWith("/uc")) {
      const ucId = url.searchParams.get("id");
      if (ucId) {
        return `https://drive.google.com/uc?export=view&id=${ucId}`;
      }
    }

    // Fallback: if it's a Drive host and has a potential file id token
    const possibleId = url.pathname.split("/").filter(Boolean).pop();
    if (possibleId && /^[a-zA-Z0-9_-]{20,}$/.test(possibleId)) {
      return `https://drive.google.com/uc?export=view&id=${possibleId}`;
    }

    return imageUrl;
  } catch {
    return imageUrl;
  }
}

// Returns an ordered list of candidate URLs for Google Drive images.
// The first working one will load in <img>. Non-Drive URLs return [original].
export function getGoogleDriveImageCandidates(originalUrl: string): string[] {
  if (!originalUrl) return [];
  let result: string[] = [];
  try {
    const url = new URL(originalUrl, typeof window !== "undefined" ? window.location.origin : "https://local.invalid");
    const hostIsDrive = /(^|\.)drive\.google\.com$/i.test(url.hostname);
    if (!hostIsDrive) return [originalUrl];

    let id: string | null = null;
    const pathMatch = url.pathname.match(/\/file\/d\/([^/]+)\//i);
    if (pathMatch && pathMatch[1]) id = pathMatch[1];
    if (!id) id = url.searchParams.get("id");
    if (!id) {
      const possibleId = url.pathname.split("/").filter(Boolean).pop() || null;
      if (possibleId && /^[a-zA-Z0-9_-]{20,}$/.test(possibleId)) id = possibleId;
    }

    if (!id) return [originalUrl];

    // Priority: view, thumbnail, googleusercontent direct, download
    const baseCandidates = [
      `https://drive.google.com/uc?export=view&id=${id}`,
      `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
      `https://lh3.googleusercontent.com/d/${id}`,
      `https://drive.google.com/uc?export=download&id=${id}`,
      originalUrl,
    ];

    // Add proxy fallbacks (images.weserv.nl) to bypass referrer/CORS issues
    const withProxies: string[] = [];
    for (const candidate of baseCandidates) {
      withProxies.push(candidate);
      try {
        const candidateNoScheme = candidate.replace(/^https?:\/\//i, "");
        withProxies.push(`https://images.weserv.nl/?url=${encodeURIComponent(candidateNoScheme)}`);
        // Alternative proxy form (keeps scheme)
        withProxies.push(`https://wsrv.nl/?url=${encodeURIComponent(candidate)}`);
      } catch {
        // ignore malformed urls
      }
    }

    result = withProxies;
    return result;
  } catch {
    return [originalUrl];
  }
}
