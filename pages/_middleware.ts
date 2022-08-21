import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRUX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.rewrite(new URL("/signin", req.url));
    }
  }
}

// List of pages you want to protect
// Edge Function https://vercel.com/docs/concepts/functions/edge-functions && https://nextjs.org/docs/advanced-features/middleware

// Array of pages to be protected
