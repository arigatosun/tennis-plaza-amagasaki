"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  MessageCircle,
  Sparkles,
  Trophy,
  UsersRound
} from "lucide-react";
import { recruitPage } from "@/data/recruit";
import { BlurText } from "@/components/react-bits/BlurText";
import { ClickSpark } from "@/components/react-bits/ClickSpark";
import { GridScan } from "@/components/react-bits/GridScan";
import { LightRays } from "@/components/react-bits/LightRays";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { ScrollVelocity } from "@/components/react-bits/ScrollVelocity";
import { SplitText } from "@/components/react-bits/SplitText";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";
import { VisualPanel } from "./VisualPanel";
import { useVariant } from "./VariantProvider";

const tickerItems = [
  "A QUIET RALLY",
  "コーチ未経験OK",
  "LEARN AT YOUR PACE",
  "焦らず、少しずつ",
  "PEOPLE COACH",
  "見学からで大丈夫",
  "TENNIS PLAZA AMAGASAKI"
];

const idealImages = [
  "ideal-atmosphere",
  "ideal-listen",
  "ideal-notice",
  "ideal-learn"
];
const valueImages = ["value-joy", "value-widen", "value-thanks"];
const jobImages = [
  "job-lesson-adult",
  "job-followup",
  "job-parent-talk",
  "job-guidance",
  "job-event",
  "job-operation"
];
const FACILITY = "/images/recruit/facility";
const trialImages = [
  "facility-57380",
  "facility-57387",
  "facility-57386",
  "facility-57395",
  "facility-57389"
];
const visitImages = [
  "facility-57387",
  "facility-57386",
  "facility-57390",
  "facility-57395",
  "facility-57398"
];

const ScoreboardNumber = ({ value }: { value: string }) => (
  <span aria-hidden className="rb-scoreboard">
    {value}
  </span>
);

const Folio = ({ value }: { value: string }) => (
  <span className="b-folio">{value}</span>
);

const ChapterMarker = ({ no, label }: { no: string; label: string }) => {
  const { variant } = useVariant();
  if (variant === "b") {
    return (
      <div className="flex items-center gap-4">
        <Folio value={no} />
        <span className="b-hairline max-w-24" aria-hidden />
        <span className="eyebrow !tracking-[0.22em]">{label}</span>
      </div>
    );
  }
  return <span className="eyebrow">{label}</span>;
};

/* ===== Section 1 — Hero ===== */

export function HeroSection() {
  const { variant } = useVariant();

  if (variant === "b") {
    return (
      <section className="relative overflow-hidden bg-warm pb-20 pt-10 sm:pb-24" id="top">
        <span className="b-noise" aria-hidden />
        <div className="section-shell">
          <div className="flex items-center justify-between gap-4 border-b border-ink/15 pb-4">
            <ChapterMarker label={recruitPage.hero.eyebrowB} no="Folio 01 / 18" />
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45 sm:inline">
              Tennis Plaza Amagasaki
            </span>
          </div>

          <ScrollReveal>
            <figure className="relative mt-6 overflow-hidden rounded-sm border border-ink/8 shadow-soft">
              <img
                alt="テニスプラザ尼崎の屋内コートで、コーチと生徒がコートを並んで歩く様子"
                className="h-full w-full object-cover"
                src="/images/recruit/hero-main.jpg"
                style={{
                  aspectRatio: "16/9",
                  filter: "saturate(0.96) contrast(1.03)"
                }}
              />
              <figcaption className="absolute left-4 top-4 rounded-sm bg-warm/90 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-clay backdrop-blur">
                Figure 01 — On Court, Tennis Plaza Amagasaki
              </figcaption>
            </figure>
          </ScrollReveal>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <BlurText
                as="p"
                className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-clay sm:text-base"
                text={recruitPage.hero.titleEn}
              />
              <h1 className="mt-3 whitespace-pre-line text-balance font-serif text-[2.15rem] font-semibold leading-[1.5] text-primary sm:text-[2.6rem] lg:text-[3rem]">
                {recruitPage.hero.title}
              </h1>
            </div>
            <div>
              <p className="text-sm leading-8 text-ink/74">{recruitPage.hero.body}</p>
              <ClickSpark>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {recruitPage.hero.ctas.map((cta) => (
                    <CtaButton
                      href={cta.href}
                      key={cta.label}
                      label={cta.label}
                      sectionId="hero"
                      variant={cta.variant}
                    />
                  ))}
                </div>
              </ClickSpark>
              <div className="mt-6 flex flex-wrap gap-2">
                {recruitPage.hero.badges.map((badge) => (
                  <span
                    className="inline-flex items-center gap-2 border border-ink/12 bg-warm px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink/74"
                    key={badge}
                  >
                    <Check aria-hidden size={13} />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 rb-ticker-bar">
          <ScrollVelocity items={tickerItems} />
        </div>
      </section>
    );
  }

  // Variant A — Rally Burst
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-deep text-white" id="top">
      <video
        aria-hidden
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster="/images/recruit/video/hero-court-poster.jpg"
        preload="metadata"
      >
        <source src="/images/recruit/video/hero-court-loop.mp4" type="video/mp4" />
      </video>
      <div className="court-lines absolute inset-0 opacity-20" />
      <LightRays />
      <span className="rally-trail" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/82 to-deep/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent" />

      <div className="section-shell relative flex min-h-[88svh] items-center pb-28 pt-16">
        <div className="relative max-w-4xl">
          <div className="pointer-events-none absolute -left-6 -top-12 hidden lg:block">
            <ScoreboardNumber value="01 / 19" />
          </div>
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-tennis/35 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-tennis backdrop-blur">
            <span className="inline-grid size-4 place-items-center rounded-full bg-tennis text-[10px] font-black text-deep">
              A
            </span>
            {recruitPage.hero.eyebrow}
          </p>
          <SplitText
            as="h1"
            className="text-balance font-tight text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl"
            text={recruitPage.hero.title}
          />
          {recruitPage.hero.subtitle ? (
            <BlurText
              as="p"
              className="mt-5 whitespace-pre-line text-2xl font-black leading-snug text-tennis sm:text-3xl"
              text={recruitPage.hero.subtitle}
            />
          ) : null}
          <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/82 sm:text-base">
            {recruitPage.hero.body}
          </p>
          <ClickSpark>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {recruitPage.hero.ctas.map((cta) => (
                <CtaButton
                  href={cta.href}
                  key={cta.label}
                  label={cta.label}
                  sectionId="hero"
                  variant={cta.variant}
                />
              ))}
            </div>
          </ClickSpark>
          <div className="mt-7 flex flex-wrap gap-3">
            {recruitPage.hero.badges.map((badge) => (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-black text-white backdrop-blur"
                key={badge}
              >
                <Check aria-hidden size={16} />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="rb-stripe absolute inset-x-0 bottom-12" aria-hidden />
      <div className="rb-ticker-bar absolute inset-x-0 bottom-0 backdrop-blur">
        <ScrollVelocity items={tickerItems} />
      </div>
    </section>
  );
}

/* ===== Section 2 — Why Now ===== */

export function WhyNowSection() {
  const { variant } = useVariant();
  const data = recruitPage.whyNow;

  if (variant === "b") {
    return (
      <section className="relative bg-deep py-28 text-warm" id="why-now">
        <span className="b-noise" aria-hidden />
        <div className="b-chapter">
          <div className="section-shell relative grid gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-clay">
                  {data.eyebrowB}
                </p>
                <h2 className="mt-6 whitespace-pre-line font-serif text-3xl font-semibold leading-[1.55] text-warm sm:text-4xl">
                  {data.title}
                </h2>
                <p className="mt-6 max-w-md italic text-warm/74">— Editor&apos;s Note</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="font-serif text-xl font-medium leading-9 text-warm">{data.lead}</p>
                <p className="mt-6 text-base leading-9 text-warm/78">{data.body}</p>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {data.stats.map((s) => (
                    <div key={s.label} className="border-t border-warm/24 pt-4">
                      <p className="font-serif text-4xl font-semibold text-clay">
                        {s.value}
                        <span className="ml-1 font-mono text-base text-warm/80">{s.unit}</span>
                      </p>
                      <p className="mt-2 text-xs leading-6 text-warm/68">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <figure className="section-shell relative mt-4 overflow-hidden rounded-sm">
              <img
                alt="テニスプラザ尼崎の屋外コートに差し込む夕方の光"
                className="h-full w-full object-cover"
                loading="lazy"
                src={`${FACILITY}/facility-57381.jpg`}
                style={{ aspectRatio: "21/9" }}
              />
              <figcaption className="absolute left-4 top-4 rounded-sm bg-deep/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-warm backdrop-blur">
                Figure 02 — The court, late afternoon
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-deep py-24 text-white" id="why-now">
      <LightRays variant="dark" />
      <div className="section-shell relative">
        <div className="pointer-events-none absolute right-0 top-0 hidden lg:block">
          <ScoreboardNumber value="02" />
        </div>
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            light
            title={data.title}
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="mt-6 max-w-3xl text-base leading-9 text-white/82">{data.body}</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {data.stats.map((s, i) => (
            <ScrollReveal delay={i * 90} key={s.label}>
              <div className="rounded-sm border border-tennis/30 bg-tennis/8 p-6">
                <p className="font-tight text-5xl font-black leading-none text-tennis">
                  {s.value}
                  <span className="ml-2 text-base text-white/72">{s.unit}</span>
                </p>
                <p className="mt-4 text-sm font-bold text-white/78">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <figure className="relative mt-10 overflow-hidden rounded-sm">
            <img
              alt="テニスプラザ尼崎の屋外コートに差し込む夕方の光"
              className="h-full w-full object-cover"
              loading="lazy"
              src={`${FACILITY}/facility-57381.jpg`}
              style={{ aspectRatio: "21/9" }}
            />
            <span className="rb-stripe absolute inset-x-0 bottom-0" aria-hidden />
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 3 — Empathy / Insight ===== */

export function InsightSection() {
  const data = recruitPage.insights;
  return (
    <section className="relative py-24" id="empathy">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description={data.body}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card, index) => (
            <ScrollReveal delay={index * 80} key={card.title}>
              <SpotlightCard className="h-full p-6">
                <MessageCircle aria-hidden className="mb-5 text-court" size={28} />
                <h3 className="display-heading text-lg leading-7 text-primary">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/70">{card.text}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 overflow-hidden rounded-sm bg-primary p-7 text-white sm:p-10">
            <p className="max-w-4xl text-xl font-bold leading-10">{data.close}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 4 — Ideal Person ===== */

export function IdealPersonSection() {
  const { variant } = useVariant();
  const data = recruitPage.ideal;
  return (
    <section className="relative overflow-hidden bg-white py-28" id="concept">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="mx-auto mt-8 h-[680px] w-[680px] rounded-full border-[18px] border-primary" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-primary" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-primary" />
      </div>
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.points.map((p, i) => (
            <ScrollReveal delay={i * 80} key={p.label}>
              <article
                className={`flex h-full flex-col overflow-hidden border ${
                  variant === "b"
                    ? "border-ink/12 bg-white"
                    : "border-court/12 bg-warm rounded-sm"
                }`}
              >
                <img
                  alt={p.label}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                  src={`/images/recruit/${idealImages[i]}.jpg`}
                />
                <div className="flex items-start gap-4 p-6">
                  <span
                    className={`shrink-0 ${
                      variant === "b"
                        ? "font-mono text-xs uppercase tracking-[0.2em] text-clay"
                        : "font-tight text-3xl font-black text-tennis/80"
                    }`}
                  >
                    {variant === "b" ? `№ 0${i + 1}` : String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className={
                        variant === "b"
                          ? "font-serif text-xl font-semibold leading-8 text-primary"
                          : "display-heading text-lg leading-7 text-primary"
                      }
                    >
                      {p.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-ink/72">{p.text}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-9 max-w-3xl text-base leading-8 text-ink/74">{data.close}</p>
          <BlurText
            as="p"
            className={`mt-10 whitespace-pre-line text-balance text-4xl leading-tight text-primary sm:text-5xl ${
              variant === "b" ? "font-serif font-semibold" : "font-tight font-black"
            }`}
            text={data.emphasis}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 5 — Values ===== */

export function ValueSection() {
  const { variant } = useVariant();
  const data = recruitPage.values;
  return (
    <section className="py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {data.items.map((value, index) => (
            <ScrollReveal delay={index * 100} key={value.number}>
              {variant === "b" ? (
                <article className="float-card flex h-full flex-col overflow-hidden border border-clay/30 bg-white shadow-soft">
                  <img
                    alt={value.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    src={`/images/recruit/${valueImages[index]}.jpg`}
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-clay">
                      Figure 0{index + 1}
                    </p>
                    <h3 className="mt-4 min-h-16 font-serif text-2xl font-semibold leading-[1.5] text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-ink/72">{value.text}</p>
                  </div>
                </article>
              ) : (
                <div className="float-card flex h-full flex-col overflow-hidden rounded-sm border border-court/14 bg-white shadow-soft">
                  <div className="relative">
                    <img
                      alt={value.title}
                      className="aspect-[16/10] w-full object-cover"
                      loading="lazy"
                      src={`/images/recruit/${valueImages[index]}.jpg`}
                    />
                    <span className="absolute left-4 top-3 font-tight text-5xl font-black text-tennis drop-shadow-[0_2px_8px_rgba(11,59,46,0.5)]">
                      {value.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="display-heading min-h-16 text-2xl leading-8 text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-ink/70">{value.text}</p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-9 max-w-3xl text-xl font-bold leading-10 text-primary">{data.close}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 6 — Philosophy ===== */

export function PhilosophySection() {
  const { variant } = useVariant();
  const data = recruitPage.philosophy;
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="court-lines absolute inset-0 opacity-30" />
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <VisualPanel label="経験豊かなコーチがジュニア生徒に丁寧に指導する様子" variant="coach" />
        </ScrollReveal>
        <ScrollReveal>
          <SectionHeading
            description={data.subtitle}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            light
            title={data.title}
          />
          <p className="mt-8 text-base leading-9 text-white/78">{data.body}</p>
          <blockquote className="quote-block mt-8 bg-white/8 backdrop-blur">
            <p
              className={
                variant === "b"
                  ? "font-serif text-xl font-semibold italic leading-9 text-white"
                  : "text-xl font-black leading-10 text-white"
              }
            >
              {data.quote}
            </p>
            <span className="quote-block__attribution">{data.quoteAttribution}</span>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 7 — Trial to Enrollment ===== */

export function TrialToEnrollmentSection() {
  const { variant } = useVariant();
  const data = recruitPage.trial;
  return (
    <section className="relative bg-warm py-28" id="trial">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5">
          {data.steps.map((step, i) => (
            <ScrollReveal delay={i * 90} key={step.number}>
              <article
                className={`relative grid items-center gap-5 overflow-hidden ${
                  variant === "b" ? "border border-ink/10 bg-white" : "border border-court/16 bg-white rounded-sm"
                } md:grid-cols-[200px_110px_1fr] md:pl-0`}
              >
                <div className="relative">
                  <img
                    alt={`${step.phase}：${step.title}`}
                    className="h-full max-h-44 w-full object-cover md:max-h-[140px]"
                    loading="lazy"
                    src={`${FACILITY}/${trialImages[i]}.jpg`}
                    style={{ aspectRatio: "4/3" }}
                  />
                  <span
                    className={`absolute left-3 top-3 grid size-9 place-items-center text-sm ${
                      variant === "a"
                        ? "bg-tennis font-tight font-black text-deep"
                        : "bg-clay font-mono text-warm"
                    } rounded-full`}
                  >
                    {variant === "b" ? `0${i + 1}` : i + 1}
                  </span>
                </div>
                <span
                  className={`px-6 font-mono text-xs uppercase tracking-[0.18em] md:px-0 ${
                    variant === "b" ? "text-clay" : "text-court"
                  }`}
                >
                  {step.phase}
                </span>
                <div className="p-6 pt-0 md:p-6 md:pl-0">
                  <h3
                    className={
                      variant === "b"
                        ? "font-serif text-xl font-semibold leading-[1.5] text-primary"
                        : "display-heading text-xl leading-7 text-primary"
                    }
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-8 text-ink/74">{step.text}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 8 — Mayano Message ===== */

export function MayanoMessageSection() {
  const { variant } = useVariant();
  const data = recruitPage.mayano;
  return (
    <section className="bg-white py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <ScrollReveal>
          <SectionHeading
            description={data.subtitle}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
          <p className="mt-8 text-base leading-9 text-ink/74">{data.body}</p>
          <blockquote className="quote-block mt-8 bg-warm">
            <p
              className={
                variant === "b"
                  ? "font-serif text-lg font-semibold italic leading-9 text-primary"
                  : "text-lg font-black leading-9 text-primary"
              }
            >
              {data.quote}
            </p>
            <span className="quote-block__attribution">{data.quoteAttribution}</span>
          </blockquote>
        </ScrollReveal>
        <ScrollReveal>
          <VisualPanel label="女性コーチがコート横で生徒やスタッフに話しかける様子" variant="staff" />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 9 — Job Description ===== */

export function JobDescriptionSection() {
  const { variant } = useVariant();
  const data = recruitPage.jobs;
  const icons = [Trophy, UsersRound, MessageCircle, BadgeCheck, CalendarDays, ClipboardList];

  return (
    <section className="py-24" id="work">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((job, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal delay={(index % 3) * 80} key={job.title}>
                {variant === "b" ? (
                  <article className="flex h-full flex-col overflow-hidden border border-ink/10 bg-white">
                    <img
                      alt={job.title}
                      className="aspect-[16/10] w-full object-cover"
                      loading="lazy"
                      src={`/images/recruit/${jobImages[index]}.jpg`}
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
                        Figure № 0{index + 1}
                      </p>
                      <h3 className="mt-3 font-serif text-xl font-semibold leading-8 text-primary">
                        {job.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ink/72">{job.text}</p>
                    </div>
                  </article>
                ) : (
                  <div className="flex h-full flex-col overflow-hidden rounded-sm border border-court/14 bg-white shadow-sm transition hover:shadow-lift">
                    <img
                      alt={job.title}
                      className="aspect-[16/10] w-full object-cover"
                      loading="lazy"
                      src={`/images/recruit/${jobImages[index]}.jpg`}
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <Icon aria-hidden className="text-court" size={26} />
                      <h3 className="display-heading mt-3 text-xl leading-8 text-primary">
                        {job.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ink/70">{job.text}</p>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal>
          <div className="mt-9 rounded-sm border border-court/20 bg-white p-7 shadow-sm">
            <p className="display-heading text-lg text-primary">
              「入会案内」は、売り込みではなく、聞く時間です。
            </p>
            <p className="mt-3 text-base leading-8 text-ink/72">
              来てくれた人が「ここなら自分のペースで続けられそう」と自分で決められるように、隣で話を聞き、選択肢を整理する。コートの外側にある、もう一つの仕事です。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 10 — Training ===== */

export function TrainingSection() {
  const { variant } = useVariant();
  const data = recruitPage.training;
  return (
    <section className="bg-white py-24" id="training">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal>
          <VisualPanel label="先輩コーチが若手コーチにフィードバックする様子" variant="training" />
        </ScrollReveal>
        <div>
          <ScrollReveal>
            <SectionHeading
              description={data.lead}
              eyebrow={data.eyebrow}
              eyebrowB={data.eyebrowB}
              title={data.title}
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.modules.map(([title, text], index) => (
              <ScrollReveal delay={index * 70} key={title}>
                <div
                  className={`p-5 ${
                    variant === "b"
                      ? "border border-ink/12 bg-warm"
                      : "rounded-sm bg-warm"
                  }`}
                >
                  <p
                    className={
                      variant === "b"
                        ? "font-mono text-[11px] uppercase tracking-[0.2em] text-clay"
                        : "text-sm font-black text-court"
                    }
                  >
                    {variant === "b" ? `Module 0${index + 1}` : String(index + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className={`mt-2 text-primary ${
                      variant === "b" ? "font-serif text-lg font-semibold" : "display-heading"
                    }`}
                  >
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="display-heading mt-8 text-2xl text-primary">{data.close}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 11 — Career Path ===== */

export function CareerPathSection() {
  const { variant } = useVariant();
  const data = recruitPage.career;

  if (variant === "b") {
    return (
      <section className="relative bg-warm py-28" id="career">
        <div className="section-shell">
          <ScrollReveal>
            <SectionHeading
              description={data.lead}
              eyebrow={data.eyebrow}
              eyebrowB={data.eyebrowB}
              title={data.title}
            />
          </ScrollReveal>
          <ol className="mt-12 grid gap-4">
            {data.steps.map((step, i) => {
              const isHighlight = "highlight" in step && step.highlight;
              return (
                <ScrollReveal delay={i * 70} key={step.title}>
                  <li
                    className={`grid items-start gap-6 border border-ink/12 bg-white p-6 sm:p-7 md:grid-cols-[80px_180px_1fr] ${
                      isHighlight ? "border-clay/40 shadow-soft" : ""
                    }`}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-clay">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                        isHighlight ? "text-clay" : "text-ink/52"
                      }`}
                    >
                      {step.label}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-xl font-semibold leading-[1.5] text-primary ${
                          isHighlight ? "underline decoration-clay decoration-[6px] decoration-clip underline-offset-4" : ""
                        }`}
                        style={
                          isHighlight
                            ? {
                                textDecorationColor: "rgba(255,122,89,0.4)",
                                textDecorationThickness: "10px",
                                textUnderlineOffset: "-4px",
                                textDecorationSkipInk: "none"
                              }
                            : undefined
                        }
                      >
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ink/72">{step.text}</p>
                    </div>
                  </li>
                </ScrollReveal>
              );
            })}
          </ol>
          <ScrollReveal>
            <p className="mt-10 max-w-3xl font-serif text-2xl font-semibold leading-[1.6] text-primary">
              好きだったテニスが、自分のリズムをつくる時間になっていく。
            </p>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  // Variant A
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-white" id="career">
      <LightRays variant="dark" />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            light
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {data.steps.map((step, index) => {
            const highlight = "highlight" in step && step.highlight;
            return (
              <ScrollReveal delay={index * 90} key={step.title}>
                <article
                  className={`min-h-[300px] rounded-sm border p-6 shadow-soft ${
                    highlight
                      ? "border-tennis bg-tennis text-primary"
                      : "border-white/12 bg-white/10 text-white backdrop-blur"
                  }`}
                >
                  <span
                    className={`grid size-10 place-items-center rounded-full text-sm font-black ${
                      highlight ? "bg-primary text-tennis" : "bg-tennis text-primary"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <p
                    className={`mt-5 min-h-10 text-xs font-black uppercase tracking-[0.12em] ${
                      highlight ? "text-primary/70" : "text-tennis"
                    }`}
                  >
                    {step.label}
                  </p>
                  <h3 className="display-heading mt-2 text-xl leading-8">{step.title}</h3>
                  <p
                    className={`mt-4 text-sm leading-7 ${
                      highlight ? "text-primary/76" : "text-white/72"
                    }`}
                  >
                    {step.text}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal>
          <BlurText
            as="p"
            className="mt-12 max-w-4xl font-tight text-4xl font-black leading-tight text-tennis sm:text-5xl"
            text="好きだったテニスが、自分のリズムをつくる時間に変わっていく。"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 12 — AI Roleplay ===== */

export function AIRoleplaySection() {
  const data = recruitPage.roleplay;
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <GridScan />
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <ScrollReveal>
            <SectionHeading
              description={data.lead}
              eyebrow={data.eyebrow}
              eyebrowB={data.eyebrowB}
              light
              title={data.title}
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.scenes.map((scene, index) => (
              <ScrollReveal delay={index * 70} key={scene}>
                <div className="rounded-sm border border-white/14 bg-white/8 p-4 backdrop-blur">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">
                    Scene {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white/86">{scene}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 max-w-md text-xs uppercase tracking-[0.18em] text-sky/72">
            {data.note}
          </p>
        </div>
        <ScrollReveal>
          <VisualPanel label="テニスコーチがタブレットで保護者対応の練習をする様子" variant="roleplay" />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 13 — Day Flow ===== */

export function DayFlowSection() {
  const data = recruitPage.dayFlow;
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,61,46,0.06)_1px,transparent_1px),linear-gradient(rgba(15,61,46,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <ScrollReveal>
            <SectionHeading
              description={data.lead}
              eyebrow={data.eyebrow}
              eyebrowB={data.eyebrowB}
              title={data.title}
            />
          </ScrollReveal>
          <ScrollReveal>
            <figure className="mt-8 hidden overflow-hidden rounded-sm border border-primary/10 shadow-soft lg:block">
              <img
                alt="テニスプラザ尼崎の屋内コートと朝の準備"
                className="h-full w-full object-cover"
                loading="lazy"
                src={`${FACILITY}/facility-57387.jpg`}
                style={{ aspectRatio: "4/3" }}
              />
            </figure>
          </ScrollReveal>
        </div>
        <div className="rounded-sm border border-primary/10 bg-warm/88 p-4 shadow-soft backdrop-blur sm:p-6">
          {data.items.map(([time, text], index) => (
            <ScrollReveal delay={index * 45} key={time}>
              <div className="grid grid-cols-[76px_1fr] gap-4 border-b border-primary/10 py-4 last:border-0">
                <time className="font-mono text-sm font-medium text-court">{time}</time>
                <p className="font-bold text-primary">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 14 — Requirements ===== */

export function RequirementSection() {
  const data = recruitPage.requirements;
  return (
    <section className="bg-white py-24" id="requirements">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <dl className="mt-10 overflow-hidden rounded-sm border border-primary/10">
          {data.items.map(([label, value]) => (
            <div
              className="grid gap-2 border-b border-primary/10 bg-white p-5 last:border-0 sm:grid-cols-[180px_1fr]"
              key={label}
            >
              <dt className="display-heading text-primary">{label}</dt>
              <dd className="whitespace-pre-line leading-8 text-ink/74">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 rounded-sm bg-warm p-5 text-sm leading-7 text-ink/70">{data.note}</p>
      </div>
    </section>
  );
}

/* ===== Section 15 — Visit Preview ===== */

export function VisitPreviewSection() {
  const { variant } = useVariant();
  const data = recruitPage.visit;
  return (
    <section className="bg-warm py-24" id="visit">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <ScrollReveal delay={i * 70} key={item}>
              <li
                className={`flex h-full flex-col overflow-hidden ${
                  variant === "b" ? "border border-ink/12 bg-white" : "rounded-sm bg-white shadow-sm"
                }`}
              >
                <img
                  alt={item}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                  src={`${FACILITY}/${visitImages[i]}.jpg`}
                />
                <div className="flex items-start gap-3 p-5">
                  {variant === "b" ? (
                    <svg
                      aria-hidden
                      className="mt-1 shrink-0"
                      height="22"
                      viewBox="0 0 22 22"
                      width="22"
                    >
                      <path
                        d="M3 12 L9 18 L20 4"
                        fill="none"
                        stroke="#FF7A59"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.4"
                      />
                    </svg>
                  ) : (
                    <Check aria-hidden className="mt-1 shrink-0 text-tennis" size={20} />
                  )}
                  <span className="font-bold leading-7 text-primary">{item}</span>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ===== Section 16 — Selection Flow ===== */

export function SelectionFlowSection() {
  const data = recruitPage.selection;
  return (
    <section className="py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {data.items.map(([number, title, text], index) => (
            <ScrollReveal delay={index * 70} key={number}>
              <article className="h-full rounded-sm border border-primary/10 bg-white p-5 shadow-sm">
                <p className="font-mono text-sm text-court">{number}</p>
                <h3 className="display-heading mt-4 text-lg leading-7 text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <CtaButton className="mt-9" label="まずは見学してみる" sectionId="selection" />
      </div>
    </section>
  );
}

/* ===== Section 17 — FAQ ===== */

export function FaqSection() {
  const { variant } = useVariant();
  const data = recruitPage.faqs;
  return (
    <section className="bg-white py-24" id="faq">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            align="center"
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            title={data.title}
          />
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {data.items.map(([question, answer]) => (
            <details
              className={`group p-5 ${
                variant === "b" ? "border border-ink/12 bg-warm" : "rounded-sm border border-primary/10 bg-warm"
              }`}
              key={question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-primary">
                <span>{question}</span>
                {variant === "b" ? (
                  <span
                    aria-hidden
                    className="grid size-7 shrink-0 place-items-center rounded-full border border-clay text-xs font-bold text-clay transition group-open:rotate-[180deg] group-open:bg-clay group-open:text-warm"
                  >
                    ●
                  </span>
                ) : (
                  <ChevronRight
                    aria-hidden
                    className="shrink-0 transition group-open:rotate-90"
                    size={18}
                  />
                )}
              </summary>
              <p className="mt-4 leading-8 text-ink/72">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 18 — Final CTA ===== */

export function FinalCtaSection() {
  const { variant } = useVariant();
  const data = recruitPage.finalCta;

  if (variant === "b") {
    return (
      <section className="relative bg-warm py-28" id="entry">
        <span className="b-noise" aria-hidden />
        <div className="section-shell relative grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-clay">
              {data.eyebrowB}
            </p>
            <BlurText
              as="h2"
              className="mt-4 text-balance font-serif text-3xl font-semibold leading-[1.5] text-primary sm:text-5xl"
              text={data.title}
            />
            <p className="mt-7 max-w-xl text-base leading-9 text-ink/76">{data.body}</p>
            <ClickSpark>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {data.ctas.map((cta) => (
                  <CtaButton
                    href={cta.href}
                    key={cta.label}
                    label={cta.label}
                    sectionId="final"
                    variant={cta.variant}
                  />
                ))}
              </div>
            </ClickSpark>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/52">
              Folio 18 / 18 — Closing note
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="border border-ink/12 bg-white p-6 shadow-soft">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-clay">
                Contact form placeholder
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-primary">
                仮フォーム領域
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/72">
                MTGデモでは、ここに応募・見学フォームを設置する想定です。公開時にはフォームサービス、電話導線、採用担当へのメール導線のいずれかに接続します。
              </p>
              <div className="mt-6 grid gap-3">
                {["お名前", "メールアドレス", "相談したい内容"].map((label) => (
                  <div
                    className="border border-ink/12 bg-warm px-4 py-3 text-sm font-medium text-ink/56"
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </div>
              <button
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-6 text-sm font-bold text-warm hover:bg-primary"
                style={{ borderBottom: "1px solid #d9ff43" }}
                type="button"
              >
                送信イメージ
                <ArrowUpRight aria-hidden size={16} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-deep py-24 text-white" id="entry">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
        src="/images/recruit/hero-court.svg"
      />
      <LightRays variant="dark" />
      <div className="absolute inset-0 bg-deep/95" />
      <div className="rb-stripe absolute inset-x-0 top-0" aria-hidden />
      <div className="section-shell relative grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-tennis">
            <Sparkles aria-hidden size={15} />
            {data.eyebrow}
          </p>
          <BlurText
            as="h2"
            className="text-balance font-tight text-4xl font-black leading-tight sm:text-5xl"
            text={data.title}
          />
          <p className="mt-7 text-base leading-9 text-white/78">{data.body}</p>
          <ClickSpark>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {data.ctas.map((cta) => (
                <CtaButton
                  href={cta.href}
                  key={cta.label}
                  label={cta.label}
                  sectionId="final"
                  variant={cta.variant}
                />
              ))}
            </div>
          </ClickSpark>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-sm bg-white p-6 text-primary shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-court">
              Contact form placeholder
            </p>
            <h3 className="display-heading mt-3 text-2xl">仮フォーム領域</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              MTGデモでは、ここに応募・見学フォームを設置する想定です。公開時にはフォームサービス、電話導線、採用担当へのメール導線のいずれかに接続します。
            </p>
            <div className="mt-6 grid gap-3">
              {["お名前", "メールアドレス", "相談したい内容"].map((label) => (
                <div
                  className="rounded-sm border border-primary/10 bg-warm px-4 py-3 text-sm font-bold text-ink/52"
                  key={label}
                >
                  {label}
                </div>
              ))}
            </div>
            <button
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white"
              type="button"
            >
              送信イメージ
              <ArrowUpRight aria-hidden size={16} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 19 — Future Roadmap ===== */

export function FutureRoadmapSection() {
  const { variant } = useVariant();
  const data = recruitPage.future;
  return (
    <section className="relative bg-deep py-28 text-warm" id="future">
      <GridScan />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading
            description={data.lead}
            eyebrow={data.eyebrow}
            eyebrowB={data.eyebrowB}
            light
            title={data.title}
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {data.phases.map((phase, i) => (
            <ScrollReveal delay={i * 90} key={phase.label}>
              <article
                className={`border p-6 ${
                  variant === "b"
                    ? "border-warm/20 bg-warm/4 backdrop-blur"
                    : "border-tennis/24 bg-tennis/6 rounded-sm"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={
                      variant === "b"
                        ? "font-mono text-xs uppercase tracking-[0.22em] text-clay"
                        : "font-tight text-2xl font-black text-tennis"
                    }
                  >
                    {phase.label}
                  </span>
                  <span className="b-hairline max-w-16" aria-hidden />
                </div>
                <h3
                  className={`mt-3 ${
                    variant === "b"
                      ? "font-serif text-xl font-semibold leading-8 text-warm"
                      : "display-heading text-xl text-warm"
                  }`}
                >
                  {phase.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li className="flex gap-2 text-sm leading-7 text-warm/80" key={item}>
                      <span aria-hidden className="mt-2 inline-block size-1 rounded-full bg-clay" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-10 max-w-3xl text-sm leading-8 text-warm/70">
            HPを作る会社ではなく、事業成長の導線を一緒に設計するパートナーとして、テニプラの次のフェーズまで伴走します。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Mobile Sticky CTA ===== */

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-white/92 px-4 py-3 shadow-[0_-12px_30px_rgba(15,61,46,0.12)] backdrop-blur md:hidden">
      <CtaButton className="w-full" label="まずは見学してみる" sectionId="mobile_sticky" />
    </div>
  );
}
