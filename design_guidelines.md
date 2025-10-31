# Design Guidelines: Luxury Car Showroom E-commerce Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Tesla and BMW's premium automotive websites, characterized by bold imagery, minimalist typography, dramatic contrast, and sophisticated interaction design.

## Core Design Principles
1. **Premium Minimalism**: Clean layouts with generous whitespace and bold focal points
2. **Visual Drama**: Large-scale imagery showcasing vehicles as hero elements
3. **Refined Elegance**: Sophisticated color palette with strategic accent usage
4. **Smooth Interactions**: Subtle, polished transitions that enhance without distracting

## Color Palette
- **Base**: Pure black (#000000) and pure white (#FFFFFF) for maximum contrast
- **Primary Accent**: Metallic gold (#D4AF37, #C5A572) for premium CTAs and highlights
- **Secondary Accent**: Deep red (#B91C1C, #DC2626) for urgent actions and sale indicators
- **Neutrals**: Slate grays (slate-50 to slate-900) for subtle backgrounds and borders
- **Overlays**: Black with 40-60% opacity for text-on-image readability

## Typography System
**Font Stack**: Use 'Inter' and 'Playfair Display' from Google Fonts
- **Headings**: Playfair Display (serif) for luxury appeal
  - H1: text-5xl to text-7xl, font-bold, tracking-tight
  - H2: text-4xl to text-5xl, font-semibold
  - H3: text-2xl to text-3xl, font-semibold
- **Body**: Inter (sans-serif) for modern readability
  - Large: text-lg, leading-relaxed
  - Base: text-base, leading-normal
  - Small: text-sm
- **Buttons/CTAs**: Inter, uppercase, tracking-wider, font-semibold

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 to py-32 (desktop), py-12 to py-20 (mobile)
- Card padding: p-6 to p-8
- Component gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl with px-4 to px-8

**Grid System**:
- Car cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Categories: grid-cols-2 md:grid-cols-4 lg:grid-cols-6
- Specs display: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

## Component Library

### Navigation
- Fixed header with backdrop-blur-lg and bg-black/90
- Logo on left, centered menu links, search/wishlist icons on right
- Mobile: Slide-in menu from right with overlay backdrop
- Height: h-20, subtle shadow on scroll

### Hero Section
- Full viewport height (min-h-screen) with dark gradient overlay
- Large background car image (high-quality luxury vehicle)
- Centered content with dramatic typography
- Primary CTA button with gold background, hover lift effect (translate-y-[-2px])
- Secondary ghost button with white border

### Car Cards
- White background (bg-white) with shadow-lg on hover
- Aspect ratio 4:3 for car images with object-cover
- Price in large gold text (text-2xl font-bold text-gold)
- Subtle border (border border-slate-200)
- Hover: shadow-2xl transition, scale-[1.02]
- "View Details" button: black background, white text, full-width

### Filter Bar
- Sticky position (sticky top-20) with white background
- Grouped filter controls with subtle dividers
- Dropdown selects with custom styling (rounded-lg, border-slate-300)
- Search input with icon, large padding

### Image Gallery (Detail Page)
- Main image: aspect-w-16 aspect-h-9, large display
- Thumbnail strip below: flex gap-4, overflow-x-auto
- Active thumbnail: border-2 border-gold
- Smooth fade transitions between images

### Specifications Grid
- Card-based layout with icon + label + value
- Icons from Heroicons (outline style)
- Light gray backgrounds (bg-slate-50) for each spec card
- Organized by category: Performance, Features, Dimensions

### Buttons
**Primary (Gold)**: bg-gold text-black px-8 py-4 rounded-lg font-semibold uppercase tracking-wider hover:bg-gold-dark transition-all
**Secondary (Outline)**: border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black
**Ghost**: Transparent with white text, subtle underline on hover

### Forms
- Large input fields: h-14, px-6, rounded-lg border-2
- Focus state: border-gold, ring-2 ring-gold/20
- Labels: text-sm uppercase tracking-wide text-slate-600
- Submit button: Full-width primary gold button

### Modals/Popups
- Dark overlay: bg-black/70 backdrop-blur-sm
- Modal content: bg-white max-w-4xl rounded-2xl p-12
- Close button: Absolute top-right, large X icon
- Smooth scale entrance animation

### Footer
- Dark background (bg-black) with white text
- Three-column grid: Company info, Quick Links, Contact & Social
- Social icons: hover effect with gold color change
- Thin top border (border-t border-slate-800)
- Copyright bar: bg-slate-900, text-center, text-sm

## Images

### Hero Section
**Main Hero Image**: Ultra-wide shot of luxury sports car (modern electric or high-performance vehicle) in dramatic lighting. Should be sleek, black or dark-colored vehicle against minimalist background. Position: Full-width background, parallax effect preferred.

### Featured Cars Carousel
**Vehicle Images**: Professional side-profile shots, 3/4 front angle preferred. Clean studio backgrounds or minimal outdoor settings. Consistent lighting and quality across all carousel images.

### Car Listing/Detail Pages
**Card Thumbnails**: Same 3/4 front angle shots, cropped consistently
**Gallery Images**: Multiple angles - front, rear, side profiles, interior shots, close-ups of features (dashboard, wheels, seats)

### Categories Section
**Category Icons**: Use silhouette images or high-quality icons representing vehicle types (SUV, Sedan, etc.)

### About/Contact Pages
**Showroom Images**: Professional photos of dealership interior, service areas, or aspirational lifestyle imagery

## Animation Guidelines
**Minimal and Purposeful**:
- Card hover: transform scale and shadow (transition-all duration-300)
- Image gallery transitions: opacity fade (duration-500)
- Menu slide-in: translate-x with ease-in-out
- Button states: subtle lift on hover (translate-y-[-2px])
- Page transitions: fade between routes
- Avoid carousel auto-play; use manual navigation only

## Responsive Breakpoints
- Mobile: base (< 768px) - Single column, stacked layout
- Tablet: md (768px+) - Two-column grids, visible filters
- Desktop: lg (1024px+) - Three-column grids, full navigation
- Large: xl (1280px+) - Max-width containers, enhanced spacing

## Key Differentiators
- **Premium Feel**: Large hero imagery, generous whitespace, refined typography hierarchy
- **Visual Hierarchy**: Bold headlines, subtle body text, strategic accent color placement
- **Interactive Excellence**: Smooth hover states, responsive touch targets, intuitive navigation
- **Luxury Details**: Metallic gold accents, serif headings for elegance, high-quality imagery throughout