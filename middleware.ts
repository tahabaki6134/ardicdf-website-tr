import { NextRequest, NextResponse } from "next/server";

// Companion rollout: merge only after the multilingual .com deployment is ready.
// The production Turkish address keeps working through permanent one-to-one redirects.
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (!["ardicdf.com.tr", "www.ardicdf.com.tr"].includes(url.hostname)) return NextResponse.next();
  return NextResponse.redirect(new URL(url.pathname + url.search, "https://www.ardicdf.com"), 308);
}
export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
