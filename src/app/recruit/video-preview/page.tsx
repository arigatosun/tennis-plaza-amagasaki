import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero動画 プレビュー｜テニスプラザ尼崎（社内）",
  robots: { index: false, follow: false }
};

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
          Hero Background — Adopted
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.5, margin: "12px 0 8px" }}>
          トップ背景動画「この一かごから。」
        </h1>
        <p style={{ color: "rgba(248,246,239,0.72)", fontSize: 14, lineHeight: 1.9 }}>
          実写のテニプラ・コート（ボール籠）を起点に、カメラが前進するほど光が暖まり、遠景に人（後ろ姿）が立ち上がる。
          「道具と自分だけ → 人との出会い → 明るい未来」を一筆書きで。採用LPの A 案 Hero に適用済み。
        </p>
        <video
          autoPlay
          controls
          loop
          muted
          playsInline
          preload="metadata"
          style={{ borderRadius: 8, display: "block", marginTop: 24, width: "100%" }}
        >
          <source src="/images/recruit/video/hero-journey.mp4" type="video/mp4" />
        </video>
        <p
          style={{
            color: "rgba(248,246,239,0.55)",
            fontFamily: "monospace",
            fontSize: 11,
            letterSpacing: "0.16em",
            marginTop: 16,
            textTransform: "uppercase"
          }}
        >
          ※ 本番はループせず一度再生し、暖色の未来で静止します（このプレビューは確認用にループ）
        </p>
      </div>
    </main>
  );
}
