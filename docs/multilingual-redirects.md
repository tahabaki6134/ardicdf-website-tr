# Turkish domain companion rollout

This change preserves all existing Turkish paths and query parameters through 308 redirects to the same paths on `https://www.ardicdf.com`. It does not purchase or move a domain and does not modify mail settings.

Apply only after the multilingual `ardicdf-website` production deployment is verified. Until then this branch remains a draft, and the existing Turkish site stays live.

The hostname guard leaves Vercel branch previews inspectable. Static assets and the old API handler remain available for cached pages. The sitemap and robots document redirect to the common site's metadata after rollout.
