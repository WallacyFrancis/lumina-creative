# BLUEPRINT.md - Lumina Creative Roadmap

## 1. Project Overview
**Name:** Lumina Creative (Agency Site)
**Goal:** A portfolio website with dynamic content management via Supabase.
**Key Features:** Dynamic Project Gallery, Contact Form saving to DB, Elegant Typography.

## 2. Implementation Roadmap

### ⏳ Phase 1: Setup & Database Connection
- [ ] Initialize Next.js project.
- [ ] Install Supabase packages (`@supabase/ssr` `@supabase/supabase-js`).
- [ ] Configure Environment Variables (`.env.local`).
- [ ] Setup Supabase Client helper (`lib/supabase.ts`).
- [ ] Config Fonts (Playfair Display + Lato).

### ⏳ Phase 2: Core Layout & Branding
- [ ] Component: `Navbar` (Minimalist, Serif Logo).
- [ ] Component: `Footer` (Clean, Grid Layout).
- [ ] Global CSS: Set `stone-50` background.

### ⏳ Phase 3: The Home Page (Static + Visuals)
- [ ] Component: `HeroSection` (Big Typography, minimal image).
- [ ] Component: `ServicesGrid` (Clean list of services).
- [ ] Component: `AboutSection` (Text + Image layout).

### ⏳ Phase 4: Dynamic Portfolio (Supabase Integration)
- [ ] Database Check: Ensure `projects` table exists.
- [ ] Page: `app/work/page.tsx` (List all projects).
- [ ] Component: `ProjectCard` (Image, Title, Tags).
- [ ] Logic: Fetch data server-side and render.

### ⏳ Phase 5: Contact & Server Actions
- [ ] Database Check: Ensure `contacts` table exists.
- [ ] Component: `ContactForm`.
- [ ] Logic: Create Server Action to insert data into Supabase `contacts`.
- [ ] UI: Success state/Toast notification.

### ⏳ Phase 6: Polish & Deploy
- [ ] Responsive adjustments.
- [ ] SEO Metadata.
- [ ] Deploy to Vercel or Netlify (easier integration with Supabase env vars) or Firebase.