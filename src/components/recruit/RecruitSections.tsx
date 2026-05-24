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
  UsersRound,
  Zap
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

const tickerItems = [
  "RALLY THE FUTURE",
  "未経験OK",
  "TRAINING SYSTEM",
  "教育",
  "接客",
  "入会案内",
  "スクール運営",
  "SCHOOL GROWTH"
];

export function HeroSection() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-deep text-white" id="top">
      <img
        alt="テニススクールでコーチが生徒に声をかける採用LP用ビジュアル"
        className="absolute inset-0 h-full w-full object-cover opacity-78"
        src="/images/recruit/hero-court.svg"
      />
      <div className="court-lines absolute inset-0 opacity-80" />
      <LightRays />
      <span className="rally-trail" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/72 to-deep/18" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-deep to-transparent" />

      <div className="section-shell relative flex min-h-[88svh] items-center pb-28 pt-16">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex rounded-full border border-tennis/35 bg-white/10 px-4 py-2 text-xs font-black tracking-[0.22em] text-tennis backdrop-blur">
            {recruitPage.hero.eyebrow}
          </p>
          <SplitText
            as="h1"
            className="text-balance text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl"
            text={recruitPage.hero.title}
          />
          <BlurText
            as="p"
            className="mt-5 whitespace-pre-line text-2xl font-black leading-snug text-tennis sm:text-3xl"
            text={recruitPage.hero.subtitle}
          />
          <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/82 sm:text-base">
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
          <p className="mt-5 text-sm font-bold text-white/70">{recruitPage.hero.note}</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-deep/82 backdrop-blur">
        <ScrollVelocity items={tickerItems} />
      </div>
    </section>
  );
}

export function InsightSection() {
  return (
    <section className="relative py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description={recruitPage.insights.body}
            eyebrow="INSIGHT"
            title={recruitPage.insights.title}
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {recruitPage.insights.cards.map((card, index) => (
            <ScrollReveal delay={index * 80} key={card.title}>
              <SpotlightCard className="h-full p-6">
                <MessageCircle aria-hidden className="mb-5 text-court" size={28} />
                <h3 className="text-lg font-black leading-7 text-primary">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/70">{card.text}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 overflow-hidden rounded-lg bg-primary p-7 text-white sm:p-10">
            <p className="max-w-4xl text-xl font-bold leading-10">{recruitPage.insights.close}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function BrandConceptSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="mx-auto mt-8 h-[680px] w-[680px] rounded-full border-[18px] border-primary" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-primary" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-primary" />
      </div>
      <div className="section-shell relative text-center">
        <ScrollReveal>
          <p className="mx-auto max-w-3xl text-2xl font-black leading-10 text-primary">
            {recruitPage.concept.lead}
          </p>
        </ScrollReveal>
        <div className="mx-auto mt-9 grid max-w-4xl gap-3 sm:grid-cols-3">
          {recruitPage.concept.points.map((point, index) => (
            <ScrollReveal delay={index * 90} key={point}>
              <SpotlightCard className="p-5">
                <p className="text-lg font-black text-court">{point}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-8 text-lg font-bold text-ink/72">{recruitPage.concept.close}</p>
          <BlurText
            as="p"
            className="mx-auto mt-10 whitespace-pre-line text-balance text-4xl font-black leading-tight text-primary sm:text-6xl"
            text={recruitPage.concept.emphasis}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ValueSection() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow="VALUE" title="テニスプラザ尼崎で働く、3つの価値" />
        </ScrollReveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {recruitPage.values.map((value, index) => (
            <ScrollReveal delay={index * 100} key={value.number}>
              <SpotlightCard className="float-card h-full p-7">
                <p className="text-5xl font-black text-primary/10">{value.number}</p>
                <h3 className="mt-5 min-h-16 text-2xl font-black leading-8 text-primary">
                  {value.title}
                </h3>
                <p className="mt-5 text-sm leading-8 text-ink/70">{value.text}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-9 max-w-3xl text-xl font-bold leading-10 text-primary">
            ここで身につくのは、テニスの教え方だけではありません。人と向き合い、場をつくり、価値を伝える力です。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="court-lines absolute inset-0 opacity-30" />
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <VisualPanel label="経験豊かなコーチがジュニア生徒に丁寧に指導する様子" variant="coach" />
        </ScrollReveal>
        <ScrollReveal>
          <SectionHeading
            description={recruitPage.philosophy.subtitle}
            eyebrow="PHILOSOPHY"
            light
            title={recruitPage.philosophy.title}
          />
          <p className="mt-8 text-base leading-9 text-white/78">{recruitPage.philosophy.body}</p>
          <blockquote className="mt-8 rounded-lg border-l-4 border-tennis bg-white/9 p-6 text-xl font-black leading-10 text-white backdrop-blur">
            {recruitPage.philosophy.quote}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function MayanoMessageSection() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <ScrollReveal>
          <SectionHeading
            description={recruitPage.mayano.subtitle}
            eyebrow="MESSAGE"
            title={recruitPage.mayano.title}
          />
          <p className="mt-8 text-base leading-9 text-ink/74">{recruitPage.mayano.body}</p>
          <blockquote className="mt-8 rounded-lg bg-warm p-6 text-lg font-black leading-9 text-primary">
            {recruitPage.mayano.quote}
          </blockquote>
        </ScrollReveal>
        <ScrollReveal>
          <VisualPanel label="女性コーチがコート横で生徒やスタッフに話しかける様子" variant="staff" />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function JobDescriptionSection() {
  const icons = [Trophy, UsersRound, MessageCircle, BadgeCheck, CalendarDays, ClipboardList];

  return (
    <section className="py-24" id="work">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description="コーチの仕事は、レッスンだけではありません。生徒・保護者・スクール全体に関わる仕事です。"
            eyebrow="WORK"
            title="仕事内容"
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recruitPage.jobs.map((job, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal delay={(index % 3) * 80} key={job.title}>
                <SpotlightCard className="h-full p-6">
                  <Icon aria-hidden className="text-court" size={30} />
                  <h3 className="mt-5 text-xl font-black leading-8 text-primary">{job.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/70">{job.text}</p>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal>
          <div className="mt-9 rounded-lg border border-court/20 bg-white p-7 shadow-sm">
            <p className="text-lg font-black text-primary">
              ここで言う「入会案内」は、無理に売り込むことではありません。
            </p>
            <p className="mt-3 text-base leading-8 text-ink/72">
              体験に来てくれた方に、このスクールで続ける価値をきちんと伝え、安心して一歩を踏み出してもらうことです。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function DayFlowSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,61,46,0.06)_1px,transparent_1px),linear-gradient(rgba(15,61,46,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <ScrollReveal>
          <SectionHeading
            description="勤務時間・担当クラスはシフトや雇用形態により異なります。デモでは働き方のイメージとして掲載しています。"
            eyebrow="DAY FLOW"
            title="ある日の働き方"
          />
        </ScrollReveal>
        <div className="rounded-lg border border-primary/10 bg-warm/88 p-4 shadow-soft backdrop-blur sm:p-6">
          {recruitPage.dayFlow.map(([time, text], index) => (
            <ScrollReveal delay={index * 45} key={time}>
              <div className="grid grid-cols-[76px_1fr] gap-4 border-b border-primary/10 py-4 last:border-0">
                <time className="font-black text-court">{time}</time>
                <p className="font-bold text-primary">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerPathSection() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-white">
      <LightRays variant="dark" />
      <div className="section-shell relative">
        <ScrollReveal>
          <SectionHeading
            description="教えるだけで終わらない。教育・接客・入会案内・運営へ広がるキャリアがあります。"
            eyebrow="CAREER"
            light
            title="テニプラで描けるキャリア"
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {recruitPage.career.map((step, index) => (
            <ScrollReveal delay={index * 90} key={step.title}>
              <article
                className={`sticky top-24 min-h-[300px] rounded-lg border p-6 shadow-soft ${
                  index === 2
                    ? "border-tennis bg-tennis text-primary"
                    : "border-white/12 bg-white/10 text-white backdrop-blur"
                }`}
              >
                <span
                  className={`grid size-10 place-items-center rounded-full text-sm font-black ${
                    index === 2 ? "bg-primary text-tennis" : "bg-tennis text-primary"
                  }`}
                >
                  {index + 1}
                </span>
                <p className={`mt-5 min-h-10 text-xs font-black uppercase tracking-[0.12em] ${index === 2 ? "text-primary/70" : "text-tennis"}`}>
                  {step.label}
                </p>
                <h3 className="mt-2 text-xl font-black leading-8">{step.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${index === 2 ? "text-primary/76" : "text-white/72"}`}>
                  {step.text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <BlurText
            as="p"
            className="mt-12 max-w-4xl text-4xl font-black leading-tight text-tennis sm:text-5xl"
            text="テニス経験を、将来につながるビジネススキルに変えていく。"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TrainingSection() {
  return (
    <section className="bg-white py-24" id="training">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal>
          <VisualPanel label="先輩コーチが若手コーチにフィードバックする様子" variant="training" />
        </ScrollReveal>
        <div>
          <ScrollReveal>
            <SectionHeading
              description="最初から、完璧なレッスンや保護者対応ができる必要はありません。社員や先輩コーチによる研修を通じて、レッスンの進め方、声かけ、クラス運営、体験者への対応を少しずつ学べます。"
              eyebrow="TRAINING"
              title="コーチ未経験でも、育てる前提で迎えます。"
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {recruitPage.training.map(([title, text], index) => (
              <ScrollReveal delay={index * 70} key={title}>
                <div className="rounded-lg bg-warm p-5">
                  <p className="text-sm font-black text-court">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-black text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mt-8 text-2xl font-black text-primary">育てる前提で採る。だから、伸びる人が残る。</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function AIRoleplaySection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <GridScan />
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <ScrollReveal>
            <SectionHeading
              description="採用して終わりではなく、採用後にどう育てるかまで考えることが大切です。将来的には、体験後の保護者対応、入会案内、継続に迷う会員への声かけなどを、新人コーチが事前に練習できるロープレ環境を整えることも可能です。"
              eyebrow="FUTURE VISION"
              light
              title="将来的には、接客・入会案内も練習できる仕組みへ。"
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {recruitPage.roleplayScenes.map((scene, index) => (
              <ScrollReveal delay={index * 70} key={scene}>
                <div className="rounded-lg border border-white/14 bg-white/8 p-4 backdrop-blur">
                  <p className="text-xs font-black text-sky">Scene {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white/86">{scene}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal>
          <VisualPanel label="テニスコーチがタブレットで保護者対応の練習をする様子" variant="roleplay" />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function PersonSection() {
  return (
    <section className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <ScrollReveal>
          <SectionHeading
            description="技術だけではなく、人との関わりを大切にしたい人。自分の成長を通じて、スクールや生徒の成長にも関わりたい人を歓迎します。"
            eyebrow="PERSON"
            title="こんな方と一緒に働きたいと考えています"
          />
        </ScrollReveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {recruitPage.people.map((person, index) => (
            <ScrollReveal delay={index * 40} key={person}>
              <div className="flex h-full gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check aria-hidden className="mt-1 shrink-0 text-court" size={18} />
                <p className="font-bold leading-7 text-primary">{person}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RequirementSection() {
  return (
    <section className="bg-white py-24" id="requirements">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description="公式求人情報をベースにしたデモ表示です。公開前に最新の募集条件を確認します。"
            eyebrow="REQUIREMENTS"
            title="募集要項"
          />
        </ScrollReveal>
        <dl className="mt-10 overflow-hidden rounded-lg border border-primary/10">
          {recruitPage.requirements.map(([label, value]) => (
            <div className="grid gap-2 border-b border-primary/10 bg-white p-5 last:border-0 sm:grid-cols-[180px_1fr]" key={label}>
              <dt className="font-black text-primary">{label}</dt>
              <dd className="whitespace-pre-line leading-8 text-ink/74">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 rounded-lg bg-warm p-5 text-sm leading-7 text-ink/70">
          経験・スキル・担当範囲に応じた評価制度についても、今後整備予定です。レッスン指導だけでなく、体験対応・保護者対応・スクール運営への貢献も評価できる仕組みを目指します。
        </p>
      </div>
    </section>
  );
}

export function SelectionFlowSection() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            description="いきなり面接ではなく、まずは現場を見て話を聞ける導線です。"
            eyebrow="FLOW"
            title="応募・見学の流れ"
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {recruitPage.selection.map(([number, title, text], index) => (
            <ScrollReveal delay={index * 70} key={number}>
              <article className="h-full rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-black text-court">{number}</p>
                <h3 className="mt-4 text-lg font-black leading-7 text-primary">{title}</h3>
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

export function FaqSection() {
  return (
    <section className="bg-white py-24" id="faq">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            align="center"
            description="未経験者・転職検討者が気になりやすいポイントをまとめました。"
            eyebrow="FAQ"
            title="よくある質問"
          />
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {recruitPage.faqs.map(([question, answer]) => (
            <details className="group rounded-lg border border-primary/10 bg-warm p-5" key={question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-primary">
                <span>{question}</span>
                <ChevronRight
                  aria-hidden
                  className="shrink-0 transition group-open:rotate-90"
                  size={18}
                />
              </summary>
              <p className="mt-4 leading-8 text-ink/72">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-white" id="entry">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
        src="/images/recruit/hero-court.svg"
      />
      <LightRays variant="dark" />
      <div className="absolute inset-0 bg-deep/95" />
      <div className="section-shell relative grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-tennis">
            <Sparkles aria-hidden size={15} />
            Entry
          </p>
          <BlurText
            as="h2"
            className="text-balance text-4xl font-black leading-tight sm:text-5xl"
            text={"いきなり応募でなくても大丈夫です。\nまずは、現場を見に来てください。"}
          />
          <p className="mt-7 text-base leading-9 text-white/78">
            テニスプラザ尼崎の仕事は、ページだけでは伝わりきらない部分があります。コートの空気、生徒との距離感、コーチ同士の関係、保護者とのやりとり。まずは一度、現場の雰囲気を見て、あなたの経験がどう活かせるかを一緒に話しましょう。
          </p>
          <ClickSpark>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton label="まずは見学してみる" sectionId="final" />
              <CtaButton label="カジュアル面談を申し込む" sectionId="final" variant="secondary" />
            </div>
          </ClickSpark>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-lg bg-white p-6 text-primary shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-court">
              Contact form placeholder
            </p>
            <h3 className="mt-3 text-2xl font-black">仮フォーム領域</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              MTGデモでは、ここに応募・見学フォームを設置する想定です。公開時にはフォームサービス、電話導線、採用担当へのメール導線のいずれかに接続します。
            </p>
            <div className="mt-6 grid gap-3">
              {["お名前", "メールアドレス", "相談したい内容"].map((label) => (
                <div className="rounded-lg border border-primary/10 bg-warm px-4 py-3 text-sm font-bold text-ink/52" key={label}>
                  {label}
                </div>
              ))}
            </div>
            <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white" type="button">
              送信イメージ
              <ArrowUpRight aria-hidden size={16} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-white/92 px-4 py-3 shadow-[0_-12px_30px_rgba(15,61,46,0.12)] backdrop-blur md:hidden">
      <CtaButton className="w-full" label="まずは見学してみる" sectionId="mobile_sticky" />
    </div>
  );
}
