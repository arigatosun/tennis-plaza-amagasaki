# テニスプラザ尼崎 採用LP モーション実装メモ

作成日：2026-05-24

## 実装概要

既存の途中実装を、`tennis_plaza_recruit_lp_visual_design_plan.md` に沿って「動きの強い採用LP」方向へ組み直した。

主な変更点：

- Heroを2カラムからFull-bleedビジュアル + テキストオーバーレイへ変更
- React Bitsの設計思想に合わせ、必要なモーション部品を `src/components/react-bits/` にプロジェクト内実装
- CTA、カード、見出し、背景、キャリアパス、AIロープレにモーションを追加
- PCは強めの演出、SPは軽量で読みやすい構成に調整
- `prefers-reduced-motion` 対応をCSSに追加
- デモ用ビジュアルを `public/images/recruit/` に配置

## 追加したReact Bits風コンポーネント

公式React Bitsは copy-paste / CLI 導入前提のため、今回はLPに必要な部品だけをローカル実装した。

配置：

```text
src/components/react-bits/
```

追加コンポーネント：

- `SplitText`: Hero H1 の立ち上がり演出
- `BlurText`: Heroサブコピー / 強調コピー / Final CTA
- `ScrollReveal`: セクション単位のスクロール出現
- `ScrollVelocity`: Hero下部のキーワードティッカー
- `SpotlightCard`: 価値カード / 仕事内容カード
- `Magnet`: CTA hover の吸着感
- `ClickSpark`: CTA周辺のクリック反応
- `LightRays`: Hero / Career / Final CTA の光線背景
- `GridScan`: AIロープレセクションの未来感
- `ShinyText`: 予備。CTAでは視認性優先のため未使用

## 主なUIUX判断

### Hero

採用LPの第一印象を最優先し、フルスクリーン寄りのビジュアルに変更。

- 背景：テニスコート風のローカルSVG
- モーション：SplitText、BlurText、LightRays、rally-trail、ScrollVelocity
- CTA：Hero内 + Sticky header + Mobile sticky

### キャリアパス

「教えるだけで終わらない」を体験的に見せるため、濃色セクション化。

- Step 3「体験・入会フォロー担当」をテニスイエローで強調
- キャリアの積み上がり感を出すカード配置

### AIロープレ

初回提案の主役にしすぎないよう、Deep Green背景 + GridScanで控えめな未来感にした。

### 募集要項 / FAQ

ここは信頼性と読みやすさを優先し、モーションを抑制。

## デモ用ビジュアル

配置：

```text
public/images/recruit/
```

追加ファイル：

- `hero-court.svg`
- `coach-scene.svg`
- `staff-scene.svg`
- `training-scene.svg`
- `roleplay-scene.svg`

注意：

- すべてデモ用の抽象ビジュアル
- 本公開前に、山下社長・近江さん本人写真や実際のスクール写真へ差し替える想定
- 実人物に似せたAI生成は行っていない

## 検証内容

実施済み：

- `npm run build`
- ブラウザで `/recruit` のDesktop表示確認
- ブラウザでMobile viewport `390x844` 表示確認
- Header CTAの重複/折返し修正
- Final CTAの背景コントラスト修正
- Console error / warning 確認
- 2026-05-24 追記：Next.js 15.5.18 の devtools / React Client Manifest 周りで `__webpack_modules__[moduleId] is not a function` が出たため、`next` / `react` / `react-dom` など主要依存を明示バージョン固定し、`.next` キャッシュ削除後に再インストール。`http://localhost:3001/recruit` で表示復旧を確認。

## 残タスク候補

- 実写または生成ビットマップ画像への差し替え
- Hero動画の追加
- FAQ openイベントの実装強化
- Scroll depthイベントの実装
- 本番フォーム接続
- 最新の募集条件確認
- 山下社長・近江さんの本人写真/本人コメント反映
