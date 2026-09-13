import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Star,
  Sparkles,
  Camera,
  Film,
  Megaphone,
  ShoppingBag,
  Calendar,
  Lightbulb,
  Users,
  Heart,
  Menu,
  X,
  Plus,
  Minus,
  ArrowRight,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

import heroPortrait from "@/assets/photos/1000093897.jpg";
import aboutImage from "@/assets/photos/1000093894.jpg";
import p895 from "@/assets/photos/1000093895.jpg";
import p896 from "@/assets/photos/1000093896.jpg";
import p898 from "@/assets/photos/1000093898.jpg";
import p899 from "@/assets/photos/1000093899.jpg";
import p900 from "@/assets/photos/1000093900.jpg";
import p901 from "@/assets/photos/1000093901.jpg";
import p904 from "@/assets/photos/1000093904.jpg";
import p907 from "@/assets/photos/1000093907.jpg";
import p892 from "@/assets/photos/1000093892.jpg";
import p893 from "@/assets/photos/1000093893.jpg";
import p902 from "@/assets/photos/1000093902.jpg";
import p903 from "@/assets/photos/1000093903.jpg";
import p905 from "@/assets/photos/1000093905.jpg";
import p906 from "@/assets/photos/1000093906.jpg";
import p908 from "@/assets/photos/1000093908.jpg";
import p909 from "@/assets/photos/1000093909.jpg";
import p910 from "@/assets/photos/1000093910.jpg";

const IG_URL = "https://www.instagram.com/khushi_kathayat07?igsh=dzdpaTVzZmt2dnJ5";
const PHONE = "7555149784";

const bgLifestyle = p902;
const bgContact = aboutImage;
const g1 = p896;
const g2 = p907;
const g3 = p899;
const g4 = p901;
const g5 = p898;
const g6 = p895;
const g7 = p900;
const g8 = p904;
const g9 = p892;
const g10 = p893;
const g11 = p903;
const g12 = p905;
const g13 = p906;
const g14 = p908;
const g15 = p909;
const g16 = p910;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

/* ---------------- Data ---------------- */

// Order matches the order the sections appear on the page, so walking the nav
// left to right never scrolls the reader backwards.
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "collaborations", label: "Collaborations" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  { value: 248, suffix: "K", label: "Followers" },
  { value: 6.8, suffix: "%", label: "Engagement Rate", decimals: 1 },
  { value: 2.4, suffix: "M", label: "Monthly Reach", decimals: 1 },
  { value: 3.1, suffix: "M", label: "Monthly Impressions", decimals: 1 },
  { value: 180, suffix: "K", label: "Avg. Reel Views" },
  { value: 92, suffix: "K", label: "Story Reach" },
  { value: 12, suffix: "K", label: "Average Likes" },
  { value: 480, suffix: "+", label: "Avg. Comments" },
];

const AUDIENCE = {
  age: [
    { label: "18–24", pct: 34 },
    { label: "25–34", pct: 46 },
    { label: "35–44", pct: 14 },
    { label: "45+", pct: 6 },
  ],
  gender: [
    { label: "Women", pct: 78 },
    { label: "Men", pct: 22 },
  ],
  countries: ["India", "United States", "United Arab Emirates", "United Kingdom", "Canada"],
  cities: ["Mumbai", "Delhi", "Bengaluru", "Dubai", "New York"],
  interests: ["Fashion", "Beauty", "Travel", "Lifestyle", "Wellness", "Food"],
};

const COLLABS = [
  {
    brand: "Maison Aurea",
    campaign: "Golden Hour Edit",
    objective: "Launch of the SS collection",
    deliverables: "3 Reels · 5 Stories · 2 Static",
    reach: "1.2M",
    engagement: "9.4%",
  },
  {
    brand: "Rosé & Co.",
    campaign: "Petal Ritual",
    objective: "New serum introduction",
    deliverables: "2 Reels · 8 Stories · 1 IGTV",
    reach: "860K",
    engagement: "11.2%",
  },
  {
    brand: "Voyage Atelier",
    campaign: "Weekend in Udaipur",
    objective: "Boutique-hotel awareness",
    deliverables: "1 Reel · 6 Stories · Blog",
    reach: "1.6M",
    engagement: "8.1%",
  },
  {
    brand: "Kāya Home",
    campaign: "Slow Mornings",
    objective: "Home fragrance drop",
    deliverables: "2 Reels · 4 Stories",
    reach: "540K",
    engagement: "10.6%",
  },
];

const GALLERY = [
  { src: g1, cat: "Beauty", h: "tall" },
  { src: g13, cat: "Beauty", h: "short" },
  { src: g3, cat: "Travel", h: "tall" },
  { src: g4, cat: "Lifestyle", h: "med" },
  { src: g14, cat: "Fashion", h: "tall" },
  { src: g6, cat: "Travel", h: "tall" },
  { src: g7, cat: "Fashion", h: "short" },
  { src: g8, cat: "Lifestyle", h: "med" },
  { src: g9, cat: "Beauty", h: "med" },
  { src: g10, cat: "Fashion", h: "tall" },
  { src: g11, cat: "Beauty", h: "med" },
  { src: g12, cat: "Beauty", h: "tall" },
  { src: g5, cat: "Travel", h: "med" },
  { src: g15, cat: "Lifestyle", h: "med" },
  { src: g16, cat: "Lifestyle", h: "tall" },
  { src: g2, cat: "Fashion", h: "short" },
  { src: heroPortrait, cat: "Beauty", h: "tall" },
];

// Derived from the gallery so a filter can never render an empty grid.
const GALLERY_CATS = ["All", ...Array.from(new Set(GALLERY.map((g) => g.cat)))];

/** Fixed ratios keep the masonry from reflowing as each photo decodes. */
const GALLERY_RATIO: Record<string, string> = {
  tall: "3 / 4",
  med: "4 / 5",
  short: "1 / 1",
};

const SERVICES = [
  { icon: Film, title: "Instagram Reels", desc: "Cinematic short-form storytelling built for reach and shares.", price: "₹ 25,000", timeline: "5–7 days" },
  { icon: Camera, title: "Instagram Posts", desc: "Editorial stills styled and shot to match your brand tone.", price: "₹ 15,000", timeline: "3–5 days" },
  { icon: Sparkles, title: "Stories & UGC", desc: "Authentic, native-feeling story sequences and UGC bundles.", price: "₹ 12,000", timeline: "3 days" },
  { icon: ShoppingBag, title: "Product Photography", desc: "On-model and flatlay imagery with a warm editorial finish.", price: "₹ 30,000", timeline: "7 days" },
  { icon: Megaphone, title: "Brand Promotions", desc: "Full-funnel promotion packages across Reels, Stories and posts.", price: "₹ 60,000", timeline: "10 days" },
  { icon: Calendar, title: "Event Coverage", desc: "Live coverage of launches, dinners and press events.", price: "On request", timeline: "Same-day recaps" },
  { icon: Lightbulb, title: "Content Strategy", desc: "Positioning, pillars and a 90-day publishing roadmap.", price: "₹ 45,000", timeline: "2 weeks" },
  { icon: Users, title: "Social Consulting", desc: "1:1 mentorship for founders and in-house social teams.", price: "₹ 8,000 / hr", timeline: "Ongoing" },
];

const REASONS = [
  { title: "Authentic Storytelling", desc: "Every campaign begins with a real point of view — never a template." },
  { title: "High Engagement", desc: "A community that comments, saves and converts, not just scrolls." },
  { title: "Quality Production", desc: "Warm, editorial visuals shot and edited in-house end to end." },
  { title: "Clear Communication", desc: "Briefs, drafts and approvals handled with agency-level clarity." },
  { title: "Timely Delivery", desc: "Deadlines held, revisions returned within 24 hours." },
  { title: "Creative Campaigns", desc: "Concepts tailored to your product, not recycled trends." },
  { title: "Audience Trust", desc: "Selective partnerships keep endorsements meaningful." },
  { title: "Long-Term Partnerships", desc: "Most brands return — many stay on retainer." },
];

const TESTIMONIALS = [
  {
    name: "Anaïs Kapoor",
    role: "Founder, Maison Aurea",
    quote:
      "Khushi turned our launch into an editorial moment. The Reel outperformed our paid campaign by 3×.",
  },
  {
    name: "Rhea Malhotra",
    role: "Brand Lead, Rosé & Co.",
    quote:
      "Beautifully considered content, always on time, and a genuine partner in the process. We book her every quarter.",
  },
  {
    name: "Ishaan Verma",
    role: "Marketing Director, Voyage Atelier",
    quote:
      "The campaign felt like a magazine spread rather than an ad. Bookings jumped 40% the week it went live.",
  },
];

const BRANDS = [
  "MAISON AUREA",
  "ROSÉ & CO.",
  "VOYAGE ATELIER",
  "KĀYA HOME",
  "LUNE PARIS",
  "SILK & SAGE",
  "ATELIER NOOR",
  "MARÉ",
];

const AWARDS = [
  { year: "2025", title: "Featured — Vogue India Digital", body: "Rising Voices of Indian Content." },
  { year: "2024", title: "Top 50 Lifestyle Creators", body: "Cosmopolitan India annual list." },
  { year: "2024", title: "Meta Creator Spotlight", body: "Selected as a South-Asia creator to watch." },
  { year: "2023", title: "Brand Partner of the Year", body: "Maison Aurea internal awards." },
];

const FAQS = [
  { q: "How can we collaborate?", a: "Reach out via the contact form with your brief, timelines and goals. Most partnerships begin with a short discovery call." },
  { q: "What is your pricing?", a: "Rates depend on scope, usage and exclusivity. Indicative starting prices are listed under Services; custom quotes are shared after the brief." },
  { q: "How long does content take?", a: "Standard turnaround is 5–7 working days from approved concept. Rush timelines are possible for launches." },
  { q: "What is the revision policy?", a: "Two rounds of revisions on script and edit are included in every deliverable." },
  { q: "What usage rights are included?", a: "Organic re-share is included. Paid usage and whitelisting are quoted separately based on term and geography." },
  { q: "How do I get in touch?", a: "Email khushikathayat.official@gmail.com or use the contact form below — replies within 24 hours." },
];

/* ---------------- Hooks ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function useCounter(target: number, decimals = 0, active = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), io.disconnect()),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

/* ---------------- Components ---------------- */

const NAV_IDS = NAV.map((n) => n.id);

/**
 * Tracks the section under the header, whether the page has left the top, and
 * how far through the document the reader is — all from one rAF-throttled pass.
 */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;

      setScrolled(window.scrollY > 12);
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);

      // Measure live positions rather than offsetTop: images finish loading
      // long after mount and shift every section below them. Sorting by the
      // measured top also keeps this correct if the nav is ever ordered
      // differently from the page.
      const seen = ids
        .flatMap((id) => {
          const el = document.getElementById(id);
          return el ? [{ id, top: el.getBoundingClientRect().top }] : [];
        })
        .sort((a, b) => a.top - b.top);
      // Sits below the header and below scroll-padding-top, so a section that
      // has just docked under the header counts as the current one instead of
      // losing by a fraction of a pixel.
      const marker = 140;
      const current = seen.filter((sec) => sec.top <= marker).at(-1);
      // The last section is often too short to ever reach the marker.
      const atBottom = window.scrollY >= max - 4;
      setActive((atBottom ? seen.at(-1)?.id : current?.id) ?? ids[0]);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
    };
  }, [ids]);

  return { active, scrolled, progress };
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { active, scrolled, progress } = useScrollSpy(NAV_IDS);

  // Lock the page behind the full-screen menu and give Escape a way out.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-b border-border bg-ivory/95 shadow-header backdrop-blur-xl supports-[backdrop-filter]:bg-ivory/85"
            : "border-b border-transparent bg-ivory/75 backdrop-blur-md supports-[backdrop-filter]:bg-ivory/60"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-[height] duration-300 lg:px-10 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a
            href="#home"
            className="flex shrink-0 items-baseline gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <span className="font-display text-2xl leading-none tracking-tight">Meethi Talks</span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              by Khushi
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    aria-current={active === n.id ? "location" : undefined}
                    className={`inline-flex items-center rounded-full px-3.5 py-2 text-[13px] tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                      active === n.id
                        ? "bg-beige font-medium text-foreground"
                        : "text-muted-foreground hover:bg-beige/60 hover:text-foreground"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-gold lg:inline-block"
            >
              Work With Me
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-beige lg:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Reading progress rides the header's bottom edge instead of floating
            over it as a separate fixed bar. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gold transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] animate-fade-in overflow-y-auto overscroll-contain bg-ivory lg:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-display text-2xl">Meethi Talks</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col items-center gap-1.5 px-6 pb-16 pt-4"
          >
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === n.id ? "location" : undefined}
                className={`w-full rounded-2xl px-5 py-2.5 text-center font-display text-3xl transition-colors ${
                  active === n.id ? "bg-rose/60 text-foreground" : "hover:bg-background"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-full bg-foreground px-8 py-4 text-center text-xs uppercase tracking-[0.25em] text-primary-foreground"
            >
              Work With Me
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <Instagram className="h-4 w-4" /> @khushi_kathayat07
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

/** Photos that ride the orbit ring, in ring order. */
const ORBIT_PHOTOS = [
  { src: p896, pos: "50% 18%" },
  { src: p901, pos: "50% 16%" },
  { src: p908, pos: "50% 18%" },
  { src: p893, pos: "50% 28%" },
  { src: p909, pos: "40% 18%" },
  { src: p900, pos: "50% 22%" },
  { src: p907, pos: "50% 20%" },
  { src: p906, pos: "50% 18%" },
];

const HERO_SLIDES = [
  {
    src: heroPortrait,
    pos: "50% 16%",
    alt: "Khushi in bridal jewellery and pink embroidered attire, looking downward with a soft expression",
  },
  { src: p896, pos: "50% 16%", alt: "" },
  { src: p901, pos: "50% 16%", alt: "" },
  { src: p906, pos: "50% 18%", alt: "" },
];

const SLIDE_MS = 4200;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function HeroVisual() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual || prefersReducedMotion()) return;

    let angle = 0;
    let paused = false;
    let frame = 0;

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    const spin = () => {
      if (!paused && !document.hidden) angle += 0.007;
      const n = ORBIT_PHOTOS.length;
      const rx = Math.min(visual.clientWidth * 0.42, 250);
      const ry = Math.min(visual.clientHeight * 0.34, 190);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const a = angle + (i / n) * Math.PI * 2;
        const x = Math.sin(a) * rx;
        const y = Math.cos(a) * ry * 0.72;
        const depth = (Math.cos(a) + 1) / 2;
        const scale = 0.78 + depth * 0.28;
        // Cards passing in front of the portrait fade back so the face stays
        // the focal point.
        const overPortrait = Math.abs(x) < visual.clientWidth * 0.18;
        card.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        card.style.zIndex = overPortrait ? "2" : String(6 + Math.round(depth * 8));
        card.style.opacity = overPortrait ? "0.28" : String(0.55 + depth * 0.45);
      });

      frame = requestAnimationFrame(spin);
    };

    visual.addEventListener("mouseenter", pause);
    visual.addEventListener("mouseleave", resume);
    frame = requestAnimationFrame(spin);

    return () => {
      cancelAnimationFrame(frame);
      visual.removeEventListener("mouseenter", pause);
      visual.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div ref={visualRef} className="hero-visual">
      <div className="orbit" aria-hidden="true">
        <div className="orbit-ring">
          {ORBIT_PHOTOS.map((photo, i) => (
            <figure
              key={photo.src}
              ref={(node) => {
                cardsRef.current[i] = node;
              }}
              className="orbit-card"
            >
              <img src={photo.src} alt="" decoding="async" style={{ objectPosition: photo.pos }} />
            </figure>
          ))}
        </div>
      </div>

      <figure className="hero-frame">
        {HERO_SLIDES.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            {...(photo.alt ? {} : { "aria-hidden": true })}
            {...(i === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
            style={{ objectPosition: photo.pos }}
            className={i === slide ? "is-on" : ""}
          />
        ))}
        <div className="proof proof-reach">
          <strong>2.4M</strong>
          <span>monthly reach</span>
        </div>
        <div className="proof proof-engage">
          <strong>6.8%</strong>
          <span>engagement</span>
        </div>
      </figure>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ivory pt-24">
      {/* Soft blurred lifestyle backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `url(${bgLifestyle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(28px) saturate(1.1)",
          transform: "scale(1.1)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/60 to-ivory" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-rose/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-gold-soft/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pt-16">
        <div className="animate-fade-up">
          <span className="eyebrow">Meethi Talks · Est. 2020</span>
          <h1 className="mt-6 font-display text-[3rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
            Meethi Talks <span className="block text-gold">by Khushi</span>
          </h1>
          <p className="mt-5 font-display text-2xl italic text-foreground/80 sm:text-3xl">
            Follow for Daily Love Vibes <span className="not-italic">❤️</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Instagram influencer & digital creator crafting authentic stories in
            lifestyle, fashion, beauty and travel — from Pithoragarh to your feed.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold"
            >
              <Instagram className="h-4 w-4" /> Follow on Instagram
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Collaborate
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-muted-foreground">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-all hover:-translate-y-0.5 hover:text-gold-ink"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Khushi"
              className="transition-colors hover:text-gold-ink"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a href={`tel:${PHONE}`} aria-label="Call Khushi" className="transition-colors hover:text-gold-ink">
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] gold-underline sm:ml-2 sm:tracking-[0.3em]"
            >
              @khushi_kathayat07
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

function About() {
  const ref = useReveal<HTMLElement>();
  const profile = [
    { label: "Creator", value: "Khushi" },
    { label: "Brand", value: "Meethi Talks" },
    { label: "Profession", value: "Instagram Influencer & Digital Creator" },
    { label: "Education", value: "B.Com Graduate" },
    { label: "Hometown", value: "Pithoragarh, Uttarakhand, India" },
  ];
  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-background py-28 lg:py-36"
    >
      {/* Unblurred, a 5%-opacity photo reads as a smudge behind the cards
          rather than as texture. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${g13})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(40px) saturate(1.2)",
          transform: "scale(1.15)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-rose/40" />
          <img
            src={aboutImage}
            alt="Khushi — Meethi Talks"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-luxe lg:h-[620px]"
          />
          <div className="absolute -bottom-5 right-4 hidden rounded-2xl border border-border bg-background/95 px-5 py-3 shadow-soft backdrop-blur sm:block">
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Based in</div>
            <div className="font-display text-lg">Pithoragarh, IN</div>
          </div>
        </div>
        <div className="reveal">
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            A quiet luxury of everyday moments.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Hi, I'm Khushi — the heart behind Meethi Talks. What began as a personal journal from
            the hills of Pithoragarh has grown into a creative space where I share daily love vibes,
            fashion diaries and lifestyle stories with a community that feels like home.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I write, style, shoot and edit every piece of content in-house — so what reaches your
            audience feels unmistakably human, warm and real.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {profile.map((p) => (
              <div
                key={p.label}
                className="group rounded-2xl border border-border bg-ivory p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-soft"
              >
                <dt className="text-[10px] uppercase tracking-[0.28em] text-gold">{p.label}</dt>
                <dd className="mt-1.5 font-display text-lg leading-snug">{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function StatNumber({ v, suffix, decimals }: { v: number; suffix: string; decimals?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const val = useCounter(v, decimals ?? 0, inView);
  return (
    <div ref={ref} className="font-display text-5xl leading-none tracking-tight">
      {val}
      <span className="text-gold">{suffix}</span>
    </div>
  );
}

function Stats() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-beige py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Instagram Statistics"
          title="Numbers that translate into results."
          sub="A community of engaged women who trust the recommendations they see here."
        />
        <div className="reveal mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-luxe sm:p-8"
            >
              <StatNumber v={s.value} suffix={s.suffix} decimals={s.decimals} />
              <div className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Audience Insights"
          title="Who's actually watching."
          sub="An engaged, majority-women audience with real spending power across metro India and the diaspora."
        />
        <div className="reveal mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-ivory p-8">
            <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Age</h3>
            <ul className="mt-6 space-y-5">
              {AUDIENCE.age.map((a) => (
                <li key={a.label}>
                  <div className="flex justify-between text-sm">
                    <span>{a.label}</span>
                    <span className="text-gold">{a.pct}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-foreground transition-[width] duration-1000"
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-ivory p-8">
            <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Gender</h3>
            <div className="mt-8 flex items-end justify-around gap-6">
              {AUDIENCE.gender.map((g) => (
                <div key={g.label} className="flex flex-col items-center">
                  <div className="relative h-40 w-16 overflow-hidden rounded-full bg-border">
                    <div
                      className="absolute inset-x-0 bottom-0 rounded-full bg-gradient-to-t from-gold to-gold-soft"
                      style={{ height: `${g.pct}%` }}
                    />
                  </div>
                  <div className="mt-4 font-display text-2xl">{g.pct}%</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {g.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-ivory p-8">
            <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Top Locations</h3>
            {/* Countries and cities are two separate rankings — pairing them
                row-by-row read as "United States → Delhi". */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold-ink">Countries</div>
                <ol className="mt-3 space-y-2.5">
                  {AUDIENCE.countries.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ol>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold-ink">Cities</div>
                <ol className="mt-3 space-y-2.5 text-muted-foreground">
                  {AUDIENCE.cities.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-ivory p-8 lg:col-span-3">
            <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Interests</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {AUDIENCE.interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-background px-5 py-2 text-sm transition-colors hover:border-gold hover:text-gold"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collaborations() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="collaborations" ref={ref} className="bg-beige py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Featured Collaborations"
          title="Campaigns brands come back for."
        />
        <div className="reveal mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {COLLABS.map((c) => (
            <article
              key={c.brand}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-luxe"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {c.brand}
                  </div>
                  <h3 className="mt-3 font-display text-3xl">{c.campaign}</h3>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{c.objective}</p>
              <div className="mt-6 border-t border-border pt-6 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Delivered</span>
                  <span>{c.deliverables}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Reach</span>
                  <span>{c.reach}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Engagement</span>
                  <span className="text-gold">{c.engagement}</span>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] gold-underline">
                View Campaign <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useReveal<HTMLElement>();
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  // An overlay that only closes on click traps keyboard and touch users.
  useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section id="portfolio" ref={ref} className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle eyebrow="Portfolio" title="A curated visual diary." />
        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {GALLERY_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                cat === c
                  ? "border-foreground bg-foreground text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="reveal mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          {items.map((g, i) => (
            <button
              key={`${g.cat}-${i}`}
              onClick={() => setLightbox(g.src)}
              aria-label={`Open ${g.cat.toLowerCase()} photo in full size`}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              <img
                src={g.src}
                alt={g.cat}
                loading="lazy"
                style={{ aspectRatio: GALLERY_RATIO[g.h] ?? "4 / 5" }}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground">
                  {g.cat}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[70] flex animate-fade-in items-center justify-center bg-foreground/85 p-6 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            autoFocus
            className="absolute right-6 top-6 inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-primary-foreground transition-colors hover:bg-white/10"
            aria-label="Close photo viewer"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function Services() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="services" ref={ref} className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Services"
          title="Ways we can work together."
          sub="Standalone deliverables or full campaign retainers — every engagement is scoped to your goals."
        />
        <div className="reveal mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-luxe"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-beige text-foreground transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{s.timeline}</span>
                <span className="text-foreground">{s.price}</span>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] gold-underline"
              >
                Inquire Now <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Why Work With Me"
          title="A creative partner, not just a channel."
        />
        <div className="reveal mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="group bg-background p-8 transition-colors hover:bg-ivory"
            >
              <div className="font-display text-3xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useReveal<HTMLElement>();
  // `i` is a dependency so picking a dot restarts the dwell time instead of
  // flipping to the next quote a fraction of a second later.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);
  const t = TESTIMONIALS[i];

  return (
    <section
      id="testimonials"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="bg-beige py-28 lg:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <SectionTitle eyebrow="Testimonials" title="Kind words from brand partners." />
        <div className="reveal mt-14 min-h-[220px]">
          <div key={i} className="animate-fade-up">
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-gold" />
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-relaxed sm:text-3xl">
              "{t.quote}"
            </p>
            <div className="mt-8">
              <div className="font-medium">{t.name}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {t.role}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${
                i === k ? "w-8 bg-foreground" : "w-1.5 bg-border"
              }`}
              aria-label={`Testimonial ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandMarquee() {
  return (
    <section className="group border-y border-border bg-background py-14 overflow-hidden">
      <div className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by brands
      </div>
      {/* Two identical halves: translating exactly -50% then lands the second
          half where the first started, so the loop has no visible jump. */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((half) => (
          <ul key={half} aria-hidden={half === 1} className="flex shrink-0 gap-16 pr-16">
            {BRANDS.map((b) => (
              <li
                key={b}
                className="whitespace-nowrap font-display text-2xl tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

function Awards() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Awards & Recognition"
          title="Selected features and moments."
        />
        <ol className="reveal mt-16 relative border-l border-border pl-8">
          {AWARDS.map((a) => (
            <li key={a.title} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-2 grid h-6 w-6 place-items-center rounded-full border border-border bg-background">
                <span className="h-2 w-2 rounded-full bg-gold" />
              </span>
              <div className="text-xs uppercase tracking-[0.28em] text-gold">{a.year}</div>
              <h3 className="mt-2 font-display text-2xl">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Good questions, honest answers." />
        <div className="reveal mt-14 divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  id={`faq-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <span className="font-display text-xl sm:text-2xl">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-gold">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid overflow-hidden transition-all duration-500 ${
                    isOpen ? "visible" : "invisible"
                  }`}
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pb-6 pr-14 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CONTACT_STEPS = [
  { title: "You send the enquiry", body: "The form copies your brief and opens a DM to Khushi." },
  { title: "A reply within 24 hours", body: "Availability, a tailored quote and the next open slot." },
  { title: "We lock the brief", body: "Concept, deliverables and shoot dates confirmed in writing." },
];

const EMAIL = "khushikathayat.official@gmail.com";
const IG_HANDLE = "khushi_kathayat07";
/** ig.me opens the Instagram app (or web DM) straight on Khushi's inbox. */
const IG_DM_URL = `https://ig.me/m/${IG_HANDLE}`;
const GMAIL_COMPOSE = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${EMAIL}`;

const PROJECT_TYPES = [
  "Brand campaign",
  "Reels & UGC",
  "Photography",
  "Event coverage",
  "Long-term retainer",
  "Something else",
];

const BUDGETS = ["Under ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000+", "Not sure yet"];

type Enquiry = {
  name: string;
  email: string;
  brand: string;
  project: string;
  budget: string;
  message: string;
};

const EMPTY_ENQUIRY: Enquiry = {
  name: "",
  email: "",
  brand: "",
  project: PROJECT_TYPES[0],
  budget: "",
  message: "",
};

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-border bg-ivory px-4 py-3 text-[15px] text-foreground shadow-field transition-colors placeholder:text-muted-foreground/70 hover:border-gold-soft focus:border-gold focus:bg-background focus:outline-none focus:ring-4 focus:ring-gold/15";
const labelClass = "text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground";

function buildEnquiryMessage(form: Enquiry) {
  return [
    `Hi Khushi! I'm ${form.name.trim()} and I'd love to collaborate. ✨`,
    "",
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    ...(form.brand.trim() ? [`Brand / company: ${form.brand.trim()}`] : []),
    `Project: ${form.project}`,
    ...(form.budget ? [`Budget: ${form.budget}`] : []),
    "",
    form.message.trim(),
  ].join("\n");
}

function Contact() {
  const [form, setForm] = useState<Enquiry>(EMPTY_ENQUIRY);
  const [draft, setDraft] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const ref = useReveal<HTMLElement>();

  const update = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    // Any edit invalidates the draft that was handed to Instagram.
    setDraft("");
    setCopyState("idle");
  };

  const copyToClipboard = (message: string) =>
    navigator.clipboard
      ?.writeText(message)
      .then(() => setCopyState("copied"))
      .catch(() => setCopyState("manual")) ?? setCopyState("manual");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = buildEnquiryMessage(form);
    setDraft(message);

    // Instagram deep links cannot carry a prefilled body, so the enquiry goes
    // to the clipboard and the DM thread opens ready to paste. Both calls stay
    // inside the submit gesture — awaiting the clipboard first would let the
    // popup blocker swallow the new tab.
    void copyToClipboard(message);
    window.open(IG_DM_URL, "_blank", "noopener,noreferrer");
  };

  const channels: Array<{
    icon: typeof Mail;
    label: string;
    value: string;
    href?: string;
    external?: boolean;
  }> = [
    { icon: Instagram, label: "Instagram", value: `@${IG_HANDLE}`, href: IG_URL, external: true },
    { icon: Mail, label: "Email", value: EMAIL, href: GMAIL_COMPOSE, external: true },
    { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE}` },
    { icon: MapPin, label: "Based in", value: "Pithoragarh, Uttarakhand, India" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-blush py-28 lg:py-36"
    >
      {/* Warm, low-contrast atmosphere instead of a hard black block. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${bgContact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(18px) saturate(1.1)",
          transform: "scale(1.1)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-beige via-rose/25 to-beige"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-28 top-24 h-96 w-96 rounded-full bg-rose/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold-soft/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Let&rsquo;s build something amazing{" "}
            <em className="not-italic text-gold-ink">together</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell me about your brand and I&rsquo;ll reply on Instagram within 24 hours.
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="rounded-3xl border border-border bg-background p-6 shadow-luxe sm:p-9">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-rose to-gold-soft text-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl leading-none">Send an enquiry</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Opens a DM to @{IG_HANDLE} with your details copied, ready to paste.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate={false} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>
                  Name <span className="text-gold-ink">*</span>
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>
                  Email <span className="text-gold-ink">*</span>
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@brand.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Brand / company</span>
                <input
                  type="text"
                  name="brand"
                  autoComplete="organization"
                  placeholder="Optional"
                  value={form.brand}
                  onChange={(e) => update("brand", e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Budget</span>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={`${fieldClass} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                  }}
                >
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>

              <fieldset className="sm:col-span-2">
                <legend className={labelClass}>Project type</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => {
                    const selected = form.project === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => update("project", type)}
                        className={`rounded-full border px-4 py-2 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                          selected
                            ? "border-foreground bg-foreground text-primary-foreground"
                            : "border-border bg-ivory text-muted-foreground hover:border-gold hover:text-foreground"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className="block sm:col-span-2">
                <span className={labelClass}>
                  About the project <span className="text-gold-ink">*</span>
                </span>
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Goals, deliverables, timelines — anything that helps me quote accurately."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-gold-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:col-span-2"
              >
                <Instagram className="h-4 w-4" />
                Send enquiry on Instagram
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              <p className="text-center text-xs text-muted-foreground sm:col-span-2">
                Prefer email?{" "}
                <a
                  href={GMAIL_COMPOSE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground gold-underline"
                >
                  Write to {EMAIL}
                </a>
              </p>
            </form>

            {draft && (
              <div className="mt-7 animate-fade-up rounded-2xl border border-gold/40 bg-ivory p-5">
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-ink">
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">
                      {copyState === "copied"
                        ? "Copied — paste it into the Instagram chat."
                        : "Your enquiry is ready. Copy it below and paste it into the chat."}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Instagram can&rsquo;t prefill messages, so the DM opens empty on purpose.
                    </p>
                  </div>
                </div>
                <pre className="mt-4 max-h-44 overflow-auto whitespace-pre-wrap break-words rounded-xl border border-border bg-background p-4 font-sans text-[13px] leading-relaxed text-muted-foreground">
                  {draft}
                </pre>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => void copyToClipboard(draft)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-xs uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold-ink"
                  >
                    {copyState === "copied" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copyState === "copied" ? "Copied" : "Copy message"}
                  </button>
                  <a
                    href={IG_DM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-gold-ink"
                  >
                    <Instagram className="h-3.5 w-3.5" /> Open the DM
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            {channels.map((c) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-soft">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ivory text-gold-ink">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 truncate text-[15px]">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}

            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                What happens next
              </div>
              <ol className="mt-4 space-y-4">
                {CONTACT_STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-3.5">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ivory font-display text-sm text-gold-ink">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[15px] leading-snug">{step.title}</div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-rose/45 to-gold-soft/25 p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-ink">
                Follow for Daily Love Vibes ❤️
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/75">
                DMs are open for collaborations and press. Say hi on Instagram — most enquiries get
                a reply the same day.
              </p>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-background px-5 text-xs uppercase tracking-[0.18em] transition-colors hover:text-gold-ink"
              >
                <Instagram className="h-4 w-4" /> @{IG_HANDLE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const socials: Array<{ I: typeof Instagram; href: string; label: string; external?: boolean }> = [
    { I: Instagram, href: IG_URL, label: "Instagram", external: true },
    { I: MessageCircle, href: IG_DM_URL, label: "Message on Instagram", external: true },
    { I: Mail, href: GMAIL_COMPOSE, label: "Email", external: true },
  ];
  return (
    <footer className="border-t border-border bg-ivory py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="font-display text-2xl">Meethi Talks</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">by Khushi</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Follow for Daily Love Vibes ❤️ — by Khushi, from Pithoragarh.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(1).map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="gold-underline">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Follow</div>
          <div className="mt-4 flex gap-4 text-muted-foreground">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="transition-all hover:-translate-y-0.5 hover:text-gold"
              >
                <s.I className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-5 space-y-1 text-sm">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 gold-underline">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Newsletter</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            className="mt-4 flex items-center border-b border-border"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="p-1 text-muted-foreground transition-colors hover:text-gold-ink"
              aria-label="Subscribe"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p aria-live="polite" className="mt-2 text-xs text-muted-foreground">
            {subscribed
              ? "Thanks — you're on the list. ❤️"
              : "Occasional notes on new work. No spam."}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
        <div>© {new Date().getFullYear()} Meethi Talks by Khushi. All rights reserved.</div>
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="gold-underline">
          Follow for Daily Love Vibes ❤️
        </a>
      </div>
    </footer>
  );
}

function ParallaxStrip({
  src,
  quote,
}: {
  src: string;
  quote: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = 1 - (rect.top + rect.height / 2) / (vh + rect.height / 2);
      setY(Math.max(-40, Math.min(40, (p - 0.5) * 80)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <section
      ref={ref}
      className="relative h-[55vh] min-h-[380px] overflow-hidden bg-foreground"
      aria-hidden={false}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${y}px, 0)` }}
      />
      {/* The quote sits over whatever the photo happens to be, so the scrim has
          to hold on light frames too. */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/45 to-foreground/65" />
      <div className="relative mx-auto flex h-full max-w-4xl items-center justify-center px-6 text-center">
        <p className="font-display text-3xl italic leading-snug text-primary-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl">
          "{quote}"
        </p>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ParallaxStrip src={g10} quote="Follow for Daily Love Vibes ❤️" />
        <Stats />
        <Audience />
        <Collaborations />
        <Portfolio />
        <ParallaxStrip src={g3} quote="Stories styled with warmth, from the hills of Pithoragarh." />
        <Services />
        <WhyMe />
        <Testimonials />
        <BrandMarquee />
        <Awards />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
