import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRUX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}

// List of pages you want to protect
// Edge Function https://vercel.com/docs/concepts/functions/edge-functions && https://nextjs.org/docs/advanced-features/middleware

// Array of pages to be protected
