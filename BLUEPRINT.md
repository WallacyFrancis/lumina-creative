# BLUEPRINT.md - Lumina Creative Roadmap

## 1. Project Overview
**Name:** Lumina Creative (Agency Site)
**Goal:** A portfolio website with dynamic content management via Supabase.
**Key Features:** Dynamic Project Gallery, Contact Form saving to DB, Elegant Typography.

## 2. Implementation Roadmap

### ✅ Phase 1: Setup & Database Connection
- [x] Initialize Next.js project.
- [x] Install Supabase packages (`@supabase/ssr` `@supabase/supabase-js`).
- [x] Configure Environment Variables (`.env.local`).
- [x] Setup Supabase Client helper (`lib/supabase.ts`).
- [x] Config Fonts (Playfair Display + Lato).

### ✅ Phase 2: Core Layout & Branding
- [x] Component: `Navbar` (Minimalist, Serif Logo).
- [x] Component: `Footer` (Clean, Grid Layout).
- [x] Global CSS: Set `stone-50` background.

### ✅ Phase 3: The Home Page (Static + Visuals)
- [x] Component: `HeroSection` (Big Typography, minimal image).
- [x] Component: `ServicesGrid` (Clean list of services).
- [x] Component: `AboutSection` (Text + Image layout).

### ✅ Phase 4: Dynamic Portfolio (Supabase Integration)
- [x] Database Check: Ensure `projects` table exists.
- [x] Page: `app/work/page.tsx` (List all projects).
- [x] Component: `ProjectCard` (Image, Title, Tags).
- [x] Logic: Fetch data server-side and render.

### ⏳ Phase 5: Contact & Server Actions
- [ ] Database Check: Ensure `contacts` table exists.
- [ ] Component: `ContactForm`.
- [ ] Logic: Create Server Action to insert data into Supabase `contacts`.
- [ ] UI: Success state/Toast notification.

### ⏳ Phase 6: Polish & Deploy
- [ ] Responsive adjustments.
- [ ] SEO Metadata.
- [ ] Deploy to Vercel or Netlify (easier integration with Supabase env vars) or Firebase.