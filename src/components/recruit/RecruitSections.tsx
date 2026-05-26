"use client";

import { ArrowUpRight, Check, ChevronRight, Quote, X } from "lucide-react";
import { recruitPage } from "@/data/recruit";
import { BlurText } from "@/components/react-bits/BlurText";
import { ClickSpark } from "@/components/react-bits/ClickSpark";
import { LightRays } from "@/components/react-bits/LightRays";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { ScrollVelocity } from "@/components/react-bits/ScrollVelocity";
import RBSplitText from "@/components/reactbits/SplitText";
import { MotionReveal } from "./MotionReveal";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";
import { useVariant } from "./VariantProvider";

const tickerItems = [
  "好きなテニスを、仕事に",
  "コーチ未経験OK",
  "焦らず、少しずつ",
  "ジュニアから大人まで",
  "見学からで大丈夫",
  "テニスプラザ尼崎"
];

const FACILITY = "/images/recruit/facility";

// Placeholder imagery (existing optimized assets). People-centric assets are
// swapped in during the asset-generation pass.
const careerImages = [
  "job-lesson-adult",
  "ideal-notice",
  "job-parent-talk",
  "job-event",
  "job-operation"
];
const yarigaiImages = ["people/yarigai-kid", "people/yarigai-junior", "people/yarigai-adult"];
const dailyImages = [
  "job-lesson-adult",
  "job-followup",
  "job-parent-talk",
  "job-guidance",
  "job-event",
  "people/daily-prep"
];
const peopleImages = ["people/coach", "people/staff", "people/young"];
const empathyImages = [
  "facility/facility-57389",
  "facility/facility-57398",
  "facility/facility-57386",
  "facility/facility-57380"
];
const visitImages = [
  "facility/facility-57387",
  "facility/facility-57386",
  "facility/facility-57390",
  "facility/facility-57395",
  "facility/facility-57383"
];

function imgSrc(name: string) {
  return name.startsWith("facility/")
    ? `/images/recruit/${name}.jpg`
    : `/images/recruit/${name}.jpg`;
}

/* ===== Section 1 — Hero ===== */

export function HeroSection() {
  const { variant } = useVariant();
  const data = recruitPage.hero;

  if (variant === "b") {
    return (
      <section className="relative overflow-hidden bg-warm pb-20 pt-10 sm:pb-24" id="top">
        <span className="b-noise" aria-hidden />
        <div className="section-shell">
          <ScrollReveal>
            <figure className="relative overflow-hidden rounded-sm border border-ink/8 shadow-soft">
              <img
                alt="テニスプラザ尼崎のコートで、コーチが子どもに目線を合わせて声をかける様子"
                className="parallax-img h-full w-full object-cover"
                src="/images/recruit/people/hero-people.jpg"
                style={{ aspectRatio: "16/9", filter: "saturate(0.98) contrast(1.02)" }}
              />
            </figure>
          </ScrollReveal>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <RBSplitText
              className="whitespace-pre-line text-balance font-serif text-[2.15rem] font-semibold leading-[1.5] text-primary sm:text-[2.6rem] lg:text-[3rem]"
              delay={32}
              duration={0.9}
              ease="power3.out"
              from={{ opacity: 0, y: 24 }}
              splitType="chars"
              tag="h1"
              text={data.title}
              textAlign="left"
              to={{ opacity: 1, y: 0 }}
            />
            <div>
              <p className="text-sm leading-8 text-ink/74">{data.body}</p>
              <ClickSpark>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {data.ctas.map((cta) => (
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
              <p className="mt-3 text-xs leading-6 text-ink/56">{data.micro}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {data.badges.map((badge) => (
                  <span
                    className="inline-flex items-center gap-2 border border-ink/12 bg-warm px-3 py-1.5 text-xs font-medium tracking-[0.04em] text-ink/74"
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
      <img
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/recruit/video/hero-journey-poster.jpg"
      />
      <video
        aria-hidden
        autoPlay
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000"
        muted
        onCanPlay={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        playsInline
        preload="auto"
      >
        <source src="/images/recruit/video/hero-journey.mp4" type="video/mp4" />
      </video>
      <div className="court-lines absolute inset-0 opacity-20" />
      <LightRays />
      <span className="rally-trail" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/82 to-deep/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent" />

      <div className="section-shell relative flex min-h-[88svh] items-center pb-28 pt-16">
        <div className="relative max-w-4xl">
          <RBSplitText
            className="whitespace-pre-line text-balance font-tight text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            delay={26}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 28 }}
            splitType="chars"
            tag="h1"
            text={data.title}
            textAlign="left"
            to={{ opacity: 1, y: 0 }}
          />
          <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/82 sm:text-base">
            {data.body}
          </p>
          <ClickSpark>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {data.ctas.map((cta) => (
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
          <p className="mt-3 text-xs leading-6 text-white/64">{data.micro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {data.badges.map((badge) => (
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

/* ===== Empathy / Insight ===== */

export function InsightSection() {
  const { variant } = useVariant();
  const data = recruitPage.insights;
  return (
    <section className="relative bg-warm py-24" id="empathy">
      <span className="b-noise" aria-hidden />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading description={data.body} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.cards.map((card, i) => (
            <MotionReveal className="h-full" delay={(i % 2) * 0.08} key={card.title} variant="scale">
              <article
                className={`flex h-full flex-col overflow-hidden border ${
                  variant === "b" ? "border-ink/12 bg-white" : "rounded-sm border-court/14 bg-white shadow-soft"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    alt={card.title}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                    src={imgSrc(empathyImages[i])}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/55 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className={
                      variant === "b"
                        ? "font-serif text-lg font-semibold leading-7 text-primary"
                        : "display-heading text-lg leading-7 text-primary"
                    }
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{card.text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-9 max-w-3xl text-base leading-8 text-ink/76">{data.close}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 2 — Career Reframe ===== */

export function CareerReframeSection() {
  const { variant } = useVariant();
  const data = recruitPage.careerReframe;
  return (
    <section className="relative py-24" id="career">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading description={data.lead} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card, i) => (
            <MotionReveal
              className="h-full"
              delay={(i % 3) * 0.08}
              key={card.title}
              variant="rise-scale"
            >
              <article
                className={`flex h-full flex-col overflow-hidden border ${
                  variant === "b"
                    ? "border-ink/12 bg-white"
                    : "border-court/14 bg-white rounded-sm shadow-soft"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    alt={card.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    src={imgSrc(careerImages[i])}
                  />
                  <span
                    className={`absolute left-4 top-3 ${
                      variant === "b"
                        ? "font-mono text-xs tracking-[0.18em] text-warm"
                        : "font-tight text-3xl font-black text-tennis drop-shadow-[0_2px_8px_rgba(11,59,46,0.5)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className={
                      variant === "b"
                        ? "font-serif text-xl font-semibold leading-8 text-primary"
                        : "display-heading text-lg leading-7 text-primary"
                    }
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{card.text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-8 max-w-3xl text-xs leading-6 text-ink/56">{data.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 3 — Yarigai / Impact ===== */

export function YarigaiSection() {
  const { variant } = useVariant();
  const data = recruitPage.yarigai;
  return (
    <section className="relative bg-deep py-24 text-warm" id="yarigai">
      {variant === "a" ? <LightRays variant="dark" /> : <span className="b-noise" aria-hidden />}
      <div className="section-shell relative">
        <ScrollReveal>
          <RBSplitText
            className={`max-w-3xl whitespace-pre-line text-balance leading-tight text-warm ${
              variant === "b"
                ? "font-serif text-3xl font-semibold sm:text-4xl"
                : "font-tight text-4xl font-black sm:text-5xl"
            }`}
            delay={22}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 20 }}
            splitType="chars"
            tag="h2"
            text={data.title}
            textAlign="left"
            to={{ opacity: 1, y: 0 }}
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="mt-6 max-w-3xl text-base leading-9 text-warm/82">{data.body}</p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {data.cards.map((card, i) => (
            <MotionReveal className="h-full" delay={i * 0.1} key={card.title} variant="scale">
              <article className="flex h-full flex-col overflow-hidden border border-warm/16 bg-warm/4 backdrop-blur">
                <img
                  alt={card.title}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  src={imgSrc(yarigaiImages[i])}
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className={
                      variant === "b"
                        ? "font-serif text-xl font-semibold leading-8 text-warm"
                        : "display-heading text-lg leading-7 !text-warm"
                    }
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-warm/76">{card.text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-8 max-w-3xl text-xs leading-6 text-warm/70">{data.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 4 — Daily Work + Staff Interview ===== */

export function DailyWorkSection() {
  const { variant } = useVariant();
  const data = recruitPage.dailyWork;
  return (
    <section className="relative py-24" id="daily">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading description={data.lead} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.tasks.map((task, i) => (
            <MotionReveal className="h-full" delay={(i % 3) * 0.08} key={task.title} variant="clip">
              <article
                className={`flex h-full flex-col overflow-hidden border ${
                  variant === "b"
                    ? "border-ink/12 bg-white"
                    : "border-court/14 bg-white rounded-sm shadow-soft"
                }`}
              >
                <img
                  alt={task.title}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                  src={imgSrc(dailyImages[i])}
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className={
                      variant === "b"
                        ? "font-serif text-lg font-semibold leading-7 text-primary"
                        : "display-heading text-lg leading-7 text-primary"
                    }
                  >
                    {task.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink/72">{task.text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <p
            className={`mt-8 max-w-3xl border-l-2 pl-5 text-sm leading-8 ${
              variant === "b" ? "border-clay text-ink/74" : "border-tennis text-ink/74"
            }`}
          >
            {data.salesNote}
          </p>
        </ScrollReveal>

        <div className="mt-16">
          <ScrollReveal>
            <h3
              className={`text-balance ${
                variant === "b"
                  ? "font-serif text-2xl font-semibold text-primary"
                  : "display-heading text-2xl text-primary"
              }`}
            >
              {data.interview.title}
            </h3>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {data.interview.qa.map((item, i) => (
              <MotionReveal
                delay={(i % 2) * 0.08}
                key={item.q}
                variant={i % 2 === 0 ? "left" : "right"}
              >
                <article
                  className={`flex h-full gap-4 p-6 ${
                    variant === "b"
                      ? "border border-ink/12 bg-white"
                      : "rounded-sm border border-court/14 bg-white shadow-soft"
                  }`}
                >
                  <Quote
                    aria-hidden
                    className={variant === "b" ? "shrink-0 text-clay" : "shrink-0 text-tennis"}
                    size={26}
                  />
                  <div>
                    <p className="font-bold leading-7 text-primary">{item.q}</p>
                    <p className="mt-3 text-sm leading-8 text-ink/74">{item.a}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mt-6 text-xs leading-6 text-ink/52">{data.interview.note}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ===== A Day (timeline) ===== */

export function DayFlowSection() {
  const { variant } = useVariant();
  const data = recruitPage.dayFlow;
  return (
    <section className="relative bg-deep py-24 text-warm" id="dayflow">
      {variant === "a" ? <LightRays variant="dark" /> : <span className="b-noise" aria-hidden />}
      <div className="section-shell relative">
        <ScrollReveal>
          <RBSplitText
            className={`whitespace-pre-line text-balance leading-tight text-warm ${
              variant === "b" ? "font-serif text-3xl font-semibold sm:text-4xl" : "font-tight text-4xl font-black sm:text-5xl"
            }`}
            delay={22}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 20 }}
            splitType="chars"
            tag="h2"
            text={data.title}
            textAlign="left"
            to={{ opacity: 1, y: 0 }}
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-warm/72">{data.lead}</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-warm/16 sm:grid-cols-2">
          {data.items.map(([time, text], i) => (
            <MotionReveal delay={(i % 2) * 0.06} key={time} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="flex h-full items-center gap-5 bg-warm/4 px-6 py-5 backdrop-blur">
                <span
                  className={
                    variant === "b"
                      ? "shrink-0 font-mono text-lg font-semibold tracking-tight text-clay"
                      : "shrink-0 font-tight text-2xl font-black text-tennis"
                  }
                >
                  {time}
                </span>
                <span className="h-8 w-px shrink-0 bg-warm/20" aria-hidden />
                <span className="text-sm leading-7 text-warm/82">{text}</span>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 5 — First Step for Beginners ===== */

export function FirstStepSection() {
  const { variant } = useVariant();
  const data = recruitPage.firstStep;
  return (
    <section className="relative bg-warm py-24" id="firststep">
      <span className="b-noise" aria-hidden />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading title={data.title} />
        </ScrollReveal>
        <ScrollReveal>
          <p className="mt-6 max-w-3xl text-base leading-9 text-ink/76">{data.body}</p>
        </ScrollReveal>
        <ScrollReveal>
          <figure className="mt-8 overflow-hidden rounded-sm shadow-soft">
            <img
              alt="先輩コーチと新人コーチが、コートサイドでレッスンの流れを一緒に確認する様子"
              className="parallax-img h-full w-full object-cover"
              loading="lazy"
              src="/images/recruit/people/beginner.jpg"
              style={{ aspectRatio: "16/9" }}
            />
          </figure>
        </ScrollReveal>
        <div className="mt-12 grid gap-4">
          {data.steps.map((step, i) => (
            <MotionReveal delay={0} key={step.title} variant={i % 2 === 0 ? "left" : "right"}>
              <article
                className={`relative grid items-center gap-4 p-6 md:grid-cols-[140px_1fr] ${
                  variant === "b"
                    ? "border border-ink/12 bg-white"
                    : "rounded-sm border border-court/14 bg-white shadow-soft"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full text-sm ${
                      variant === "b"
                        ? "bg-clay font-mono text-warm"
                        : "bg-tennis font-tight font-black text-deep"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={
                      variant === "b"
                        ? "font-serif text-base font-semibold text-primary"
                        : "display-heading text-base text-primary"
                    }
                  >
                    {step.phase}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold leading-7 text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-ink/72">{step.text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-9 max-w-3xl text-lg font-bold leading-9 text-primary">{data.close}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 6 — Workplace / Conditions ===== */

export function WorkplaceSection() {
  const { variant } = useVariant();
  const data = recruitPage.workplace;
  return (
    <section className="relative py-24" id="workplace">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading description={data.lead} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 overflow-hidden border border-ink/12">
          {data.items.map(([label, value], i) => (
            <div
              className={`grid gap-1 px-6 py-5 sm:grid-cols-[180px_1fr] ${
                i % 2 === 0 ? "bg-white" : "bg-warm"
              }`}
              key={label}
            >
              <dt
                className={
                  variant === "b"
                    ? "font-serif text-sm font-semibold text-primary"
                    : "font-bold text-sm text-primary"
                }
              >
                {label}
              </dt>
              <dd className="whitespace-pre-line text-sm leading-7 text-ink/76">{value}</dd>
            </div>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-6 max-w-3xl text-xs leading-6 text-ink/56">{data.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 7 — People / Culture ===== */

export function PeopleCultureSection() {
  const { variant } = useVariant();
  const data = recruitPage.people;
  return (
    <section className="relative bg-warm py-24" id="people">
      <span className="b-noise" aria-hidden />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading description={data.body} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card, i) => (
            <MotionReveal className="h-full" delay={(i % 3) * 0.08} key={card.name} variant="rise-scale">
              <article
                className={`flex h-full flex-col overflow-hidden border ${
                  variant === "b" ? "border-ink/12 bg-white" : "rounded-sm border-court/14 bg-white shadow-soft"
                }`}
              >
                <img
                  alt={card.name}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  src={imgSrc(peopleImages[i])}
                />
                <div className="flex flex-1 flex-col p-6">
                  <p
                    className={
                      variant === "b"
                        ? "font-mono text-xs tracking-[0.16em] text-clay"
                        : "font-mono text-xs tracking-[0.16em] text-court"
                    }
                  >
                    {card.role}
                  </p>
                  <h3
                    className={
                      variant === "b"
                        ? "mt-2 font-serif text-xl font-semibold text-primary"
                        : "mt-2 display-heading text-xl text-primary"
                    }
                  >
                    {card.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{card.text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-6 text-xs leading-6 text-ink/52">{data.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Section 8 — Philosophy ===== */

export function PhilosophySection() {
  const { variant } = useVariant();
  const data = recruitPage.philosophy;
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white" id="philosophy">
      <div className="court-lines absolute inset-0 opacity-30" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <ScrollReveal>
          <figure className="overflow-hidden rounded-sm shadow-soft">
            <img
              alt="一人ひとりに合わせて向き合う、コーチの指導の様子"
              className="parallax-img h-full w-full object-cover"
              loading="lazy"
              src="/images/recruit/people/philosophy.jpg"
              style={{ aspectRatio: "4/3" }}
            />
          </figure>
        </ScrollReveal>
        <div>
          <RBSplitText
            className={`whitespace-pre-line text-balance leading-tight text-white ${
              variant === "b" ? "font-serif text-3xl font-semibold sm:text-4xl" : "font-tight text-4xl font-black sm:text-5xl"
            }`}
            delay={22}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 20 }}
            splitType="chars"
            tag="h2"
            text={data.title}
            textAlign="left"
            to={{ opacity: 1, y: 0 }}
          />
          <ScrollReveal>
            <p className="mt-6 text-base leading-9 text-white/82">{data.body}</p>
          </ScrollReveal>
          <ScrollReveal>
            <blockquote className="mt-8 border-l-2 border-tennis pl-5">
              <p className="font-serif text-xl font-semibold leading-9 text-white">
                「{data.quote}」
              </p>
              <footer className="mt-3 font-mono text-xs tracking-[0.16em] text-white/64">
                {data.quoteAttribution}
              </footer>
            </blockquote>
          </ScrollReveal>
          <p className="mt-6 text-xs leading-6 text-white/70">{data.note}</p>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 9 — Requirements ===== */

export function RequirementsSection() {
  const { variant } = useVariant();
  const data = recruitPage.requirements;
  const columns: Array<{ heading: string; tone: "must" | "welcome"; items: readonly string[] }> = [
    { heading: "大切にしていること", tone: "must", items: data.must },
    { heading: "歓迎すること", tone: "welcome", items: data.welcome }
  ];
  return (
    <section className="relative py-24" id="requirements">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading description={data.body} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {columns.map((col, ci) => (
            <MotionReveal className="h-full" delay={ci * 0.08} key={col.heading} variant={ci === 0 ? "left" : "right"}>
              <div
                className={`flex h-full flex-col p-7 ${
                  variant === "b" ? "border border-ink/12 bg-white" : "rounded-sm border border-court/14 bg-white shadow-soft"
                }`}
              >
                <h3
                  className={
                    variant === "b"
                      ? "mt-2 font-serif text-xl font-semibold text-primary"
                      : "mt-2 display-heading text-xl text-primary"
                  }
                >
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li className="flex gap-3 text-sm leading-7 text-ink/76" key={item}>
                      <Check
                        aria-hidden
                        className={col.tone === "must" ? "mt-1 shrink-0 text-court" : "mt-1 shrink-0 text-clay"}
                        size={16}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-8 max-w-3xl text-sm leading-8 text-ink/70">{data.softNg}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Visit Preview ===== */

export function VisitPreviewSection() {
  const { variant } = useVariant();
  const data = recruitPage.visit;
  return (
    <section className="relative py-24" id="visit">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading description={data.lead} title={data.title} />
        </ScrollReveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <MotionReveal className="h-full" delay={(i % 3) * 0.07} key={item} variant="clip">
              <li
                className={`flex h-full flex-col overflow-hidden ${
                  variant === "b" ? "border border-ink/12 bg-white" : "rounded-sm bg-white shadow-soft"
                }`}
              >
                <img
                  alt={item}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                  src={imgSrc(visitImages[i])}
                />
                <div className="flex items-start gap-3 p-5">
                  <Check
                    aria-hidden
                    className={variant === "b" ? "mt-1 shrink-0 text-clay" : "mt-1 shrink-0 text-tennis"}
                    size={18}
                  />
                  <span className="font-bold leading-7 text-primary">{item}</span>
                </div>
              </li>
            </MotionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ===== Selection Flow ===== */

export function SelectionFlowSection() {
  const { variant } = useVariant();
  const data = recruitPage.selection;
  return (
    <section className="relative bg-warm py-24" id="flow">
      <span className="b-noise" aria-hidden />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading description={data.lead} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 grid gap-4">
          {data.items.map(([num, title, text], i) => (
            <MotionReveal delay={0} key={num} variant={i % 2 === 0 ? "left" : "right"}>
              <article
                className={`grid items-center gap-4 p-6 md:grid-cols-[120px_1fr] ${
                  variant === "b" ? "border border-ink/12 bg-white" : "rounded-sm border border-court/14 bg-white shadow-soft"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      variant === "b"
                        ? "font-mono text-2xl font-semibold text-clay"
                        : "font-tight text-3xl font-black text-court"
                    }
                  >
                    {num}
                  </span>
                  <span className="h-7 w-px bg-ink/15 md:hidden" aria-hidden />
                </div>
                <div>
                  <h3
                    className={
                      variant === "b"
                        ? "font-serif text-lg font-semibold text-primary"
                        : "display-heading text-lg text-primary"
                    }
                  >
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-ink/72">{text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 10 — FAQ ===== */

export function FaqSection() {
  const { variant } = useVariant();
  const data = recruitPage.faqs;
  return (
    <section className="relative bg-warm py-24" id="faq">
      <span className="b-noise" aria-hidden />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading description={data.lead} title={data.title} />
        </ScrollReveal>
        <div className="mt-10 grid gap-3">
          {data.items.map(([q, a], i) => (
            <MotionReveal delay={(i % 2) * 0.06} key={q} variant="up">
              <details
                className={`group p-6 ${
                  variant === "b" ? "border border-ink/12 bg-white" : "rounded-sm border border-court/14 bg-white shadow-soft"
                }`}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-bold leading-7 text-primary">
                  <span>{q}</span>
                  <ChevronRight
                    aria-hidden
                    className="mt-1 shrink-0 transition-transform group-open:rotate-90"
                    size={18}
                  />
                </summary>
                <p className="mt-4 text-sm leading-8 text-ink/74">{a}</p>
              </details>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 11 — Final CTA ===== */

export function FinalCtaSection() {
  const { variant } = useVariant();
  const data = recruitPage.finalCta;

  if (variant === "b") {
    return (
      <section className="relative bg-warm py-28" id="entry">
        <span className="b-noise" aria-hidden />
        <div className="section-shell relative">
          <ScrollReveal>
            <figure className="overflow-hidden rounded-sm shadow-soft">
              <img
                alt="夕暮れの屋内コートと、見学に来てくださいという言葉"
                className="parallax-img h-full w-full object-cover"
                loading="lazy"
                src="/images/recruit/finalcta-feature.jpg"
                style={{ aspectRatio: "16/9" }}
              />
            </figure>
          </ScrollReveal>
          <h2 className="mt-7 whitespace-pre-line font-serif text-2xl font-semibold leading-[1.5] text-primary lg:hidden">
            {data.title}
          </h2>
        </div>
        <div className="section-shell relative mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <h2 className="hidden whitespace-pre-line font-serif text-3xl font-semibold leading-[1.45] text-primary lg:block">
              {data.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-9 text-ink/76">{data.body}</p>
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
            <p className="mt-3 text-xs leading-6 text-ink/56">{data.micro}</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="border border-ink/12 bg-white p-6 shadow-soft">
              <p className="font-mono text-xs tracking-[0.18em] text-clay">仮フォーム領域</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-primary">
                カジュアル面談・見学の申し込み
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/72">
                MTGデモでは、ここに面談・見学フォームを設置する想定です。公開時にはフォームサービス、電話導線、採用担当へのメール導線のいずれかに接続します。
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
                style={{ borderBottom: "2px solid #ff7a59" }}
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
      <LightRays variant="dark" />
      <div className="absolute inset-0 bg-deep/95" />
      <div className="rb-stripe absolute inset-x-0 top-0" aria-hidden />
      <div className="section-shell relative grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <BlurText
            as="h2"
            className="whitespace-pre-line text-balance font-tight text-4xl font-black leading-tight sm:text-5xl"
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
          <p className="mt-3 text-xs leading-6 text-white/64">{data.micro}</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-sm bg-white p-6 text-primary shadow-soft">
            <p className="text-sm font-black tracking-[0.14em] text-court">仮フォーム領域</p>
            <h3 className="display-heading mt-3 text-2xl">カジュアル面談・見学の申し込み</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              MTGデモでは、ここに面談・見学フォームを設置する想定です。公開時にはフォームサービス、電話導線、採用担当へのメール導線のいずれかに接続します。
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

/* ===== Future Roadmap (社長デモ専用ページ) ===== */

export function FutureRoadmapSection() {
  const data = recruitPage.future;
  return (
    <section className="relative bg-warm py-24" id="future">
      <div className="section-shell">
        <ScrollReveal>
          <h2 className="whitespace-pre-line font-serif text-3xl font-semibold leading-[1.4] text-primary sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ink/74">{data.lead}</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {data.phases.map((phase, i) => (
            <MotionReveal className="h-full" delay={(i % 2) * 0.08} key={phase.label} variant="rise-scale">
              <article className="flex h-full gap-5 rounded-lg border border-ink/12 bg-white p-7 shadow-soft">
                <div className="flex flex-col items-center">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary font-tight text-xl font-black text-tennis">
                    {i + 1}
                  </span>
                  {i < data.phases.length - 1 ? (
                    <span aria-hidden className="mt-3 hidden w-px flex-1 bg-ink/12 lg:block" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-[0.18em] text-clay">{phase.label}</p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-primary">{phase.title}</h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {phase.items.map((item) => (
                      <li className="flex gap-2 text-sm leading-7 text-ink/74" key={item}>
                        <Check aria-hidden className="mt-1 shrink-0 text-court" size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoadmapOutcomesSection() {
  const data = recruitPage.future;
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="court-lines absolute inset-0 opacity-20" />
      <div className="section-shell relative">
        <ScrollReveal>
          <h2 className="whitespace-pre-line font-serif text-3xl font-semibold leading-[1.4] text-white sm:text-4xl">
            {data.outcomeTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">{data.outcomeLead}</p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.outcomes.map((o, i) => (
            <MotionReveal className="h-full" delay={(i % 2) * 0.08} key={o.area} variant="scale">
              <article className="flex h-full flex-col rounded-lg border border-white/14 bg-white/5 p-7 backdrop-blur">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-tennis">{o.area}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold leading-8 text-white">{o.title}</h3>
                <p className="mt-3 text-sm leading-8 text-white/82">{o.text}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 rounded-lg border border-tennis/30 bg-tennis/10 p-8">
            <h3 className="font-serif text-2xl font-semibold text-white">{data.closing.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/82">{data.closing.text}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-tennis px-6 py-3 text-sm font-bold text-deep">
              <ChevronRight aria-hidden size={16} />
              {data.closing.cta}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Persona (代表ペルソナ・社内デモ用ページ) ===== */

function PersonaHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.18em] text-court">{kicker}</p>
      {title ? (
        <h2 className="mt-2 whitespace-pre-line font-serif text-2xl font-semibold leading-[1.4] text-primary sm:text-3xl">
          {title}
        </h2>
      ) : null}
    </div>
  );
}

function PersonaList({
  items,
  tone = "court"
}: {
  items: readonly string[];
  tone?: "court" | "clay" | "muted";
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li className="flex gap-2.5 text-sm leading-7 text-ink/78" key={it}>
          {tone === "muted" ? (
            <X aria-hidden className="mt-1 shrink-0 text-ink/35" size={15} />
          ) : (
            <Check
              aria-hidden
              className={`mt-1 shrink-0 ${tone === "clay" ? "text-clay" : "text-court"}`}
              size={15}
            />
          )}
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function PersonaSection() {
  const data = recruitPage.personas;
  return (
    <section className="relative bg-warm py-16" id="persona">
      <div className="section-shell space-y-12">
        {/* Hero */}
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-clay px-4 py-1.5 text-xs font-black tracking-[0.12em] text-white">
            {data.badge}
          </span>
          <h1 className="mt-5 whitespace-pre-line font-serif text-3xl font-semibold leading-[1.4] text-primary sm:text-4xl lg:text-5xl">
            {data.catch}
          </h1>
          <p className="mt-4 max-w-3xl text-xs leading-6 text-ink/52">{data.note}</p>
        </ScrollReveal>

        <MotionReveal variant="rise-scale">
          <div className="overflow-hidden rounded-2xl border border-ink/12 bg-white shadow-soft lg:grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative">
              <img
                alt="代表ペルソナ 三浦 涼太（イメージ）"
                className="h-full max-h-[460px] w-full object-cover object-top"
                src={`/images/recruit/${data.photo}.jpg`}
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-primary/85 px-4 py-1.5 text-xs font-bold tracking-[0.08em] text-warm backdrop-blur">
                三浦 涼太 ・ 25歳（イメージ）
              </span>
            </div>
            <div className="p-7 sm:p-9">
              <p className="font-serif text-lg font-medium leading-8 text-primary">{data.summary}</p>
              <dl className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
                {data.profile.map(([label, value]) => (
                  <div className="grid grid-cols-[7rem_1fr] gap-3 py-2.5" key={label}>
                    <dt className="text-xs font-bold leading-6 text-primary/60">{label}</dt>
                    <dd className="text-sm leading-6 text-ink/78">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </MotionReveal>

        {/* 現在地 */}
        <ScrollReveal>
          <div className="rounded-2xl border border-ink/12 bg-white p-7 shadow-soft sm:p-9">
            <PersonaHeading kicker="この人の現在地" title="高校までテニス、いまはToC営業。" />
            <div className="mt-5 space-y-4">
              {data.status.map((p) => (
                <p className="text-base leading-8 text-ink/76" key={p.slice(0, 12)}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 悩み */}
        <ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink/12 bg-white p-7 shadow-soft">
              <p className="text-xs font-bold tracking-[0.08em] text-primary/60">表面的な悩み</p>
              <div className="mt-4">
                <PersonaList items={data.worriesSurface} />
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-clay/25 bg-clay/8 p-7">
              <div className="flex items-center gap-2">
                <Quote aria-hidden className="text-clay" size={20} />
                <p className="text-xs font-bold tracking-[0.08em] text-clay">本当の悩み</p>
              </div>
              <p className="mt-4 text-base leading-8 text-ink/82">{data.worryDeep}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* テニスとの関係 + 教えることへの興味 */}
        <ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink/12 bg-white p-7 shadow-soft">
              <PersonaHeading kicker="テニスとの関係" title="頑張れた記憶のある、好きなもの。" />
              <p className="mt-5 text-sm leading-8 text-ink/76">{data.tennisRelation}</p>
            </div>
            <div className="rounded-2xl border border-ink/12 bg-white p-7 shadow-soft">
              <PersonaHeading kicker="教えることへの興味" title="“入口のコーチ”に向いている。" />
              <p className="mt-5 text-sm leading-8 text-ink/76">{data.teaching.lead}</p>
              <div className="mt-4">
                <PersonaList items={data.teaching.points} />
              </div>
              <p className="mt-4 border-l-2 border-tennis pl-4 text-sm font-medium leading-7 text-primary">
                {data.teaching.conclusion}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 営業の強み */}
        <ScrollReveal>
          <div className="rounded-2xl border border-court/20 bg-court/6 p-7 shadow-soft sm:p-9">
            <PersonaHeading kicker="営業経験から活かせる強み" title="“不安を安心に変える”対人力。" />
            <p className="mt-5 text-base leading-8 text-ink/76">{data.strengths.lead}</p>
            <div className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              <PersonaList items={data.strengths.points.slice(0, 4)} />
              <PersonaList items={data.strengths.points.slice(4)} />
            </div>
            <p className="mt-6 rounded-lg bg-white/70 p-5 text-sm leading-8 text-ink/80">
              {data.strengths.conclusion}
            </p>
          </div>
        </ScrollReveal>

        {/* 求めていること */}
        <ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink/12 bg-white p-7 shadow-soft">
              <p className="text-xs font-bold tracking-[0.08em] text-court">強く求めていること</p>
              <div className="mt-4">
                <PersonaList items={data.wantStrong} />
              </div>
            </div>
            <div className="rounded-2xl border border-ink/12 bg-white p-7 shadow-soft">
              <p className="text-xs font-bold tracking-[0.08em] text-clay">実は気にしていること</p>
              <div className="mt-4">
                <PersonaList items={data.wantHidden} tone="clay" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 応募前の不安 */}
        <ScrollReveal>
          <div className="rounded-2xl border border-ink/12 bg-white p-7 shadow-soft sm:p-9">
            <PersonaHeading kicker="応募前に感じる不安" title="一番のネックは、職場環境。" />
            <p className="mt-5 text-sm leading-8 text-ink/76">{data.applyAnxiety.lead}</p>
            <div className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              <PersonaList items={data.applyAnxiety.points.slice(0, 4)} tone="clay" />
              <PersonaList items={data.applyAnxiety.points.slice(4)} tone="clay" />
            </div>
            <p className="mt-6 rounded-lg border border-tennis/40 bg-tennis/10 p-5 text-sm font-medium leading-8 text-primary">
              {data.applyAnxiety.message}
            </p>
          </div>
        </ScrollReveal>

        {/* 刺さる言葉 / 刺さりにくい言葉 */}
        <ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-court/25 bg-white p-7 shadow-soft">
              <p className="text-sm font-bold text-court">刺さる言葉</p>
              <div className="mt-4">
                <PersonaList items={data.wordsHit} />
              </div>
            </div>
            <div className="rounded-2xl border border-ink/12 bg-warm p-7">
              <p className="text-sm font-bold text-ink/50">刺さりにくい言葉</p>
              <div className="mt-4">
                <PersonaList items={data.wordsMiss} tone="muted" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* このLPが合う理由 */}
        <ScrollReveal>
          <div className="rounded-2xl border border-primary/15 bg-primary p-8 text-white sm:p-10">
            <p className="font-mono text-xs tracking-[0.18em] text-tennis">
              このLPがこのペルソナに合っている理由
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold leading-[1.5] text-white sm:text-3xl">
              「営業から逃げたい人」ではなく、
              <br />
              「対人力をもっと好きな領域で使いたい人」へ。
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">{data.lpFit}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {data.fits.map((f) => (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-tennis hover:text-deep"
                  href={f.href}
                  key={f.label}
                >
                  刺さる：{f.label}
                  <ChevronRight aria-hidden size={15} />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 採用側メモ */}
        <ScrollReveal>
          <div className="rounded-2xl border border-ink/15 bg-deep p-8 text-warm sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-warm/25 px-4 py-1.5 text-xs font-bold tracking-[0.1em] text-warm/80">
              採用側メモ（社長・採用担当向け）
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.08em] text-tennis">採用メリット</p>
                <ul className="mt-4 space-y-2.5">
                  {data.merits.map((m) => (
                    <li className="flex gap-2.5 text-sm leading-7 text-warm/82" key={m}>
                      <Check aria-hidden className="mt-1 shrink-0 text-tennis" size={15} />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.08em] text-clay">懸念点</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-warm/78">
                    {data.concerns.map((c) => (
                      <li className="flex gap-2.5" key={c}>
                        <span aria-hidden className="mt-2 inline-block size-1 shrink-0 rounded-full bg-clay" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.08em] text-tennis">必要なフォロー</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-warm/78">
                    {data.follows.map((f) => (
                      <li className="flex gap-2.5" key={f}>
                        <Check aria-hidden className="mt-1 shrink-0 text-tennis" size={14} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 border-t border-warm/15 pt-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.08em] text-tennis">面接で確認したいこと</p>
                <ul className="mt-4 space-y-2.5">
                  {data.interviewQuestions.map((q) => (
                    <li className="flex gap-2.5 text-sm leading-7 text-warm/82" key={q}>
                      <span aria-hidden className="mt-0.5 shrink-0 font-mono text-xs text-tennis">Q</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.08em] text-clay">ミスマッチになりやすい人</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-warm/78">
                  {data.mismatch.map((m) => (
                    <li className="flex gap-2.5" key={m}>
                      <X aria-hidden className="mt-1 shrink-0 text-clay/80" size={14} />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-l-2 border-tennis pl-4 text-sm font-medium leading-7 text-warm">
                  {data.mismatchKey}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-warm/6 p-6 backdrop-blur">
              <p className="text-xs font-bold tracking-[0.08em] text-tennis">先方への説明文</p>
              <p className="mt-3 text-sm leading-8 text-warm/85">{data.pitch}</p>
            </div>

            <a
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-tennis px-6 py-3 text-sm font-bold text-deep transition hover:-translate-y-0.5"
              href="/recruit"
            >
              <ChevronRight aria-hidden size={16} />
              採用LPを見る
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ===== Mobile Sticky CTA ===== */

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-white/92 px-4 py-3 shadow-[0_-12px_30px_rgba(15,61,46,0.12)] backdrop-blur md:hidden">
      <CtaButton className="w-full" href="/recruit/persona" label="カジュアル面談を申し込む" sectionId="mobile_sticky" />
    </div>
  );
}
