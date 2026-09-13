import { useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "collaborations", label: "Collaborations" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
];

const SECTION_IDS = [...NAV_ITEMS.map(({ id }) => id), "contact"];
const FOCUS_STYLE =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const destinationRef = useRef<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const updatePosition = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);
      const marker = (headerRef.current?.offsetHeight ?? 80) + 36;

      // Section order can change independently of the navigation labels.
      const sections = SECTION_IDS.flatMap((id) => {
        const section = document.getElementById(id);
        return section ? [{ id, top: section.getBoundingClientRect().top }] : [];
      }).sort((a, b) => a.top - b.top);
      const current = sections.filter((section) => section.top <= marker).at(-1);
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;

      setActiveSection((atBottom ? sections.at(-1)?.id : current?.id) ?? "home");
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePosition);
    };

    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeDesktopMenu = () => {
      if (desktop.matches) setOpen(false);
      scheduleUpdate();
    };

    updatePosition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    desktop.addEventListener("change", closeDesktopMenu);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      desktop.removeEventListener("change", closeDesktopMenu);
      observer.disconnect();
    };
  }, []);

  return (
    <Sheet
      open={open}
      onOpenChange={(nextOpen) => {
        if (nextOpen) destinationRef.current = null;
        setOpen(nextOpen);
      }}
    >
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? "shadow-soft" : "shadow-none"}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-10">
          <a
            ref={brandRef}
            href="#home"
            aria-label="Meethi Talks by Khushi — home"
            className={`flex min-h-11 shrink-0 flex-col justify-center rounded-sm ${FOCUS_STYLE}`}
          >
            <span className="font-display text-[1.75rem] font-medium leading-none tracking-tight">
              Meethi Talks
            </span>
            <span className="mt-1 text-[11px] leading-none tracking-[0.08em] text-muted-foreground">
              by Khushi
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={activeSection === id ? "location" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-full px-3 text-[13px] font-medium transition-colors ${FOCUS_STYLE} ${activeSection === id ? "bg-rose/60 text-foreground" : "text-muted-foreground hover:bg-ivory hover:text-foreground"}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              aria-current={activeSection === "contact" ? "location" : undefined}
              className={`hidden min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-[13px] font-medium text-white transition-colors hover:bg-foreground/90 sm:inline-flex ${FOCUS_STYLE}`}
            >
              Work with me
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className={`inline-flex size-11 items-center justify-center rounded-full border border-border bg-ivory text-foreground transition-colors hover:bg-rose/50 xl:hidden ${FOCUS_STYLE}`}
              >
                <Menu aria-hidden="true" className="size-5" />
              </button>
            </SheetTrigger>
          </div>
        </div>
      </header>

      <SheetPortal>
        <SheetOverlay className="z-[60] bg-foreground/20 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed inset-x-3 top-[5.75rem] z-[70] mx-auto max-h-[calc(100dvh-6.5rem)] max-w-xl overflow-y-auto overscroll-contain rounded-3xl border border-border bg-ivory p-5 shadow-luxe outline-none sm:p-7"
          onCloseAutoFocus={(event) => {
            const destination = destinationRef.current;
            if (destination) {
              const section = document.getElementById(destination);
              if (section) {
                event.preventDefault();
                section.tabIndex = -1;
                section.focus({ preventScroll: true });
              }
              destinationRef.current = null;
            } else if (window.matchMedia("(min-width: 1280px)").matches) {
              // The mobile trigger is hidden after widening to desktop.
              event.preventDefault();
              brandRef.current?.focus({ preventScroll: true });
            }
          }}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <SheetTitle className="font-display text-3xl font-medium">Meethi Talks</SheetTitle>
              <SheetDescription className="mt-1">
                Explore Khushi’s work or plan a collaboration.
              </SheetDescription>
            </div>
            <SheetClose asChild>
              <button
                type="button"
                aria-label="Close navigation menu"
                className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground hover:bg-rose/50 ${FOCUS_STYLE}`}
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </SheetClose>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="grid gap-1 sm:grid-cols-2">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <SheetClose asChild>
                    <a
                      href={`#${id}`}
                      aria-current={activeSection === id ? "location" : undefined}
                      onClick={() => {
                        destinationRef.current = id;
                      }}
                      className={`flex min-h-12 items-center rounded-xl px-4 py-2 font-display text-2xl ${FOCUS_STYLE} ${activeSection === id ? "bg-rose/70 text-foreground" : "text-foreground hover:bg-white"}`}
                    >
                      {label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <SheetClose asChild>
              <a
                href="#contact"
                aria-current={activeSection === "contact" ? "location" : undefined}
                onClick={() => {
                  destinationRef.current = "contact";
                }}
                className={`mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white hover:bg-foreground/90 ${FOCUS_STYLE}`}
              >
                Work with me
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </SheetClose>
          </nav>
        </DialogPrimitive.Content>
      </SheetPortal>
    </Sheet>
  );
}
