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
} from "lucide-react";

import heroPortraitAsset from "@/assets/photos/1000093897.jpg.asset.json";
import aboutImageAsset from "@/assets/photos/1000093894.jpg.asset.json";
import p895 from "@/assets/photos/1000093895.jpg.asset.json";
import p896 from "@/assets/photos/1000093896.jpg.asset.json";
import p898 from "@/assets/photos/1000093898.jpg.asset.json";
import p899 from "@/assets/photos/1000093899.jpg.asset.json";
import p900 from "@/assets/photos/1000093900.jpg.asset.json";
import p901 from "@/assets/photos/1000093901.jpg.asset.json";
import p904 from "@/assets/photos/1000093904.jpg.asset.json";
import p907 from "@/assets/photos/1000093907.jpg.asset.json";
import p892 from "@/assets/photos/1000093892.jpg.asset.json";
import p893 from "@/assets/photos/1000093893.jpg.asset.json";
import p902 from "@/assets/photos/1000093902.jpg.asset.json";
import p903 from "@/assets/photos/1000093903.jpg.asset.json";
import p905 from "@/assets/photos/1000093905.jpg.asset.json";
import p906 from "@/assets/photos/1000093906.jpg.asset.json";
import p908 from "@/assets/photos/1000093908.jpg.asset.json";
import p909 from "@/assets/photos/1000093909.jpg.asset.json";
import p910 from "@/assets/photos/1000093910.jpg.asset.json";

const IG_URL = "https://instagram.com/meethi_talks";
const PHONE = "7555149784";

const heroPortrait = heroPortraitAsset.url;
const aboutImage = aboutImageAsset.url;
const bgLifestyle = p902.url;
const bgContact = aboutImageAsset.url;
const g1 = p896.url;
const g2 = p907.url;
const g3 = p899.url;
const g4 = p901.url;
const g5 = p898.url;
const g6 = p895.url;
const g7 = p900.url;
const g8 = p904.url;
const g9 = p892.url;
const g10 = p893.url;
const g11 = p903.url;
const g12 = p905.url;
const g13 = p906.url;
const g14 = p908.url;
const g15 = p909.url;
const g16 = p910.url;

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

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "collaborations", label: "Collaborations" },
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

const GALLERY_CATS = ["All", "Fashion", "Beauty", "Travel", "Food", "Lifestyle", "UGC", "Reels", "Photography"];

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
      "Khushboo turned our launch into an editorial moment. The Reel outperformed our paid campaign by 3×.",
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

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 120;
      for (const n of [...NAV].reverse()) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) {
          setActive(n.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-tight">Meethi Talks</span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              by Khushi
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`text-sm tracking-wide transition-colors ${
                  active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-gold lg:inline-block"
          >
            Work With Me
          </a>
          <button
            aria-label="Open menu"
            className="rounded-full border border-border p-2 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] animate-fade-in bg-ivory lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-2xl">Meethi Talks</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full border border-border p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 pt-12">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="font-display text-4xl"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-foreground px-8 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground"
            >
              Work With Me
            </a>
          </nav>
        </div>
      )}
    </>
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
          <div className="mt-12 flex items-center gap-5 text-muted-foreground">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-all hover:-translate-y-0.5 hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-gold">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-gold">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="mailto:khushikathayat.official@gmail.com" aria-label="Email" className="transition-colors hover:text-gold">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-xs uppercase tracking-[0.3em] gold-underline"
            >
              @meethi_talks
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-beige/70" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={heroPortrait}
              alt="Khushi — Meethi Talks portrait"
              width={1024}
              height={1408}
              className="h-[560px] w-full object-cover transition-transform duration-[6s] hover:scale-105 lg:h-[680px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-soft backdrop-blur-md sm:block">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">This month</div>
            <div className="mt-1 font-display text-2xl">2.4M reach</div>
          </div>
          <div className="absolute -right-4 top-10 hidden rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-soft backdrop-blur-md sm:block">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Engagement</div>
            <div className="mt-1 font-display text-2xl text-gold">6.8%</div>
          </div>
        </div>
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
  return (
    <section id="about" ref={ref} className="bg-background py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-rose/40" />
          <img
            src={aboutImage}
            alt="Editorial flatlay"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-luxe lg:h-[620px]"
          />
        </div>
        <div className="reveal">
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            A quiet luxury of everyday moments.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Meethi Talks began as a personal journal — a place to notice the softer texture of things.
            Five years on, it has grown into a considered creative studio that partners with brands
            who share the same devotion to craft, warmth and honesty.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I write, style, shoot and edit every piece of content in-house — so what reaches your
            audience feels unmistakably human. Whether it's a launch reel, a hotel diary or a beauty
            ritual, the promise is the same: stories that people save, share and remember.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Mission</dt>
              <dd className="mt-2 font-display text-xl">Warm stories</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Values</dt>
              <dd className="mt-2 font-display text-xl">Craft · Trust</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Since</dt>
              <dd className="mt-2 font-display text-xl">2020</dd>
            </div>
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
            <ul className="mt-6 divide-y divide-border text-sm">
              {AUDIENCE.countries.map((c, i) => (
                <li key={c} className="flex items-center justify-between py-2.5">
                  <span>{c}</span>
                  <span className="text-muted-foreground">{AUDIENCE.cities[i]}</span>
                </li>
              ))}
            </ul>
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
              key={i}
              onClick={() => setLightbox(g.src)}
              className="group relative block w-full overflow-hidden rounded-2xl"
            >
              <img
                src={g.src}
                alt={g.cat}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-105"
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
          className="fixed inset-0 z-[70] flex animate-fade-in items-center justify-center bg-foreground/85 p-6 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 text-primary-foreground" aria-label="Close">
            <X className="h-7 w-7" />
          </button>
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-luxe" />
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
  const ref = useReveal<HTMLElement>();
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" ref={ref} className="bg-beige py-28 lg:py-36">
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
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-border bg-background py-14 overflow-hidden">
      <div className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by brands
      </div>
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {row.map((b, i) => (
          <span
            key={i}
            className="font-display text-2xl tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            {b}
          </span>
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
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl sm:text-2xl">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-500"
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

function Contact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="contact" ref={ref} className="bg-foreground text-primary-foreground py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Let's build something amazing <em className="not-italic text-gold">together</em>.
          </h2>
          <p className="mt-5 text-white/70">
            Share a little about your brand and campaign — I reply within 24 hours.
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:khushikathayat.official@gmail.com`;
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {[
              { name: "Name", type: "text" },
              { name: "Email", type: "email" },
              { name: "Company", type: "text" },
              { name: "Budget", type: "text" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="text-xs uppercase tracking-[0.25em] text-white/60">{f.name}</span>
                <input
                  required
                  type={f.type}
                  className="mt-2 w-full border-b border-white/25 bg-transparent py-3 text-primary-foreground outline-none placeholder:text-white/40 focus:border-gold"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.25em] text-white/60">Project Type</span>
              <input
                type="text"
                placeholder="Reels · Campaign · UGC · Event…"
                className="mt-2 w-full border-b border-white/25 bg-transparent py-3 outline-none placeholder:text-white/40 focus:border-gold"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.25em] text-white/60">Message</span>
              <textarea
                rows={4}
                required
                className="mt-2 w-full resize-none border-b border-white/25 bg-transparent py-3 outline-none placeholder:text-white/40 focus:border-gold"
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-primary-foreground sm:col-span-2"
            >
              Send Enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>

          <div className="space-y-8 lg:pl-8">
            {[
              { icon: Mail, label: "Email", val: "khushikathayat.official@gmail.com" },
              { icon: Instagram, label: "Instagram", val: "@meethi.talks" },
              { icon: Phone, label: "Phone", val: "+91 98765 43210" },
              { icon: MapPin, label: "Based in", val: "Mumbai, India" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50">{c.label}</div>
                  <div className="mt-1 truncate">{c.val}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Business inquiries</div>
              <p className="mt-2 text-sm text-white/70">
                For press, PR mailers and long-form partnerships, please write directly to the email
                above with your brief and timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-ivory py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="font-display text-2xl">Meethi Talks</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Authentic stories, styled with warmth. By Khushboo Singh.
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
            {[Instagram, Youtube, Facebook, Mail].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="hover:text-gold">
                <I className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Newsletter</div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center border-b border-border">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="text-muted-foreground hover:text-gold" aria-label="Subscribe">
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
        <div>© {new Date().getFullYear()} Meethi Talks · Khushboo Singh. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="gold-underline">Privacy</a>
          <a href="#" className="gold-underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

function Home() {
  // Scroll progress indicator
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProg(Math.max(0, Math.min(1, p)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[55] h-[2px] bg-gold transition-[width]"
        style={{ width: `${prog * 100}%` }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Audience />
        <Collaborations />
        <Portfolio />
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
