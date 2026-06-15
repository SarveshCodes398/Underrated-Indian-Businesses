import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const publicRoutes = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
])

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes
  if (!publicRoutes(req)) {
    // Protect all other routes
    const authObject = await auth.protect()
    
    // If user is not authenticated, they will be redirected to sign-in by Clerk
    if (!authObject.userId) {
      return NextResponse.redirect(new URL('/sign-in', req.url))
    }
  }
})

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
