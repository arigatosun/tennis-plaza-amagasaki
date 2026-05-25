import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero動画 構想プレビュー｜テニスプラザ尼崎（社内）",
  robots: { index: false, follow: false }
};

const concepts = [
  {
    key: "B",
    title: "B. 同じコートに、降り積もる時間",
    en: "One Court, Many Hours",
    desc: "無人コートへpush-in。光が夜明け→昼→夕暮れと移ろう。Heroコピーと意味が完全一致、静謐・ループ向き。※黒帯は採用時にクロップ除去します。",
    src: "/images/recruit/video/concepts/concept-B.mp4"
  },
  {
    key: "A",
    title: "A. 一球の中へ / コートが開く",
    en: "Through the Ball",
    desc: "ボール籠のクローズアップから、引いて広いコート全景へ開いていく。Rally Burstのエネルギー向き。※黒帯はクロップ除去します。",
    src: "/images/recruit/video/concepts/concept-A.mp4"
  },
  {
    key: "C",
    title: "C. コートの外へ、視界がひらく",
    en: "The Court Opens",
    desc: "実コートから滑らかにモーフィングして、実ラウンジ（緑ソファ）へ変容。「教えるだけじゃない、広がる」を映像化。黒帯なし。",
    src: "/images/recruit/video/concepts/concept-C.mp4"
  }
];

export default function VideoPreviewPage() {
  return (
    <main style={{ background: "#0b3b2e", minHeight: "100vh", color: "#f8f6ef" }}>
      <div style={{ margin: "0 auto", maxWidth: 960, padding: "48px 20px 80px" }}>
        <p
          style={{
            color: "#ff7a59",
            fontFamily: "monospace",
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase"
          }}
        >
          Hero Background — Concept Preview
        </p>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            lineHeight: 1.5,
            margin: "12px 0 8px"
          }}
        >
          トップ背景動画 構想3案
        </h1>
        <p style={{ color: "rgba(248,246,239,0.7)", fontSize: 14, lineHeight: 1.9 }}>
          いずれも実写のテニプラ・コートを起点に生成。採用したい案を選んでください。
        </p>

        <div style={{ display: "grid", gap: 40, marginTop: 40 }}>
          {concepts.map((c) => (
            <section key={c.key}>
              <div style={{ alignItems: "baseline", display: "flex", gap: 12 }}>
                <span
                  style={{
                    background: "#d9ff43",
                    borderRadius: 6,
                    color: "#0b3b2e",
                    fontWeight: 800,
                    padding: "2px 10px"
                  }}
                >
                  {c.key}
                </span>
                <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{c.title}</h2>
              </div>
              <p
                style={{
                  color: "#ff7a59",
                  fontFamily: "monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  margin: "8px 0 0",
                  textTransform: "uppercase"
                }}
              >
                {c.en}
              </p>
              <video
                autoPlay
                controls
                loop
                muted
                playsInline
                preload="metadata"
                style={{
                  borderRadius: 8,
                  display: "block",
                  marginTop: 14,
                  width: "100%"
                }}
              >
                <source src={c.src} type="video/mp4" />
              </video>
              <p
                style={{
                  color: "rgba(248,246,239,0.72)",
                  fontSize: 13,
                  lineHeight: 1.9,
                  marginTop: 12
                }}
              >
                {c.desc}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
