import { useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import khushiPortrait from "@/assets/photos/1000093894.jpg";

const INSTAGRAM_MESSAGE_URL = "https://ig.me/m/khushi_kathayat07";
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/khushi_kathayat07/";
const EMAIL = "khushikathayat.official@gmail.com";
const PROJECT_TYPES = [
  "Brand campaign",
  "Reels & UGC",
  "Photography",
  "Event coverage",
  "Something else",
];

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-[#dac8d1] bg-[#fffafb] px-4 py-3 text-base text-[#54384f] placeholder:text-[#86747f] transition-colors hover:border-[#b995a5] focus:border-[#a34569] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a34569]/20";

type Enquiry = {
  name: string;
  email: string;
  brand: string;
  project: string;
  budget: string;
  message: string;
};

export function ContactSection() {
  const [form, setForm] = useState<Enquiry>({
    name: "",
    email: "",
    brand: "",
    project: PROJECT_TYPES[0],
    budget: "",
    message: "",
  });
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "copied" | "manual">("idle");
  const copyAttempt = useRef(0);

  function updateField(field: keyof Enquiry, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setDraft("");
    setCopyStatus("idle");
    copyAttempt.current += 1;
  }

  async function copyMessage(message: string) {
    const attempt = ++copyAttempt.current;
    setCopyStatus("copying");
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard is unavailable");
      }
      await navigator.clipboard.writeText(message);
      if (attempt === copyAttempt.current) setCopyStatus("copied");
    } catch {
      if (attempt === copyAttempt.current) setCopyStatus("manual");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const messageField = event.currentTarget.elements.namedItem("message") as HTMLTextAreaElement;
    if (!form.message.trim()) {
      messageField.setCustomValidity("Please add a little about your project.");
      messageField.reportValidity();
      return;
    }

    const message = [
      `Hi Khushi! I'm ${form.name.trim()} and I'd love to collaborate.`,
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      ...(form.brand.trim() ? [`Brand / company: ${form.brand.trim()}`] : []),
      `Project: ${form.project}`,
      ...(form.budget ? [`Budget: ${form.budget}`] : []),
      "",
      form.message.trim(),
    ].join("\n");

    setDraft(message);
    // Start both actions during the submit gesture. Awaiting the clipboard first
    // can cause the browser to block the Instagram window as a popup.
    void copyMessage(message);
    try {
      window.open(INSTAGRAM_MESSAGE_URL, "_blank", "noopener,noreferrer");
    } catch {
      // The prepared draft and regular links below also work if popups fail.
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#fff1f4] py-20 text-[#54384f] sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:pt-5">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-[#a34569]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Let’s talk collaborations
            </p>
            <h2
              id="contact-heading"
              className="mt-5 max-w-lg font-display text-[2.75rem] leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              Your next story starts here.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#745d6d]">
              A fresh idea, a brand you love, a moment worth sharing. Tell me what you have in mind
              and let’s bring it to life.
            </p>

            <div className="mt-9 flex items-center gap-4 border-y border-[#e5cdd7] py-6">
              <img
                src={khushiPortrait}
                alt="Khushi Kathayat"
                loading="lazy"
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-full border-4 border-white object-cover object-[center_30%]"
              />
              <div className="min-w-0">
                <p className="font-display text-3xl leading-tight">Khushi Kathayat</p>
                <p className="mt-1 text-sm text-[#745d6d]">Creator behind Meethi Talks</p>
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-7 items-center gap-1 break-all text-sm font-medium text-[#a34569] underline-offset-4 hover:underline"
                >
                  @khushi_kathayat07
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-7 space-y-4 text-sm">
              <a
                href={`mailto:${EMAIL}`}
                className="flex min-h-11 items-center gap-3 text-[#745d6d] transition-colors hover:text-[#a34569]"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-all">{EMAIL}</span>
              </a>
              <a
                href="tel:+917555149784"
                className="flex min-h-11 items-center gap-3 text-[#745d6d] transition-colors hover:text-[#a34569]"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                +91 75551 49784
              </a>
              <p className="flex items-start gap-3 leading-relaxed text-[#745d6d]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Pithoragarh, Uttarakhand, India
              </p>
            </div>
          </div>

          <div className="min-w-0 rounded-[1.75rem] border border-[#ead8e0] bg-white p-5 shadow-[0_16px_60px_-24px_rgba(117,62,89,0.22)] sm:rounded-[2rem] sm:p-8 lg:p-10">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                  Tell me about your idea
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#745d6d]">
                  A few details to get the conversation started.
                </p>
              </div>
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fff1f4] text-[#a34569]"
                aria-hidden="true"
              >
                <Instagram className="h-5 w-5" />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-xs text-[#745d6d]">
                Name, email and project details are required.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block min-w-0 text-sm font-medium">
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    pattern=".*\S.*"
                    title="Please enter your name."
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="How should I call you?"
                    className={fieldClassName}
                  />
                </label>
                <label className="block min-w-0 text-sm font-medium">
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="you@yourbrand.com"
                    className={fieldClassName}
                  />
                </label>
              </div>

              <label className="block text-sm font-medium">
                Brand or company <span className="font-normal text-[#745d6d]">(optional)</span>
                <input
                  name="brand"
                  autoComplete="organization"
                  value={form.brand}
                  onChange={(event) => updateField("brand", event.target.value)}
                  placeholder="The name behind the idea"
                  className={fieldClassName}
                />
              </label>

              <fieldset>
                <legend className="mb-3 text-sm font-medium">What are we creating?</legend>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((project) => (
                    <label key={project} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="project"
                        value={project}
                        checked={form.project === project}
                        onChange={() => updateField("project", project)}
                        className="peer sr-only"
                      />
                      <span className="inline-flex min-h-11 items-center rounded-full border border-[#dac8d1] px-4 py-2.5 text-sm text-[#745d6d] transition-colors hover:border-[#a34569] peer-checked:border-[#a34569] peer-checked:bg-[#fff1f4] peer-checked:text-[#8d3457] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-[#a34569]">
                        {project}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block text-sm font-medium">
                Budget range <span className="font-normal text-[#745d6d]">(optional)</span>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={(event) => updateField("budget", event.target.value)}
                  className={fieldClassName}
                >
                  <option value="">Let’s discuss it</option>
                  <option value="Under ₹15,000">Under ₹15,000</option>
                  <option value="₹15,000–₹30,000">₹15,000–₹30,000</option>
                  <option value="₹30,000–₹60,000">₹30,000–₹60,000</option>
                  <option value="₹60,000+">₹60,000+</option>
                </select>
              </label>

              <label className="block text-sm font-medium">
                A little about your project
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(event) => {
                    event.target.setCustomValidity("");
                    updateField("message", event.target.value);
                  }}
                  placeholder="Share your idea, the content you need and any dates you have in mind…"
                  className={`${fieldClassName} min-h-32 resize-y leading-relaxed`}
                />
              </label>

              <div>
                <button
                  type="submit"
                  aria-describedby="instagram-handoff-help"
                  className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#a34569] px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-[#8d3457] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a34569]"
                >
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Continue on Instagram
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
                <p
                  id="instagram-handoff-help"
                  className="mx-auto mt-3 max-w-md text-center text-xs leading-relaxed text-[#745d6d]"
                >
                  We’ll prepare a copy of your enquiry and open Instagram. Paste it into Khushi’s
                  chat and tap Send. You may need to sign in.
                </p>
              </div>

              {draft && (
                <div className="rounded-2xl border border-[#e5cdd7] bg-[#fff6f8] p-4 sm:p-5">
                  <p className="font-medium" role="status">
                    Your enquiry is ready to send
                  </p>
                  <p
                    id="prepared-enquiry-help"
                    className="mt-2 text-sm leading-relaxed text-[#745d6d]"
                  >
                    Paste this message into Khushi’s Instagram chat, then tap Send. If the chat
                    doesn’t open, visit her profile and choose Message.
                  </p>
                  <label className="mt-4 block text-sm font-medium">
                    Your prepared message
                    <textarea
                      readOnly
                      value={draft}
                      rows={7}
                      aria-describedby="prepared-enquiry-help"
                      onFocus={(event) => event.currentTarget.select()}
                      className={`${fieldClassName} resize-y bg-white text-base font-normal leading-relaxed`}
                    />
                  </label>
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-3 text-sm leading-relaxed text-[#745d6d]"
                  >
                    {copyStatus === "copied"
                      ? "Message copied. It’s ready to paste in Instagram."
                      : copyStatus === "copying"
                        ? "Copying your message…"
                        : "Automatic copying wasn’t available. Try Copy message or select and copy the text above."}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => void copyMessage(draft)}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#c599ab] bg-white px-4 py-2 text-sm font-medium text-[#8d3457] hover:bg-[#fff1f4]"
                    >
                      {copyStatus === "copied" ? (
                        <Check className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                      Copy message
                    </button>
                    <a
                      href={INSTAGRAM_MESSAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#a34569] px-4 py-2 text-sm font-medium text-white hover:bg-[#8d3457]"
                    >
                      Open Instagram
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-[#8d3457] underline underline-offset-4"
                  >
                    Visit Khushi’s profile
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
