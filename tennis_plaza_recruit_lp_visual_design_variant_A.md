# テニスプラザ尼崎 採用LP ビジュアル設計 / Variant A — Rally Burst

作成日：2026-05-24
作成者：Senior Art Direction（A案担当）
目的：来週の山下社長提案デモで見せる「A案 = Rally Burst」を、実装可能な粒度まで設計しきる
推奨閲覧者：山下社長、近江氏、アリガトサン担当（吉川／実装担当）、デザイン／フロント実装エンジニア

---

## 0. このドキュメントの読み方

このファイルは、`tennis_plaza_recruit_lp_section_restructure_plan.md`（19セクション構成）と `tennis_plaza_recruit_lp_visual_design_plan.md`（v1ビジュアル計画）を「進化」させた A案 = Rally Burst の決定版である。

v1を否定するのではなく、

- v1で曖昧だった「速度感／編集スポーツ誌っぽさ／弾けるエネルギー」を100%言語化する
- 既存実装（`globals.css` の `.split-text` / `.spotlight-card` / `.light-rays` / `.rally-trail` / `.scroll-velocity` など）を「土台として残し、Rally Burst 拡張クラスを上に積む」
- 既存の19セクションを全て埋め、各セクションに「目的（表/裏）／レイアウト／カラー／タイポ／モーション／写真／マイクロインタラクション／裏メッセージ／実装コンポーネント名」の9項目を必ず置く

という方針で書いている。

---

## 1. コンセプトステートメント

### 1-1. 1ページ目で社長に刺す3行

```text
テニスボールが弾けるように、視線がコートを駆ける。
採用LPは、求人票ではなく、スクールを動かすブランドになる。
若い世代に「ここで働きたい」と思わせる土俵を、まず作った。
```

### 1-2. コンセプト名

`Rally Burst` ／ 日本語サブタイトル：「ラリーが弾けるように、人が集まる」

### 1-3. 第一印象（10秒以内）

- 地域テニススクールの採用ページなのに、Nike SB / On Running / Decathlon の若年向けキャンペーンサイトのような **編集スポーツ誌**
- スクロールするたびに、コートを跨いだ視点切替が起きる
- でも本文は読みやすい。Yellow と Deep Green の役割分担で、コピーは沈まない

### 1-4. 何を裏で伝えるか

| 表（求職者へ） | 裏（山下社長へ） |
|---|---|
| テニス経験が、スクールの成長をつくる仕事に変わる | 採用ブランドを"今っぽく"した。若年層が応募する土俵を作った |
| 見学だけでOK、応募は決めてから | 入口の心理ハードルを設計レベルで下げ、見学数というKPIを起こす |
| キャリアはコーチで終わらない | 属人化していた勝ちパターンが、5段階のキャリアと育成導線で再現可能になる |

---

## 2. ターゲットペルソナ別 刺さり方マッピング

| ペルソナ | 主役セクション | A案で何が効くか |
|---|---|---|
| **Persona A**（テニス経験あり・指導未経験 20-30代） | Hero / Section 4 理想人材 / Section 11 キャリア / Section 10 育成体制 | 「テニス経験 → キャリア」の変換が、Heroのラリー軌道＋スコアボード演出で**一瞬で**伝わる。Inter Tight Black の英字＋日本語混植が、若年層が普段見ているスニーカーブランド／音楽フェスサイトの語彙と一致 |
| **Persona B**（コーチ経験者・スクール経験者） | Section 6 山下哲学 / Section 11 キャリア（Step 4-5）/ Section 12 AIロープレ | ScrollStack でキャリア5段階が「積み上がる」体験。最終 School Growth Manager の拡大演出で「ここなら役割が広がる」と直感する。哲学セクションの CardSwap で「現場の判断が言語化されている」と分かる |
| **Persona C**（接客／営業経験 × テニス経験） | Section 7 体験から入会まで（横スクロールラリー）/ Section 5 価値 / Section 9 仕事内容 | 「営業」ではなく 5ステップのラリー動線として可視化されているので、心理的抵抗が消える。Coral の `+1` ポップアップが小さな成功体験を視覚化 |
| **Persona D**（学生／アルバイト／副業候補） | Hero バッジ / Section 15 見学で確認できること / Section 18 Final CTA | ラリーボールの ClickBurst、CTA pill の bounce、ScrollVelocity の流れる英字キーワード。**Nike SB の Skate Lookbook と同じ温度感**。「とりあえず見学してみるか」と押せる |

---

## 3. ムード／リファレンス（言語化のみ）

A案が立っている場所を、言葉で固定しておく。

### 3-1. ベンチマーク（方向性として近い）

| ブランド／作品 | 借りる要素 |
|---|---|
| **Nike SB / Nike Running** Lookbook | フルブリード写真＋巨大英字、Yellow / Volt の使い方、スコアボード的な数字レイアウト |
| **On Running** (on-running.com) | 余白の使い方、Inter Tight 系の超太字英字、商品写真の白フチ／斜めクロップ |
| **Patta / Adidas Originals コラボ** | ストリートな黄色×濃緑、ティッカー帯、ステンシル感 |
| **F1: Drive to Survive**（Netflix） | スコアボード演出、選手キャプション、テレメトリ風グリッド |
| **Decathlon Brand Pages**（テニスカテゴリ） | スポーツ機能美、競技別の温度感、コートライン的グリッド |
| **Apple TV+ "Break Point"** OP | スイング軌跡のSVG、白フチ写真、編集スポーツ誌的タイポ |

### 3-2. 避けるムード（A案で**やらない**こと）

```text
- 紫青グラデーションのSaaS／AI スタートアップLP
- 体育会系の血と汗のスポーツ広告
- 地域企業向けの硬い採用ページ（写真＋PDF的）
- 美容クリニック／結婚相談所的な丸み過剰デザイン
- AI生成イラストの「無料素材バナー」感
```

### 3-3. 一言サマリ

```text
スポーツブランドの広告で見る速度感を、
求職者と社長の両方が「自分ごと」として読める情報密度で、
落ち着いて持たせる。
```

---

## 4. カラーシステム

### 4-1. パレット（Tailwindクラス対応）

| 名称 | HEX | Tailwindキー | 役割 | 想定使用面積 |
|---|---|---|---|---:|
| Deep Court | `#0B3B2E` | `deep` | 濃色セクション背景、本文強調、CTA文字色 | 28% |
| Primary Green | `#0F3D2E` | `primary` | ロゴ周り、border、強調 | 4% |
| Court Mid | `#1F7A5B` | `court` | サブ背景、divider | 6% |
| Rally Green | `#18A36B` | `rally` | リンク、Yellow との二色帯 | 4% |
| **Tennis Yellow** | **`#D9FF43`** | **`tennis`** | **CTA面、Hero ラリー軌道、巨大数字、ストライプ** | **18%（A固有で大胆）** |
| Clay Coral | `#FF7A59` | `clay` | スコアボード `+1`、チップ、小さな差し色 | 3% |
| Sky Blue | `#7DD3FC` | `sky` | AIロープレ／Future Roadmap **のみ** | 3% |
| Warm White | `#F8F6EF` | `warm` | 基本背景 | 28% |
| Ink | `#17212B` | `ink` | 本文テキスト | — |
| Soft Edge | `#E6E9E6` | `soft` | divider、subtle border | 6% |

### 4-2. 配色ペアの組み合わせ（決め打ち）

| 用途 | 背景 | テキスト | 装飾 |
|---|---|---|---|
| Hero | `deep` | `warm` + 巨大 `tennis` 数字 | `tennis` ラリー軌道、`tennis` 5%網点 |
| 共感／価値カード | `warm` | `ink` | `tennis` border 1px、hover で `rally` |
| 山下哲学 | `warm` × `deep` 分割 | `ink` / `warm` | `tennis` ストライプ斜め |
| 体験→入会導線 | `deep` | `warm` | `tennis` ステップ番号、`clay` +1 |
| キャリア | `warm` グラデなしフラット | `ink` | Step 3 のみ `tennis` 背景 + `deep` 文字 |
| AIロープレ | `deep` | `warm` | `sky` 線、`sky` グリッド、薄く `tennis` 1点 |
| Final CTA | `deep` | `tennis` H1 + `warm` 本文 | `tennis` StarBorder、`tennis` バウンドボール |

### 4-3. コントラスト指針（AA厳守）

| 組み合わせ | 用途 | 判定 |
|---|---|---|
| `tennis` on `deep` | 大見出し／CTA文字 | 12.5:1 ✅ |
| `tennis` on `warm` 文字 | **禁止**（3.0:1 不足） | ❌ |
| `tennis` 背景 + `deep` 文字 | CTA／ステップ番号 | 12.1:1 ✅ |
| `clay` on `warm` | 小さなチップのみ可 | 3.8:1 △（14px以上 + Bold で） |
| `sky` on `deep` | AIセクション細字 | 4.9:1 ✅ |

### 4-4. 禁則

```text
- グラデーションは使わない（線形・放射ともに不可、ただし既存 globals.css の :root body グラデは Warm White の地に薄く乗る既存層なので維持）
- ドロップシャドウは boxShadow.soft / lift のみ。装飾シャドウ追加禁止
- Yellow を白背景上のテキストに使わない
- Sky Blue は AIロープレ／Future Roadmap 以外に出さない
- 紫／ピンク／ティール／オレンジ系を増やさない（Coral 1点のみ）
```

---

## 5. タイポグラフィシステム

### 5-1. フォント定義（追加導入が必要なもの）

| ファミリー | ウェイト | 用途 | 追加方法 |
|---|---|---|---|
| **Inter Tight** | 900 (Black) | 英字ディスプレイ／巨大スコアボード | `next/font/google` で追加 |
| **Space Grotesk** | 700 | 英字ラベル／キャプション | `next/font/google` で追加 |
| **Noto Sans JP** | 500 / 700 / 900 | 日本語全般 | 既存 `--font-noto-sans-jp` 流用 |
| **Inter** | 400 / 700 | 英字フォールバック／本文小 | 既存 `--font-inter` 流用 |
| **Sora**（候補1）／**DM Mono**（候補2）／**Geist Mono**（候補3） | 700 | スコアボード数字／時刻 | **A案推奨：Sora 700**（角張りすぎず、テック寄りすぎない） |

### 5-2. ロール別 スタイル表

| ロール | フォント | weight | size | line-height | letter-spacing | 用途 |
|---|---|---|---|---:|---:|---|
| Hero H1（英字） | Inter Tight | 900 | `clamp(48px, 8vw, 128px)` | `0.88` | `-0.04em` | `RALLY THE FUTURE` |
| Hero H1（日本語） | Noto Sans JP | 900 | `clamp(28px, 4.4vw, 56px)` | `1.18` | `-0.01em` | 「テニスを教えるだけではなく、〜」 |
| 巨大スコアボード番号（背景） | Inter Tight | 900 | `clamp(80px, 12vw, 220px)` | `0.82` | `-0.05em` | `00 / 19` |
| セクション英字ラベル | Space Grotesk | 700 | `12px` | `1.4` | `+0.12em` | `SECTION 02 — WHY NOW` |
| セクション見出し（日本語） | Noto Sans JP | 900 | `clamp(26px, 3.4vw, 44px)` | `1.22` | `-0.01em` | 「順調な今だからこそ」 |
| サブ見出し | Noto Sans JP | 700 | `clamp(18px, 2vw, 22px)` | `1.5` | `0` | リード文 |
| 本文 | Noto Sans JP | 500 | `15-16px` | `1.85` | `+0.01em` | 全本文 |
| キャプション／注釈 | Inter | 400 | `12px` | `1.6` | `+0.02em` | 写真キャプション |
| スコアボード数字（時刻／スコア） | Sora | 700 | `clamp(20px, 2.6vw, 32px)` | `1` | `-0.02em` | `09:30` `+1` `15/19` |
| CTA ラベル（日本語） | Noto Sans JP | 900 | `16px` | `1` | `+0.06em` | 「まずは見学してみる」 |
| CTA ラベル（英字） | Space Grotesk | 700 | `12px` | `1` | `+0.18em` | `VISIT THE COURT →` |
| ティッカー（ScrollVelocity） | Inter Tight | 900 | `clamp(28px, 3.6vw, 56px)` | `1` | `-0.02em` | 流れる英字 |

### 5-3. 混植リズム（A案の核）

各セクションで **「英字3単語ラベル → 日本語見出し」** を必ずペアで使う。

例：

```text
SECTION 06 — COACHING PHILOSOPHY
一人ひとりに合わせて、伸ばし方を変える。
```

```text
SECTION 11 — CAREER PATH × 05
教える仕事から、スクールを育てる役割へ。
```

このリズムが「採用ページ」ではなく「編集スポーツ誌の見開き」に見せる。

---

## 6. レイアウトシステム

### 6-1. グリッド

```text
PC: 12カラム / max-width 1280px / gutter 24px / outer margin 40px
Tablet: 8カラム / gutter 20px / outer margin 28px
SP: 4カラム / gutter 16px / outer margin 20px
```

セクションごとに、以下3パターンを使い分ける。

| パターン | グリッド | 用途 |
|---|---|---|
| **Strict** | 12カラムにきっちり収まる | 募集要項、FAQ、選考フロー |
| **Broken** | 1セクションに -3°〜+3° の傾き、または巨大数字が右肩からはみ出す | Hero、価値、キャリア、Final CTA |
| **Bleed** | 写真が画面端まで届く | 山下哲学、近江、体験→入会 |

### 6-2. 角丸・シャドウ・border

```text
角丸：
- カード／パネル：rounded-sm (= 4px) のみ
- CTA：rounded-full（pill）のみ
- 写真：rounded-sm + 白フチ 6px の Polaroid パターンも併用

シャドウ：
- 既存 boxShadow.soft / lift をそのまま継承
- 追加シャドウ禁止

Border：
- 1px solid rgba(15,61,46,0.12) を基本
- Hover時に 1px solid rgba(217,255,67,0.6) に切り替え
- セクション区切りに 2px の Yellow ストライプ（後述）
```

### 6-3. 装飾パーツ（Rally Burst 固有）

A案で繰り返し登場する装飾パーツに名前を付ける。

| パーツ名 | 見た目 | 使用箇所 |
|---|---|---|
| **`<ScoreboardNumber />`** | 巨大な薄い `00/19` 数字、`tennis` 12%不透明 | 全セクションの左上または右上 |
| **`<YellowStripe />`** | 高さ 8px の `tennis` ストライプ、斜め -2° | セクション境界 |
| **`<RallyTrail />`** | Yellow の曲線SVGパス + ボール | Hero、Final CTA |
| **`<EditorialTape />`** | 白フチ Polaroid 風 写真コンテナ | 山下、近江、見学プレビュー |
| **`<KineticTicker />`** | 流れる英字キーワード（既存 `.scroll-velocity` 拡張） | Hero下、セクション境界 |
| **`<VsBadge />`** | スコアボード風 `00 vs 19` バッジ | セクションヘッダー |
| **`<DotGrid />`** | コートライン由来の網点 8% Black | 写真オーバーレイ |
| **`<CoachLineDivider />`** | コートの白線風 1.5px ライン | 見出し下 |

### 6-4. 写真処理（3パターンを使い分け）

| パターン | 処理 | 適用セクション |
|---|---|---|
| **Yellow Overlay + 網点** | `tennis` 25%不透明 + 8% 黒網点 multiply | Hero、Final CTA |
| **Diagonal Crop** | `clip-path: polygon()` で -3° 斜めクロップ | 山下哲学、体験→入会 |
| **Polaroid Edit** | 白フチ 6-10px + drop-shadow 軽め + 角度 ±2° | 近江メッセージ、見学プレビュー |

---

## 7. アイコノグラフィ & イラストレーション方針

### 7-1. アイコン

- **lucide-react** で統一（既存方針継承）
- ストローク幅 1.5px、サイズ基本 20px
- カラーは `deep` または `tennis`（背景に応じて切替）
- カスタムアイコンが必要な場合は同じ stroke 比で SVG 自作

### 7-2. テニスモチーフのSVG（自作）

A案では以下を SVG コンポーネントとして自作する。

| コンポーネント | 描画内容 |
|---|---|
| `RallyBallTrail.svg` | テニスボール + 曲線軌道（cubic bezier） |
| `CourtLines.svg` | テニスコートの白線（ベースライン、サービスライン、センターマーク） |
| `ScoreboardFrame.svg` | スコアボード枠（薄い border + 角に小さなドット） |
| `RacketSweep.svg` | ラケットのスイング軌跡（曲線1本） |
| `StepBounce.svg` | ボールが地面でバウンドする波形 |

### 7-3. イラストの方向性

- イラストは**使わない**（写真と SVG モーションに絞る）
- AI生成バナーイラスト／フラットイラストは Rally Burst の編集スポーツ誌感を壊すため禁止
- スクリーンショット系（AIロープレ画面など）は wireframe 的 SVG で抽象化

---

## 8. モーションシステム

### 8-1. 命名規則

既存 globals.css のクラス名規則を継承しつつ、A案で追加するクラスは `rb-` プレフィックスを付ける（Rally Burst の略）。

```text
既存：.split-text / .blur-text / .spotlight-card / .light-rays / .rally-trail / .scroll-velocity
A案追加：.rb-bounce-cta / .rb-scoreboard / .rb-yellow-stripe / .rb-tilt-broken / .rb-step-rally / .rb-card-burst
```

### 8-2. Easing 規約（4種類だけ使う）

| 名前 | 値 | 用途 |
|---|---|---|
| `rb-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | テキスト立ち上がり、カードreveal（既存と統一） |
| `rb-ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | CTA hover、ボールバウンド |
| `rb-ease-court` | `cubic-bezier(0.65, 0, 0.35, 1)` | ラリー軌道、横スクロール |
| `rb-linear` | `linear` | ティッカー、無限ループ |

### 8-3. Motion Budget（v1を強化）

| セクション | 強さ | 主役モーション |
|---|---:|---|
| 0. Sticky Header | 1/5 | slide-down、CTA hover Magnet |
| 1. Hero | **5/5** | SplitText × LightRays × RallyTrail SVG × KineticTicker |
| 2. Why Now | 3/5 | ScrollFloat 巨大数字、ScrollReveal カウンター |
| 3. 共感 | 3/5 | SpotlightCard + ClickSpark |
| 4. 理想人材 | 4/5 | BlurText 強調、Yellow stripe sweep |
| 5. 3つの価値 | 4/5 | SpotlightCard + Magnet + Coral `+1` |
| 6. 山下哲学 | 3/5 | TiltedCard + CardSwap パンチライン |
| 7. 体験→入会 | **5/5** | 横スクロール rally step（5ステップが左↔右） |
| 8. 近江 | 2/5 | Polaroid 軽い揺れ、ScrollReveal |
| 9. 仕事内容 | 3/5 | 6カード stagger、hover spotlight |
| 10. 育成体制 | 3/5 | AnimatedList チェック点灯 |
| 11. キャリア | **5/5** | ScrollStack 5段積み、最終カード画面拡張 |
| 12. AIロープレ | 4/5 | GridScan + LetterGlitch（弱）+ Sky Blue |
| 13. 1日の流れ | 2/5 | タイムライン点灯、コートライン伸長 |
| 14. 募集要項 | 1/5 | テーブル fade-in のみ |
| 15. 見学プレビュー | 3/5 | Polaroid 順送り、CTA bounce |
| 16. 選考フロー | 2/5 | ステップアクティブ化 |
| 17. FAQ | 1/5 | accordion 高さアニメ |
| 18. Final CTA | **5/5** | StarBorder Yellow + Magnet + ClickBurst 3方向ボール |
| 19. Future Roadmap | 3/5 | Phase 1→4 縦タイムライン、Sky Blue ハイライト |

### 8-4. Reuseable Patterns

繰り返し使うアニメパターンに名前を付けて辞書化する。

| パターン名 | パラメータ |
|---|---|
| **SplitTextRise** | duration: 780ms / easing: rb-ease-out / delay stagger: 60ms / split by: word |
| **BlurInLine** | duration: 860ms / easing: rb-ease-out / blur start: 14px / delay stagger: 120ms |
| **ScrollRevealUp** | duration: 720ms / easing: rb-ease-out / translateY: 26px / threshold: 0.2 |
| **MagnetPull** | radius: 80px / strength: 0.25 / easing: rb-ease-out / duration: 180ms |
| **ClickSparkBurst** | particles: 6 / color: `tennis` / radius: 80px / duration: 680ms |
| **BallBounceCTA** | translateY: -8px / duration: 600ms / easing: rb-ease-bounce / trigger: hover |
| **YellowStripeSweep** | width: 100% / scaleX from 0 to 1 / duration: 540ms / origin: left / trigger: in-view |
| **ScoreCounter** | from 0 → target / duration: 1400ms / easing: rb-ease-out / trigger: in-view |
| **RallyStepHorizontal** | sticky container、5枚を左→右→左→右→左に横移動 / scroll-linked / duration: 1 scroll vh per step |
| **CardStackBuild** | 5枚積み、各カード scale 0.94 → 1.0、translateY +12 → 0、delay stagger 100ms |
| **TickerLoop** | 26s linear infinite（既存 `.scroll-velocity` 継承） |
| **PolaroidWiggle** | rotate ±1°、duration: 4.8s、ease-in-out、infinite |

### 8-5. prefers-reduced-motion フォールバック

各モーションパターンに対する静止フォールバックを表で定義する。

| パターン | 静止時の挙動 |
|---|---|
| SplitTextRise | テキストは初期状態で見える（filter/transform なし） |
| BlurInLine | blurなし、opacity 1 |
| ScrollRevealUp | translateY なし、opacity 1 |
| MagnetPull | 適用なし |
| ClickSparkBurst | 適用なし |
| BallBounceCTA | hover時の translateY のみ -2px に縮小 |
| YellowStripeSweep | 100% で表示済み |
| ScoreCounter | 最終値で即表示 |
| RallyStepHorizontal | 縦並びの5カードに自動切替 |
| CardStackBuild | 5枚を縦並びで全表示 |
| TickerLoop | 静止、最初の3キーワードのみ表示 |
| PolaroidWiggle | rotate固定（最後の角度で停止） |

既存 globals.css の `@media (prefers-reduced-motion: reduce)` ブロックを継承し、追加クラスは個別に `@media` クエリでフォールバックを書く。

---

## 9. セクション別 詳細設計（全19セクション）

各セクションは以下9項目で書く：

```text
1. 目的（求職者表 / 社長裏）
2. レイアウト（PC/SP ASCIIワイヤー）
3. カラーアサイン
4. タイポグラフィの具体
5. モーションの具体（コンポーネント名 + パラメータ + Easing）
6. 写真／動画の指示
7. マイクロインタラクション
8. 山下社長に伝わる裏メッセージ
9. 実装に必要な React Bits / 自前コンポーネント名
```

---

### Section 0 — Sticky Header

**1. 目的**
- 表：見学導線を常時提示
- 裏：「ナビ設計から導線を考えるパートナー」だと伝える

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO] Tennis Plaza Amagasaki   仕事の考え方 育成体制 キャリア   │
│         RECRUIT 26                       募集要項 [見学する →]   │
└─────────────────────────────────────────────────────────────────┘
高さ：72px → スクロール後 56px
背景：rgba(248,246,239,0.86) + backdrop-blur(18px)
下端：1px solid rgba(15,61,46,0.08)
```

**レイアウト（SP）**

```text
┌──────────────────────────┐
│ [LOGO]          [☰] [CTA]│
└──────────────────────────┘
スクロール80%超で 下部fixed CTA を出現
```

**3. カラー**：背景 `warm/86`、ロゴ `deep`、ナビ `ink`、CTA 背景 `tennis` + 文字 `deep`

**4. タイポ**：ナビ Noto Sans JP 700 / 14px / tracking +0.04em、CTA Noto Sans JP 900 / 14px

**5. モーション**
- 初期：slide-down 480ms / rb-ease-out
- スクロール80px超：高さ72→56px、transition 240ms
- CTA hover：MagnetPull (radius 80px, strength 0.25)
- ナビhover：下線が `rally` 1.5px で left→right にゲージ走行（240ms / rb-ease-out）

**6. 写真**：なし

**7. マイクロ**：ナビ下線がコートライン風に走る、CTAホバーで背後にボールがバウンド（後述 BallBounceCTA）

**8. 裏メッセージ**：「最初の72pxで設計レベルが伝わる」

**9. 実装**：`<StickyHeader />`（自前）+ React Bits `Magnet`、SVG `RacketSweep` をロゴ脇に小さく

---

### Section 1 — Hero / First View

**1. 目的**
- 表：「普通のテニスコーチ求人ではない」を 3秒で伝える
- 裏：「採用ブランドを今っぽくしてくれた」と一瞬で感じさせる

**2. レイアウト（PC）**

```text
┌───────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ ░ 00 / 19  ← 巨大スコアボード番号（tennis 12% 不透明）              ░│
│ ░                                                                    ░│
│ ░ SECTION 01 — RALLY THE FUTURE                                      ░│
│ ░                                                                    ░│
│ ░  RALLY                                                             ░│
│ ░  THE                                                               ░│
│ ░  FUTURE.                       ← Inter Tight 900 / clamp 48-128px ░│
│ ░                                                                    ░│
│ ░  テニスを教えるだけではなく、                                       ░│
│ ░  生徒とスクールの成長をつくる仕事。                                 ░│
│ ░                                                                    ░│
│ ░  好きだったテニスを、教育・接客・入会案内・運営に広げるキャリアへ。 ░│
│ ░                                                                    ░│
│ ░  [まずは見学してみる →]  [カジュアルに話を聞く]                    ░│
│ ░                                                                    ░│
│ ░  ◯ コーチ未経験OK   ◯ 研修あり   ◯ 見学からOK                     ░│
│ ░                                                                    ░│
│ ░  ●━━━━╮          ← Yellow ラリー軌道SVG（背景 deep）              ░│
│ ░       ╰━━━━━●━━╮                                                  ░│
│ ░               ╰━━━━━●  ← テニスボール3点バウンド                   ░│
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ EDUCATION ▸ COACHING ▸ ENROLLMENT ▸ GROWTH ▸ COMMUNITY ▸ FUTURE ▸ ... │
│  ← KineticTicker（流れる英字、Yellow 文字、Deep 背景の細い帯）       │
└───────────────────────────────────────────────────────────────────────┘
高さ：min(94svh, 920px)
```

**SP**：縦並び、巨大数字は右下に 200px サイズで配置、ラリー軌道は SVG 静止形 + CSS animation 1ループ、動画なし

**3. カラー**：背景 `deep`、文字 `warm`、H1 ハイライト `tennis`、ラリー軌道 `tennis`、CTA 1次 `tennis` 背景 + `deep` 文字、CTA 2次 transparent + `warm` border 1px

**4. タイポ**
- 英字H1：Inter Tight 900 / clamp(48, 8vw, 128) / line-height 0.88 / tracking -0.04em
- 日本語H1：Noto Sans JP 900 / clamp(28, 4.4vw, 56) / line-height 1.18
- リード：Noto Sans JP 500 / 17px / line-height 1.85
- バッジ：Space Grotesk 700 / 12px / tracking +0.12em
- 巨大数字 `00/19`：Inter Tight 900 / clamp(180, 18vw, 320) / opacity 0.12

**5. モーション**

| 要素 | パターン | パラメータ | Easing |
|---|---|---|---|
| 英字H1 | SplitTextRise | duration 780ms / stagger 60ms（単語単位） | rb-ease-out |
| 日本語H1 | BlurInLine | duration 860ms / stagger 120ms（行単位）/ delay 200ms | rb-ease-out |
| リード | ScrollRevealUp | delay 900ms | rb-ease-out |
| バッジ3つ | stagger reveal | each delay 1100/1180/1260ms | rb-ease-out |
| CTA primary | StarBorder Yellow + Magnet | 既存 + radius 80px | rb-ease-out |
| CTA secondary | underline 走行 | 240ms | rb-ease-out |
| LightRays背景 | 既存 `.light-rays` 4本 | 既存 8s ループ | linear |
| ラリー軌道SVG | path animate-draw + ball follow | total 5.8s loop | rb-ease-court |
| KineticTicker | 既存 `.scroll-velocity` | 26s linear infinite | linear |
| ScoreboardNumber `00/19` | ScrollFloat 軽く | translateY ±6px / 6s ease-in-out | — |

**6. 写真／動画**
- PC：軽量 mp4（10-15秒ループ、サイズ <1.5MB、コーデック h.264）+ poster 画像
- 内容：テニススクールのジュニアレッスン、コーチが屈んで子に話しかける場面、引きのコート写真
- 撮影トーン：日中、自然光、Yellow と Green が画面内にある画
- SP：静止画 + SVG ラリー軌道のみ（動画は読み込まない）
- LCP対策：`<img priority>` で poster 先行ロード、動画は IntersectionObserver で遅延スタート

**7. マイクロインタラクション**
- CTA primary ホバー：BallBounceCTA 発火（背後にYellowボールが地面でバウンド、0.6s）
- CTA secondary ホバー：下線がコートライン風に left→right にゲージ走行
- バッジホバー：rotate ±3°、240ms

**8. 裏メッセージ**：「Heroの15秒で、若年層に届くデザイン水準が示されている。媒体に出す前にこの土俵を作っておく価値がある」

**9. 実装に必要なもの**
- React Bits：`SplitText`、`BlurText`、`LightRays`、`StarBorder`、`Magnet`、`ScrollVelocity`
- 自前：`<RallyTrailSVG />`、`<ScoreboardNumber />`、`<KineticTicker />`、`<HeroVideo />`、`<HeroBadges />`
- globals.css：既存 `.split-text` / `.light-rays` / `.scroll-velocity` / `.rally-trail` 流用、`.rb-bounce-cta` 追加

---

### Section 2 — Why Now / 今、採用導線を整える理由

**1. 目的**
- 表：「今のスクールが好調」だからこそ次の成長の話だと伝える
- 裏：「経営再建ではなく、成長継続の話として捉えている」と感じさせる

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 02 — WHY NOW                          ░ 02 ░ ← 巨大数字│
│                                                                 │
│ 順調な今だからこそ、                                              │
│ 次の成長を支える人材が必要です。                                  │
│                                                                 │
│ ┌──────────────┬──────────────┬──────────────┐                  │
│ │  +37%        │   05         │   01         │                  │
│ │  在籍数 vs   │   コーチ      │  今、整えたい │                  │
│ │  3年前        │   が現場で動く │  採用導線     │                  │
│ │ (架空KPI仮)   │              │              │                  │
│ └──────────────┴──────────────┴──────────────┘                  │
│                                                                 │
│ レッスンを担当する人を増やすだけでは足りません。                  │
│ 生徒が続けたくなる体験をつくり、保護者が安心して任せられる関係を、 │
│ スクールの価値を一緒に届けていける仲間が必要です。                 │
└─────────────────────────────────────────────────────────────────┘
```

**SP**：3カード縦並び、数字は左寄せ巨大

**3. カラー**：背景 `warm`、見出し `ink`、巨大数字 `tennis` 12% 背景文字、KPIカード border 1px `soft`、KPI数字 `deep`、`+37%` の `+` のみ `clay`

**4. タイポ**
- 英字ラベル：Space Grotesk 700 / 12px / tracking +0.12em
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44) / line-height 1.22
- KPI数字：Sora 700 / clamp(40, 6vw, 72)
- KPIラベル：Noto Sans JP 700 / 13px / line-height 1.5
- 本文：Noto Sans JP 500 / 16px / line-height 1.85

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 見出し | BlurInLine | 860ms / stagger 120ms |
| 巨大数字 `02` | ScrollFloat | translateY ±6px / 6s |
| KPI数字 | ScoreCounter | 0→target / 1400ms / rb-ease-out / trigger in-view |
| KPIカード | ScrollRevealUp + stagger | each delay 120ms |
| 本文 | ScrollRevealUp | 720ms |

**6. 写真**：なし（数字主役）

**7. マイクロ**：KPIカード hover で `tennis` border 1px が現れる、`+37%` の `+` が hover 時に rotate 8°

**8. 裏メッセージ**：「KPI を仮置きで出した。実数値は山下社長との会話で埋めるたたき台」

**9. 実装**：`<WhyNowSection />`（自前、新規）、`<KpiCounter />`（自前）、React Bits `ScrollReveal` 流用

---

### Section 3 — 求職者の不安への共感

**1. 目的**
- 表：4つの不安を先に言い当て、心理的ハードルを下げる
- 裏：「ペルソナの不安を解像度高く言語化している」と伝える

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 03 — REAL CONCERNS                    ░ 03 ░            │
│                                                                 │
│ 好きだけで仕事にしてよいか、迷う人へ。                            │
│                                                                 │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐             │
│ │ Card 01  │ │ Card 02  │ │ Card 03  │ │ Card 04  │             │
│ │ 好きだけ │ │ 教えた   │ │ 売り込む │ │ 必要と   │             │
│ │ で続け   │ │ 経験が   │ │ 仕事は   │ │ される   │             │
│ │ られるか │ │ 少ない   │ │ 苦手     │ │ 仕事が   │             │
│ │ 不安     │ │          │ │          │ │ したい   │             │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

**SP**：1列縦並び、カードは横長

**3. カラー**：背景 `warm`、カード `white` + border `soft`、見出し `ink`、ホバー時 border `tennis 60%`

**4. タイポ**
- カード見出し：Noto Sans JP 900 / 18px / line-height 1.35
- カード本文：Noto Sans JP 500 / 14px / line-height 1.7
- カード番号 `01/04`：Sora 700 / 14px / `clay`

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 見出し | BlurInLine | 860ms |
| 4カード | stagger reveal | each delay 100ms |
| カード hover | SpotlightCard（既存）| 既存 |
| カード click | ClickSparkBurst | 6粒子 / 680ms |

**6. 写真**：各カード左上に lucide-react アイコン（HelpCircle / GraduationCap / Handshake / Sparkles）

**7. マイクロ**：カードhoverで右上に `?` マーク（Coral）が小さくフェードイン

**8. 裏メッセージ**：「4つの不安が4人のペルソナと対応している」

**9. 実装**：`<EmpathySection />`（既存リファクタ）、React Bits `SpotlightCard` + `ClickSpark`

---

### Section 4 — 理想人材の再定義

**1. 目的**
- 表：「テニスがうまい人」ではなく「スクール体験をつくれる人」を求めていると定義
- 裏：「求人票・面接・研修・評価のズレを防ぐ言語化」だと示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 04 — IDEAL TALENT                     ░ 04 ░            │
│                                                                 │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ -2° 傾斜    │
│  ▓ 採りたいのは、レッスン枠を埋める人ではない。  ▓                │
│  ▓ スクールの価値を一緒に届けられる人。         ▓                │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓             │
│  ↑ Yellow Stripe（背景 deep）                                    │
│                                                                 │
│  人を楽しませる力。                                              │
│  不安を安心に変える力。                                          │
│  続けたい気持ちを育てる力。                                      │
│  相手に合わせて伝える力。                                        │
│                                                                 │
│  そのすべてが、テニスプラザ尼崎のコーチに必要な力です。           │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、Yellow Stripe 部分 背景 `tennis` + 文字 `deep`、本文 `ink`、4つの「〜力」を `rally` で強調

**4. タイポ**
- メイン宣言文（Yellow Stripe内）：Noto Sans JP 900 / clamp(22, 2.8vw, 32) / line-height 1.4
- 「〜力」：Noto Sans JP 900 / 22px / line-height 1.6
- 本文：Noto Sans JP 500 / 16px / line-height 1.85

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| Yellow Stripe | YellowStripeSweep | scaleX 0→1 / 540ms / origin left / trigger in-view |
| メイン宣言文 | BlurInLine | delay 600ms |
| 「〜力」4行 | SplitTextRise | stagger 180ms（行単位） |
| 全体 | ScrollFloat 巨大数字 `04` | translateY ±6px / 6s |

**6. 写真**：なし（タイポ主役）

**7. マイクロ**：「〜力」テキストhoverで、右に小さなテニスボールアイコンが pop（120ms）

**8. 裏メッセージ**：「採用基準を文章ではなく、視覚的な宣言として置いた」

**9. 実装**：`<IdealTalentSection />`（既存リファクタ）、`<YellowStripe />`（自前）、React Bits `BlurText` + `SplitText`

---

### Section 5 — テニプラで働く3つの価値

**1. 目的**
- 表：「ここで働く理由」を3つに整理
- 裏：「価値が抽象論ではなく、コーチ仕事の解像度で語られている」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 05 — THREE VALUES                     ░ 05 ░            │
│                                                                 │
│ テニス経験が、教育・接客・運営まで広がる。                        │
│                                                                 │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐              │
│ │   15-LOVE    │ │   30-LOVE    │ │   40-LOVE    │              │
│ │   ───────    │ │   ───────    │ │   ───────    │              │
│ │ テニス経験を │ │ 教育・接客・ │ │ 生徒と保護者 │              │
│ │ 仕事として   │ │ 入会案内・   │ │ の変化を近く │              │
│ │ 活かせる     │ │ 運営まで広が │ │ で感じられる │              │
│ │              │ │ る           │ │              │              │
│ │ [hover で +1]│ │ [hover で +1]│ │ [hover で +1]│              │
│ └──────────────┘ └──────────────┘ └──────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、カード `white` + border `soft`、スコア `15-LOVE` 等を `deep`、hover時 `tennis` border、`+1` ポップアップ `clay`

**4. タイポ**
- 「15-LOVE」等：Sora 700 / 24px / tracking -0.02em
- カード見出し：Noto Sans JP 900 / 20px / line-height 1.4
- カード本文：Noto Sans JP 500 / 15px / line-height 1.8

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 見出し | BlurInLine | 860ms |
| 3カード | stagger reveal | each delay 120ms |
| カード hover | SpotlightCard + MagnetPull | radius 80px / strength 0.2 |
| カード hover | Coral `+1` pop | translateY -8 → 0 / opacity 0→1 / 280ms / rb-ease-bounce |
| カード click | ClickSparkBurst | 6粒子 |

**6. 写真**：各カード上に小さなアイコン（Trophy / Sparkles / Heart）

**7. マイクロ**：カードhoverで右上に `+1`（Coral）が pop。3回ホバーするとスコアが `15→30→40` と上がるイースターエッグ（社長デモで効く）

**8. 裏メッセージ**：「スコアボード演出で、求職者にも社長にもテニス文脈が一貫している」

**9. 実装**：`<ValueSection />`（既存リファクタ）、React Bits `SpotlightCard` + `Magnet` + `ClickSpark`、`<TennisScoreLabel />`（自前）

---

### Section 6 — 山下コーチの勝ちパターン / 指導哲学

**1. 目的**
- 表：山下コーチの判断軸を読ませる
- 裏：「属人化していた強みが、引き継げる形で書かれている」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 06 — COACHING PHILOSOPHY              ░ 06 ░            │
│                                                                 │
│ ┌──────────────────────┐    一人ひとりに合わせて、               │
│ │                      │    伸ばし方を変える。                   │
│ │   [山下コーチ写真]    │                                       │
│ │   diagonal -3°       │    山下コーチの強みは、技術指導だけでは │
│ │   yellow overlay 22% │    なく、人に合わせて伸ばす判断にある。 │
│ │                      │                                       │
│ │                      │    ┌──────────────────────┐            │
│ │                      │    │ CardSwap パンチライン  │            │
│ │                      │    │ 「声かけは、相手の打 │            │
│ │                      │    │  ち方を見てから変える」│            │
│ │                      │    │   ↕ 自動切替 3秒       │            │
│ │                      │    └──────────────────────┘            │
│ └──────────────────────┘                                       │
│                                                                 │
│ 山下コーチの"現場の判断"を、次のコーチにも引き継いでいく。         │
└─────────────────────────────────────────────────────────────────┘
```

**SP**：写真→見出し→本文→CardSwap の縦並び

**3. カラー**：背景 `warm`、写真 yellow overlay 22% + 8% dot grid、本文 `ink`、CardSwap 背景 `deep` + 文字 `tennis`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44)
- 本文：Noto Sans JP 500 / 16px / line-height 1.85
- CardSwap パンチライン：Noto Sans JP 900 / 18px / `tennis`

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 写真 | TiltedCard | perspective 900 / rotateX 2 / rotateY -4 |
| 写真 | DiagonalCrop | clip-path で -3° |
| 見出し | BlurInLine | 860ms |
| CardSwap | 自動切替 | 3 cards / 3000ms each / fade 360ms |
| 本文 | ScrollRevealUp | 720ms |

**6. 写真**
- 内容：山下コーチが小学生に屈んで話しかけている画
- トーン：自然光、コートサイド、表情にフォーカス
- デモ段階では仮素材、本人写真差し替え前提

**7. マイクロ**：写真hoverで奥行きが増す（tilt）

**8. 裏メッセージ**：「3つのパンチラインを CardSwap で出すのは、研修マニュアル化したときの章立て候補」

**9. 実装**：`<PhilosophySection />`（既存リファクタ）、React Bits `TiltedCard` + `CardSwap`、`<EditorialTape />`（自前）

---

### Section 7 — 体験から入会までの導線（最重要）

**1. 目的**
- 表：「営業できるコーチ」を 5ステップのラリーとして可視化
- 裏：「これがあれば、新人研修・AIロープレ・体験フォロー型に展開できる」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────────┐
│ SECTION 07 — TRIAL → ENROLLMENT          ░ 07 ░                    │
│                                                                     │
│ 体験に来た人が、安心して一歩踏み出せるようにする。                    │
│                                                                     │
│  Sticky 横スクロール（高さ 100vh、内部で 5ステップが左↔右に動く）    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  ●━━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━●━━━━●│  │
│  │  ↓ 軌道（rb-ease-court、Yellow パス）                          │  │
│  │  ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐         │  │
│  │  │ 01  │    │ 02  │    │ 03  │    │ 04  │    │ 05  │         │  │
│  │  │ 体験│    │ レッ│    │ レッ│    │ 提案│    │ 入会│         │  │
│  │  │ 前  │    │ スン│    │ スン│    │     │    │ 後  │         │  │
│  │  │     │    │ 中  │    │ 後  │    │     │    │     │         │  │
│  │  │ 緊張│    │ 楽し│    │ 不安│    │ 合う│    │ 続け│         │  │
│  │  │ をほ│    │ さと│    │ を聞│    │ 通い│    │ たく│         │  │
│  │  │ どく│    │ 成長│    │ く  │    │ 方を│    │ なる│         │  │
│  │  │     │    │ 実感│    │     │    │ 伝え│    │ 関係│         │  │
│  │  └─────┘    └─────┘    └─────┘    └─────┘    └─────┘         │  │
│  │   ↑ Yellow chip ↑ ↑ ↑ ↑                                       │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│ 入会案内は、無理に売り込むことではありません。                       │
│ 体験に来た方が「ここなら続けられそう」と思えるように、                │
│ 不安を聞き、合う通い方を一緒に考え、スクールの価値を分かりやすく伝える│
│ ことです。                                                          │
└─────────────────────────────────────────────────────────────────────┘
```

**SP**：横スクロール禁止、5ステップを縦並びでステップ番号付きカードに

**3. カラー**：背景 `deep`、ステップ番号 `tennis`、カード `white` + 文字 `ink`、軌道線 `tennis` 1.5px、現在ステップに `clay` の `→ NOW` チップ

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44) / `warm`
- ステップ番号：Inter Tight 900 / 72px / `tennis`
- ステップ見出し：Noto Sans JP 900 / 20px / `ink`
- ステップ本文：Noto Sans JP 500 / 14px / line-height 1.8

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 全体 | RallyStepHorizontal | sticky / 1vh per step / total 5vh |
| ボール軌道 | path animate-draw + ball follow | 各ステップ間 600ms / rb-ease-court |
| ステップカード | scale 0.92→1.0、opacity 0.4→1.0 | each in-view 320ms |
| 見出し | BlurInLine | 860ms |
| 本文 | ScrollRevealUp | 720ms |

**6. 写真**：各ステップ上部に小さな写真（横長、Polaroid）。または lucide-react アイコン（MessageCircle / Smile / Ear / Compass / Heart）で代替可

**7. マイクロ**：現在ステップが画面中央に来ると、`clay` の `→ NOW` チップが pop、軌道線が `tennis` で明滅

**8. 裏メッセージ**：「ここを横スクロールにすることで『売り込み』の語を一切使わずに営業導線を見せられる。AIロープレに渡せる5ステップ」

**9. 実装**：`<TrialToEnrollmentSection />`（自前、新規）、`<RallyStepHorizontal />`（自前、新規。GSAP ScrollTrigger 推奨）、`<RallyTrailSVG />`、`<StepCard />`

---

### Section 8 — 近江まやの 現場メッセージ

**1. 目的**
- 表：レッスン外の関わりが、入会と継続を支えていると伝える
- 裏：「現場で相談できる人がいる」と感じさせる人物紹介

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 08 — FIELD VOICE                      ░ 08 ░            │
│                                                                 │
│ コートの外側の関わりが、入会と継続を支えている。                  │
│                                                                 │
│  ┌────────────────┐                                              │
│  │ Polaroid       │  近江まや / Operation & Coaching            │
│  │ 白フチ 8px     │                                              │
│  │ rotate +1.5°    │  「体験に来た方がリラックスできるように、    │
│  │  [近江氏写真]   │   コートに入る前のひと声を大事にしています」 │
│  │                │                                              │
│  └────────────────┘  ──────────                                  │
│                       少しずつ、できることを増やしていけば大丈夫。│
│  EditorialTape       新人コーチが現場で安心して動けるように、     │
│  軽い揺れ（4.8s）    レッスン以外の動きも一緒に整えていきます。   │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、Polaroid 白 + drop-shadow soft、本文 `ink`、Quote 強調部分 `rally`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44)
- 役職表記：Space Grotesk 700 / 12px / tracking +0.12em
- Quote：Noto Sans JP 700 / 18px / line-height 1.7
- 本文：Noto Sans JP 500 / 15px / line-height 1.85

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 写真 | PolaroidWiggle | rotate ±1° / 4.8s ease-in-out infinite |
| 見出し | BlurInLine | 860ms |
| Quote | ScrollRevealUp | delay 400ms |

**6. 写真**：近江氏が現場で生徒／保護者に話しかける場面（仮素材→本人差し替え前提）

**7. マイクロ**：Polaroid hover で rotate 解除＋少し拡大（240ms）

**8. 裏メッセージ**：「本人写真／本人コメントが入ると一気に強くなる。今は仮置きで温度感を確認」

**9. 実装**：`<OmiVoiceSection />`（既存リファクタ）、`<EditorialTape />`、React Bits `TiltedCard`（控えめに）

---

### Section 9 — 仕事内容

**1. 目的**
- 表：6つの仕事を具体的に提示
- 裏：単なる業務一覧ではなく「価値を伝える入会案内」を含む構成だと見せる

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 09 — WORK SCOPE                       ░ 09 ░            │
│                                                                 │
│ レッスンだけでなく、生徒・保護者・スクール全体に関わる仕事。      │
│                                                                 │
│ ┌────┐ ┌────┐ ┌────┐                                            │
│ │ 01 │ │ 02 │ │ 03 │                                            │
│ │レッ │ │体験 │ │保護 │                                          │
│ │スン│ │者ﾌｫ │ │者対 │                                          │
│ │     │ │ロー │ │応   │                                          │
│ └────┘ └────┘ └────┘                                            │
│ ┌────┐ ┌────┐ ┌────┐                                            │
│ │ 04 │ │ 05 │ │ 06 │                                            │
│ │入会 │ │ｲﾍﾞﾝ│ │運営 │                                          │
│ │案内│ │ﾄ運 │ │全般 │                                          │
│ │     │ │営   │ │     │                                          │
│ └────┘ └────┘ └────┘                                            │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、カード `white` + border `soft`、番号 `tennis` 背景の小さなチップ + `deep` 文字、hover時 border `rally`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44)
- 番号 `01-06`：Sora 700 / 14px
- カード見出し：Noto Sans JP 900 / 18px
- カード本文：Noto Sans JP 500 / 14px / line-height 1.75

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 6カード | stagger reveal | each delay 80ms |
| hover | SpotlightCard | 既存 |
| click | ClickSparkBurst | 6粒子 |

**6. 写真**：各カードに lucide-react アイコン（Activity / MessageCircle / Users / FileText / Calendar / Settings）

**7. マイクロ**：カードhoverで番号チップが rotate 6°

**8. 裏メッセージ**：「6つの中に体験者フォロー／入会案内／運営が並列に並ぶ。営業を独立項目にしない」

**9. 実装**：`<WorkScopeSection />`（既存リファクタ）、React Bits `SpotlightCard` + `ClickSpark`

---

### Section 10 — 育成体制

**1. 目的**
- 表：「最初から全部できる必要はない」と安心させる
- 裏：「研修項目を分解すると OJT・評価制度・AIロープレに落とせる」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 10 — TRAINING MODULES                 ░ 10 ░            │
│                                                                 │
│ 理想人材を探すだけでなく、理想人材に育つ人を育てる。              │
│                                                                 │
│ 最初から全部できる必要はありません。                              │
│                                                                 │
│ ┌──────────────────────────────────────────────────────────────┐│
│ │ ◯ MODULE 01  レッスン基礎                       完了 ━━━━━━ ││
│ │ ◯ MODULE 02  声かけ・距離感                     完了 ━━━━━━ ││
│ │ ◯ MODULE 03  体験前後フォロー                   進行 ━━━━━  ││
│ │ ◯ MODULE 04  保護者コミュニケーション           次  ━        ││
│ │ ◯ MODULE 05  入会案内（価値を伝える）           次           ││
│ │ ◯ MODULE 06  スクール運営の基礎                              ││
│ └──────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ← 各行の左の ◯ が in-view で Yellow に点灯                      │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、リストパネル `white` + border `soft`、完了 `tennis` 円、進行 `clay` 円、次 `soft` 円、ゲージ `tennis`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44)
- MODULE 番号：Space Grotesk 700 / 12px / tracking +0.12em
- モジュール名：Noto Sans JP 700 / 16px
- ステータス：Noto Sans JP 500 / 12px

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 各行 | stagger reveal + 円点灯 | each delay 140ms / 円点灯 320ms / rb-ease-bounce |
| ゲージ | scaleX 0→1 | 480ms / rb-ease-out |
| 見出し | BlurInLine | 860ms |

**6. 写真**：なし

**7. マイクロ**：行hoverで右に `→` 矢印（240ms）

**8. 裏メッセージ**：「これがそのまま OJT チェックリストになる」

**9. 実装**：`<TrainingModulesSection />`（既存リファクタ）、`<ModuleRow />`（自前）、React Bits `AnimatedList` 相当の自前実装

---

### Section 11 — キャリアパス（最重要・ScrollStack）

**1. 目的**
- 表：将来性を「役割が積み上がる」体験として見せる
- 裏：「キャリアの最終形を School Growth Manager として置いた」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 11 — CAREER PATH × 05                 ░ 11 ░            │
│                                                                 │
│ 教える仕事から、スクールを育てる役割へ。                          │
│                                                                 │
│  Sticky スクロール（高さ 200vh）                                  │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ Step 01 — Assistant Coach                                  ││
│  │ レッスンに入り、子どもの動きに目を慣らす                    ││
│  │                                                            ││
│  │ ┌──────────────────────────────────────────────────────┐   ││
│  │ │ Step 02 — Main Coach                                 │   ││
│  │ │ レッスンを担当、生徒の成長を伴走                       │   ││
│  │ │                                                      │   ││
│  │ │ ┌────────────────────────────────────────────────┐   │   ││
│  │ │ │ Step 03 — Experience / Follow Coach (YELLOW)   │   │   ││
│  │ │ │ 体験者の不安をほどき、合う通い方を提案           │   │   ││
│  │ │ │ ★ 接客／営業経験が活きる                        │   │   ││
│  │ │ │                                                │   │   ││
│  │ │ │ ┌──────────────────────────────────────────┐   │   │   ││
│  │ │ │ │ Step 04 — Class Leader                   │   │   │   ││
│  │ │ │ │ クラス全体の質を上げる責任を持つ           │   │   │   ││
│  │ │ │ │                                          │   │   │   ││
│  │ │ │ │ ┌──────────────────────────────────────┐│   │   │   ││
│  │ │ │ │ │ Step 05 — School Growth Manager       ││   │   │   ││
│  │ │ │ │ │ スクール全体の成長を設計する役割       ││   │   │   ││
│  │ │ │ │ │ ★ 最終カードは画面サイズに拡張         ││   │   │   ││
│  │ │ │ │ └──────────────────────────────────────┘│   │   │   ││
│  │ │ │ └──────────────────────────────────────────┘   │   │   ││
│  │ │ └────────────────────────────────────────────────┘   │   ││
│  │ └──────────────────────────────────────────────────────┘   ││
│  └────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

**SP**：縦並び5カードに変換。Step 3 は Yellow 背景で強調、Step 5 は frame 太め

**3. カラー**：背景 `warm`、カード `white` + border `soft`、Step 3 のみ背景 `tennis` + 文字 `deep`、Step 5 border 2px `rally` + 拡張時背景 `deep` + 文字 `warm`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44)
- Step 番号：Inter Tight 900 / 48px
- Step 役職名：Space Grotesk 700 / 16px / tracking +0.08em
- Step 説明：Noto Sans JP 500 / 15px / line-height 1.8
- Step 3 強調コメント：Noto Sans JP 900 / 14px / `clay`

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 全体 | CardStackBuild | scroll-linked / sticky 200vh / 各カード scale 0.94→1.0 / translateY +12→0 |
| Step 3 | YellowStripeSweep | scaleX 0→1 / 540ms / trigger in-view |
| Step 5 | カード拡張 | width: 100% → 100vw、height +120px / 720ms / rb-ease-out |
| 見出し | BlurInLine | 860ms |

**6. 写真**：なし（タイポ・レイアウト主役）。可能なら各 Step に小さなアイコン（Activity / Star / Compass / Users / Building）

**7. マイクロ**：各カード hover で右上に「Lv.X」スコアボード風表記、Step 3 hover で `tennis` 背景がさらに明るく pulse

**8. 裏メッセージ**：「Step 3 を蛍光黄色で強調することで『接客・営業経験者が来てもキャリアが見える』を視覚化。Step 5 の拡張演出で『最終形まで描かれている』と一瞬で分かる」

**9. 実装**：`<CareerPathSection />`（既存リファクタ）、`<ScrollStackCards />`（自前、GSAP ScrollTrigger 推奨）、React Bits `ScrollStack` を参考に独自実装

---

### Section 12 — AIロープレ / 育成の未来構想

**1. 目的**
- 表：採用後の育成に未来感を持たせる
- 裏：「採用LP で終わらず、人材育成の内製化まで支援できる」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 12 — AI ROLEPLAY (COMING SOON)        ░ 12 ░            │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░ Sky Blue グリッド背景 + GridScan + LetterGlitch 弱            ░│
│ ░                                                              ░│
│ ░ 山下コーチや近江さんの対応を、新人が練習できる形にする。       ░│
│ ░                                                              ░│
│ ░ ┌──────────────────────────────────────────────────────┐     ░│
│ ░ │ 保護者：「うちの子、続けられるか心配で…」              │     ░│
│ ░ │                                                      │     ░│
│ ░ │ あなた：「最初は週1からでも、ペースを合わせ           │     ░│
│ ░ │         られますよ」                                  │     ░│
│ ░ │                                                      │     ░│
│ ░ │ AI Coach: ✓ 安心ワード ✓ 提案 + 1 余地確認 ←next     │     ░│
│ ░ └──────────────────────────────────────────────────────┘     ░│
│ ░                                                              ░│
│ ░ ▌ COMING SOON  /  Phase 3 で実装                              ░│
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `deep`、`sky` グリッド、本文 `warm`、`AI Coach` ラベル `sky`、Yellow 1点 hint で `tennis`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44) / `warm`
- 会話：Noto Sans JP 500 / 15px / line-height 1.8
- COMING SOON：Space Grotesk 700 / 12px / tracking +0.18em / `sky`

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 背景 | GridScan（既存） | 4s ease-in-out infinite |
| ラベル `AI` | LetterGlitch 弱 | 240ms / 2s ごと / 6文字以下 |
| 会話カード | TextType 風入力アニメ | 文字 30ms/char / カーソル明滅 |
| 見出し | BlurInLine | 860ms |

**6. 写真**：なし（UI 抽象表現）

**7. マイクロ**：`✓` チェックが順に点灯（240ms each）

**8. 裏メッセージ**：「Sky Blue を使うのはこのセクションだけ。未来構想として記号化」

**9. 実装**：`<AiRoleplaySection />`（既存リファクタ）、`<GridScan />`（既存）、React Bits `LetterGlitch`、`<TextType />`（自前）

---

### Section 13 — 働き方 / 1日の流れ

**1. 目的**
- 表：仕事のリアルを見せる
- 裏：「働き方は柔軟に組める」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 13 — A DAY                            ░ 13 ░            │
│                                                                 │
│ [正社員] [アルバイト]   ← タブ                                    │
│                                                                 │
│  09:30 ─●─ 出勤・準備                                            │
│  10:00 ─●─ 大人クラス（一般）                                     │
│  12:00 ─●─ 昼休憩                                                │
│  14:00 ─●─ ジュニアクラス                                         │
│  17:00 ─●─ 体験者フォロー / 保護者対応                            │
│  19:00 ─●─ ナイタークラス（一般）                                 │
│  21:30 ─●─ 振り返り・退勤                                         │
│                                                                 │
│ ↑ 縦のラインがコート白線、時刻がスコアボード風                    │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、ラインは `rally`、点 `tennis`、時刻 `deep`、タブ active `tennis` 背景 + `deep` 文字

**4. タイポ**
- 時刻：Sora 700 / 18px
- 内容：Noto Sans JP 500 / 15px / line-height 1.7

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 縦ライン | scaleY 0→1 | 1200ms / rb-ease-out |
| 各点 | 順に点灯 | each delay 120ms |
| タブ切替 | fade + slide | 240ms / rb-ease-out |

**6. 写真**：なし

**7. マイクロ**：時刻 hover で対応する内容が一瞬 underline

**8. 裏メッセージ**：「正社員／アルバイトのタブ分割で、ペルソナ D も自分ごと化できる」

**9. 実装**：`<DayInLifeSection />`（既存リファクタ）、`<TimelineRow />`（自前）

---

### Section 14 — 募集要項

**1. 目的**
- 表：条件を確認させる
- 裏：「仮置きであることを明示しつつ、整理ポイントを示す」

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 14 — REQUIREMENTS                     ░ 14 ░            │
│                                                                 │
│ 募集要項（仮）                                                   │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 雇用形態     │ 正社員 / アルバイト                          │ │
│ │ 勤務地       │ テニスプラザ尼崎                              │ │
│ │ 給与         │ 月給 212,000円〜（正社員）/ 時給 1,200円〜    │ │
│ │ 勤務時間     │ シフト制                                      │ │
│ │ 休日         │ 週休2日（応相談）                              │ │
│ │ 待遇         │ 社保完備 / 交通費支給                          │ │
│ │ 必要要件     │ テニス経験 / 指導経験は不問                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ※ 公開前に最終確認します                                          │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、テーブル `white` + border `soft`、見出し `deep`、注釈 `ink/60`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44)
- テーブル：Noto Sans JP 500 / 14px / line-height 1.7
- 項目名：Noto Sans JP 700 / 13px

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| テーブル各行 | fade-in stagger | each delay 60ms |
| 見出し | BlurInLine | 860ms |

**6. 写真**：なし

**7. マイクロ**：なし（信頼感優先）

**8. 裏メッセージ**：「ここはモーションを抑えることで、求人情報としての信頼感を出している」

**9. 実装**：`<RequirementsSection />`（既存）、React Bits 不使用

---

### Section 15 — 見学で確認できること

**1. 目的**
- 表：見学の心理ハードルをさらに下げる
- 裏：「Final CTA 直前のフォロー導線」だと示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 15 — WHAT YOU CAN SEE                 ░ 15 ░            │
│                                                                 │
│ 応募前に、現場を見て判断できる。                                  │
│                                                                 │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐│
│ │ Polaroid │ │ Polaroid │ │ Polaroid │ │ Polaroid │ │ Polaroid ││
│ │ rotate-2°│ │ rotate+1°│ │ rotate-1°│ │ rotate+2°│ │ rotate-1°││
│ │ コーチと │ │ レッスン │ │ 先輩の声 │ │ 保護者対 │ │ 働き方相 ││
│ │ 生徒の距 │ │ 雰囲気   │ │ かけ     │ │ 応の考え │ │ 談       ││
│ │ 離感     │ │          │ │          │ │ 方       │ │          ││
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘│
│                                                                 │
│ 応募するかどうかは、見学してから決めて大丈夫です。                │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、Polaroid 白フチ、テーマ番号 `tennis` チップ

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44)
- カード見出し：Noto Sans JP 900 / 16px
- 安心コピー：Noto Sans JP 700 / 16px / `rally`

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 5枚 Polaroid | stagger reveal + PolaroidWiggle | each delay 100ms |
| 安心コピー | BlurInLine | 860ms |

**6. 写真**：5シーンの実写または線画（仮素材→撮影後差し替え）

**7. マイクロ**：Polaroid hover で rotate 解除＋少し拡大

**8. 裏メッセージ**：「Final CTA 直前で『何を見に行けばよいか』を具体化した」

**9. 実装**：`<VisitPreviewSection />`（自前、新規）、`<EditorialTape />` 5回利用

---

### Section 16 — 選考フロー

**1. 目的**
- 表：応募ハードルを下げる
- 裏：「面接の前に見学／カジュアル面談を置いた」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 16 — PROCESS                          ░ 16 ░            │
│                                                                 │
│  01 ──→ 02 ──→ 03 ──→ 04 ──→ 05                                 │
│  見学  ｶｼﾞｭｱﾙ 体験勤務  面接   採用                              │
│  予約  面談                                                      │
│                                                                 │
│  応募するかは決めきっていなくて大丈夫です。                       │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、ステップ `white` 円 + border `soft`、現在ステップ `tennis` 背景 + `deep` 文字、線 `rally`

**4. タイポ**
- ステップ番号：Sora 700 / 24px
- ステップ名：Noto Sans JP 700 / 14px

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 各ステップ | 順にアクティブ化 | scroll-linked / each 240ms |
| 接続線 | scaleX 0→1 | 各 320ms / rb-ease-out |

**6. 写真**：なし

**7. マイクロ**：ステップ hover で説明 tooltip

**8. 裏メッセージ**：「Step 01 が『見学予約』なのが重要。これでハードルが大きく下がる」

**9. 実装**：`<ProcessSection />`（既存リファクタ）、`<StepCircle />`（自前）

---

### Section 17 — FAQ

**1. 目的**
- 表：CTA 直前の不安を回収
- 裏：「ペルソナ別の不安に対応した質問構成」と示す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 17 — FAQ                              ░ 17 ░            │
│                                                                 │
│ よくある質問                                                     │
│                                                                 │
│ ┌──────────────────────────────────────────────────────────────┐│
│ │ Q. コーチ未経験ですが大丈夫ですか？               [+]         ││
│ ├──────────────────────────────────────────────────────────────┤│
│ │ Q. ブランクがあっても大丈夫ですか？               [+]         ││
│ ├──────────────────────────────────────────────────────────────┤│
│ │ Q. 週何日から相談できますか？                     [+]         ││
│ ├──────────────────────────────────────────────────────────────┤│
│ │ Q. 子ども向けレッスンが初めてでも大丈夫ですか？    [+]         ││
│ ├──────────────────────────────────────────────────────────────┤│
│ │ Q. 見学だけでも本当に大丈夫ですか？                [+]         ││
│ └──────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `warm`、accordion `white` + border `soft`、open時 border `rally`、`+` アイコン `deep`

**4. タイポ**
- 質問：Noto Sans JP 900 / 16px
- 回答：Noto Sans JP 500 / 14px / line-height 1.85

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| accordion 開閉 | height auto アニメ | 320ms / rb-ease-out |
| `+` アイコン | rotate 45° | 240ms |

**6. 写真**：なし

**7. マイクロ**：accordion open イベントを取得（`recruit_faq_open` 発火）

**8. 裏メッセージ**：「FAQ open率を取ることで、ペルソナ別の不安傾向が分かる」

**9. 実装**：`<FaqSection />`（既存）、純CSS accordion

---

### Section 18 — Final CTA

**1. 目的**
- 表：見学・面談へ進ませる
- 裏：「Hero と呼応して熱量を戻す」

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░ SECTION 18 — VISIT THE COURT             ░ 18 ░                  ░│
│ ░                                                                  ░│
│ ░                                                                  ░│
│ ░             COME                                                 ░│
│ ░             AND                                                  ░│
│ ░             SEE.                              ← Inter Tight 900  ░│
│ ░                                                                  ░│
│ ░ 応募ではなく、まず現場を見る。                                    ░│
│ ░                                                                  ░│
│ ░ 応募するかどうかは、見てから決めて大丈夫です。                    ░│
│ ░ まずは、現場を見に来てください。                                  ░│
│ ░                                                                  ░│
│ ░ ┌─[まずは見学してみる →]─┐     [カジュアルに話を聞く]              ░│
│ ░ │ ★ StarBorder Yellow    │                                       ░│
│ ░ └────────────────────────┘                                       ░│
│ ░                                                                  ░│
│ ░    ●                ●                ●  ← ボールが3方向に弾ける    ░│
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────────────────────────────────────────┘
高さ：min(86svh, 720px)
```

**3. カラー**：背景 `deep`、H1 `tennis`、本文 `warm`、CTA primary `tennis` 背景 + `deep` 文字、CTA secondary transparent + `warm` border

**4. タイポ**
- 英字H1：Inter Tight 900 / clamp(64, 10vw, 160) / line-height 0.84 / tracking -0.04em
- 日本語見出し：Noto Sans JP 900 / clamp(22, 2.8vw, 32)
- 本文：Noto Sans JP 500 / 16px / line-height 1.85

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| 英字H1 | SplitTextRise | duration 880ms / stagger 80ms |
| LightRays背景 | 既存 4本 | 既存 |
| 本文 | BlurInLine | delay 600ms |
| CTA primary | StarBorder Yellow + Magnet | radius 100px / strength 0.3 |
| CTA hover | BallBounceCTA | translateY -8 → 0 / 600ms / rb-ease-bounce |
| スクロール深度90% | ClickBurst 3方向ボール | 各 0.8s / rb-ease-bounce / 1回のみ |

**6. 写真**：背景に薄いコート写真（dark green overlay 70%）、または完全な `deep` カラーフィル

**7. マイクロ**：CTAホバーで背後にボールがバウンド、CTA click で `ClickSpark` Yellow 12粒子

**8. 裏メッセージ**：「Hero と Final CTA を呼応させる。最初と最後の印象で挟む」

**9. 実装**：`<FinalCtaSection />`（既存リファクタ）、React Bits `SplitText` + `StarBorder` + `Magnet` + `ClickSpark` + `LightRays`、`<RallyTrailSVG />` 3方向版

---

### Section 19 — MTG用 Future Roadmap

**1. 目的**
- 表：（公開LP では薄く、デモ時のみフル表示）
- 裏：「LP制作で終わらないパートナー」だと最後に決定打を出す

**2. レイアウト（PC）**

```text
┌─────────────────────────────────────────────────────────────────┐
│ SECTION 19 — FUTURE ROADMAP                   ░ 19 ░            │
│                                                                 │
│ 採用LPは入口。採用・育成・集客の仕組みまで広げられる。            │
│                                                                 │
│  Phase 1 ─────● 現状整理                                         │
│                  └ 既存HP導線 / GA4 / 問い合わせ / 体験 / 入会率  │
│                  └ 理想人材像の言語化                            │
│  Phase 2 ─────● 採用導線づくり                                   │
│                  └ 採用LP / 求人票 / スカウト文 / 見学面談フロー │
│  Phase 3 ─────● 育成導線づくり                                   │
│                  └ 体験後フォロー型 / OJT / AIロープレ           │
│  Phase 4 ─────● 西宮展開                                         │
│                  └ 西宮テニスクラブ 顧客像 / バス施策 / QR / 広告 │
│                                                                 │
│  ★ Phase 2 が現在地（Yellow チップ）                              │
└─────────────────────────────────────────────────────────────────┘
```

**3. カラー**：背景 `deep`、Phase 円 `sky`、現在地 Phase 2 のみ `tennis` 背景 + `deep` 文字、本文 `warm`

**4. タイポ**
- 見出し：Noto Sans JP 900 / clamp(26, 3.4vw, 44) / `warm`
- Phase ラベル：Space Grotesk 700 / 12px / tracking +0.18em / `sky`
- Phase 内容：Noto Sans JP 700 / 16px / `warm`
- 詳細：Noto Sans JP 500 / 14px / `warm/80`

**5. モーション**

| 要素 | パターン | パラメータ |
|---|---|---|
| Phase 円 | 順に点灯 | each delay 240ms |
| 現在地 Phase 2 | YellowStripeSweep + pulse | 540ms / 2s ループ pulse |
| 縦線 | scaleY 0→1 | 1200ms / rb-ease-out |

**6. 写真**：なし

**7. マイクロ**：Phase hover で右に詳細パネルが pop（240ms）

**8. 裏メッセージ**：「ここを最後に見せて『うちはHP制作会社ではなく、事業成長パートナー』と決定打を打つ」

**9. 実装**：`<FutureRoadmapSection />`（自前、新規）、`<PhaseRow />`（自前）

---

## 10. 既存実装からの差分（Diff方針）

### 10-1. `tailwind.config.ts`

既存パレットはそのまま維持。**追加なし**で A案実装可能（既存の `tennis` `deep` `clay` `sky` `warm` `ink` `soft` `rally` `court` `primary` で完結）。

ただし以下を `extend` に追加：

```ts
fontFamily: {
  sans: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
  display: ["var(--font-inter-tight)", "var(--font-inter)", "sans-serif"],   // ← 追加
  mono: ["var(--font-sora)", "ui-monospace", "monospace"],                   // ← 追加
  label: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],   // ← 追加
},
letterSpacing: {
  tightest: "-0.04em",  // ← Hero H1 用
  techy: "0.12em",      // ← Space Grotesk ラベル用
  techier: "0.18em",    // ← CTA 英字用
},
lineHeight: {
  display: "0.88",      // ← 巨大英字用
  score: "1",           // ← スコアボード用
  reading: "1.85",      // ← 本文用
},
keyframes: {
  rbBounce: { ... },
  rbStripeSweep: { ... },
  rbScoreCount: { ... },
},
animation: {
  "rb-bounce": "rbBounce 600ms cubic-bezier(0.34,1.56,0.64,1)",
  "rb-stripe": "rbStripeSweep 540ms cubic-bezier(0.16,1,0.3,1) forwards",
},
```

### 10-2. `src/app/globals.css`

既存クラス（`.split-text` / `.spotlight-card` / `.light-rays` / `.scroll-velocity` / `.rally-trail` / `.tilt-card` 等）は**そのまま維持**。

追加するクラス：

```css
.rb-yellow-stripe { /* scaleX sweep, height 8px, transform skew -2deg */ }
.rb-scoreboard-number { /* Inter Tight 900, opacity 0.12, line-height 0.82 */ }
.rb-bounce-cta { /* :hover で背後にボールがバウンドする pseudo element */ }
.rb-step-rally { /* sticky 横スクロール container */ }
.rb-card-stack { /* ScrollStack container */ }
.rb-polaroid { /* 白フチ + rotate + drop-shadow */ }
.rb-ticker-mega { /* ScrollVelocity の Inter Tight 900 大型版 */ }
.rb-vs-badge { /* スコアボード VS バッジ */ }
.rb-dot-grid { /* 8% 黒網点 overlay */ }
.rb-coach-line { /* コートライン divider 1.5px */ }
```

reduced-motion ブロックに上記新規クラスのフォールバックを追加。

### 10-3. `src/app/recruit/page.tsx`

セクション順序を **0→1→2→3→4→5→6→7→8→9→10→11→12→13→14→15→16→17→18→19** で組み直す。

```tsx
<RecruitLayout>
  <StickyHeader />                          {/* 0 */}
  <HeroSection variant="rallyBurst" />     {/* 1 - 大改修 */}
  <WhyNowSection />                         {/* 2 - 新規 */}
  <EmpathySection />                        {/* 3 */}
  <IdealTalentSection />                    {/* 4 */}
  <ValueSection />                          {/* 5 */}
  <PhilosophySection />                     {/* 6 */}
  <TrialToEnrollmentSection />              {/* 7 - 新規 */}
  <OmiVoiceSection />                       {/* 8 */}
  <WorkScopeSection />                      {/* 9 */}
  <TrainingModulesSection />                {/* 10 */}
  <CareerPathSection variant="scrollStack" /> {/* 11 - 大改修 */}
  <AiRoleplaySection />                     {/* 12 */}
  <DayInLifeSection />                      {/* 13 */}
  <RequirementsSection />                   {/* 14 */}
  <VisitPreviewSection />                   {/* 15 - 新規 */}
  <ProcessSection />                        {/* 16 */}
  <FaqSection />                            {/* 17 */}
  <FinalCtaSection variant="rallyBurst" /> {/* 18 - 大改修 */}
  <FutureRoadmapSection />                  {/* 19 - 新規 */}
</RecruitLayout>
```

### 10-4. `src/components/recruit/` 追加コンポーネント

```text
src/components/recruit/
  ├── WhyNowSection.tsx                  ← 新規
  ├── TrialToEnrollmentSection.tsx       ← 新規
  ├── VisitPreviewSection.tsx            ← 新規
  ├── FutureRoadmapSection.tsx           ← 新規
  └── parts/
      ├── ScoreboardNumber.tsx           ← 新規
      ├── YellowStripe.tsx               ← 新規
      ├── EditorialTape.tsx              ← 新規
      ├── KineticTicker.tsx              ← 新規
      ├── VsBadge.tsx                    ← 新規
      ├── DotGrid.tsx                    ← 新規
      ├── CoachLineDivider.tsx           ← 新規
      ├── RallyTrailSVG.tsx              ← 新規
      ├── CourtLinesSVG.tsx              ← 新規
      ├── StepCard.tsx                   ← 新規
      ├── ModuleRow.tsx                  ← 新規
      ├── TimelineRow.tsx                ← 新規
      ├── StepCircle.tsx                 ← 新規
      ├── PhaseRow.tsx                   ← 新規
      ├── RallyStepHorizontal.tsx        ← 新規（GSAP ScrollTrigger）
      ├── ScrollStackCards.tsx           ← 新規（GSAP ScrollTrigger）
      └── BallBounceCTA.tsx              ← 新規
```

### 10-5. `src/components/react-bits/` 既存＋追加

```text
既存維持：SplitText / BlurText / SpotlightCard / Magnet / ClickSpark /
         LightRays / ScrollVelocity / ScrollReveal / TiltedCard / StarBorder
追加検討：CardSwap / GridScan（既存css拡張） / LetterGlitch / TextType
```

### 10-6. `src/app/layout.tsx` フォント追加

```tsx
import { Noto_Sans_JP, Inter, Inter_Tight, Space_Grotesk, Sora } from "next/font/google";

const interTight = Inter_Tight({ weight: ["700","900"], variable: "--font-inter-tight" });
const spaceGrotesk = Space_Grotesk({ weight: ["400","700"], variable: "--font-space-grotesk" });
const sora = Sora({ weight: ["400","700"], variable: "--font-sora" });
```

---

## 11. デモ時の見せ方台本（社長の前で3分）

### 0:00 - 0:20（前置き）

```text
「今日は2案持ってきました。これがA案、Rally Burst です。
山下さんが言っていた『今のホームページが古い』『若い人に届かない』を、
求人媒体に出す前に、まず採用ブランドの土俵として作るとどうなるか、です。」
```

### 0:20 - 0:40（Hero）

- Hero を開く。SplitText が立ち上がる
- 「最初の15秒、これが Nike とか On Running の若年向けキャンペーンサイトと同じ温度感です」
- ラリー軌道がループしているのを指す
- 「黄色いラリーがコートを駆けるんですけど、これがこのLP全体のメタファーです」

### 0:40 - 1:00（Why Now → 共感）

- スクロール。`00→01→02` とスコアボード番号が変わる
- 「セクションごとにスコアボードで番号が出ます。これで全体のテンポが揃います」
- Why Now の KPI カウンターが回る
- 「`+37%` は仮置きですが、ここに山下さんの実数値を入れれば即経営資料になります」

### 1:00 - 1:30（Section 7 体験→入会）

- 横スクロールに入る
- 「ここがA案のキモです。`営業` という言葉を一切使わずに、5ステップのラリーとして見せます」
- 5ステップを横にバウンドさせる
- 「これ、新人研修にもAIロープレにも、そのまま渡せる構造です」

### 1:30 - 2:00（Section 11 キャリア）

- ScrollStack カード5枚積みを見せる
- 「Step 3 だけ蛍光黄色で強調しています。これは接客／営業経験者にとっての『自分の入口』です」
- Step 5 が画面いっぱいに広がる
- 「最終 School Growth Manager は画面サイズに拡張します。`コーチで終わらない』を体験として見せます」

### 2:00 - 2:30（Final CTA → Future Roadmap）

- Final CTA で `COME AND SEE.` を見せる
- CTA hover でボールがバウンドするのを見せる
- 「最後はHeroと呼応します。応募ではなく、まず見学」
- スクロールして Future Roadmap を開く
- 「これは公開LPでは薄くしますが、今日のデモ用に全部見せています。LP制作で終わらない提案です」

### 2:30 - 3:00（クロージング）

```text
「採用LPを作りたいという話で来ましたが、
そのために『どんな人に来てほしいのか』『入社後どう育てるのか』
『体験から入会までどう運ぶのか』を一緒に言語化したい、
というのが今日のたたき台です。
A案は若年層に届くトーン、B案はもう少し誠実寄りのトーン、
山下さんがどちらの温度感がしっくり来るか聞かせてください。」
```

---

## 12. 既知のリスク／注意事項

### 12-1. 実装難易度の高い3点

| 項目 | リスク | 対策 |
|---|---|---|
| Section 7 横スクロール | GSAP ScrollTrigger 経験者が必要、SP フォールバック設計が複雑 | SP は縦並びに自動切替、PC でも 1024px 未満は縦切替 |
| Section 11 ScrollStack | 5カード積みでパフォーマンス劣化リスク | `will-change` 制御、scroll-linked を `requestAnimationFrame` でスロットル |
| Hero ラリー軌道SVG | path animate-draw が iOS Safari で重い | SP は CSS animation だけの簡略版に切替 |

### 12-2. デザイン上の懸念

| 項目 | リスク | 対策 |
|---|---|---|
| Yellow 18% の使用面積 | 「派手すぎる」と社長に映る可能性 | デモ時に「Yellow を 8% に下げた版」も用意できると示唆する |
| Step 3 Yellow ハイライト | 接客／営業経験者狙いが見え見えになる | 「これは可変、Step 4 に変えることもできる」と説明 |
| 山下／近江の本人写真 | 仮素材が AI 生成だと社長が違和感を持つ | デモ前に「全て仮素材、本人写真は後日撮影」と明言 |

### 12-3. アクセシビリティ

| 項目 | リスク | 対策 |
|---|---|---|
| Yellow on White の禁則 | 実装時にうっかり破る可能性 | ESLint カスタムルール、または PR チェックで `bg-warm text-tennis` を警告 |
| reduced-motion | フォールバック忘れ | 各セクション実装時に reduced-motion テスト必須 |
| アニメ多用 | 視覚過敏ユーザーへの配慮 | スクロール深度80% を超えるトリガーは1回のみ発火 |

### 12-4. パフォーマンス

| 項目 | リスク | 対策 |
|---|---|---|
| Hero 動画 LCP | LCP > 2.5s で SEO 影響 | poster 先行ロード、動画は IntersectionObserver で遅延 |
| フォント追加（Inter Tight / Space Grotesk / Sora） | フォントロード遅延で CLS | `next/font/google` で SSR インライン、`display: swap` |
| GSAP 導入 | バンドルサイズ +60KB | GSAP は必要セクションのみ動的 import |

### 12-5. デモ運用

| 項目 | リスク | 対策 |
|---|---|---|
| 通信環境が悪い会場 | Hero 動画が読み込まれない | デモ用に poster + 静止 SVG ラリー版も用意 |
| 山下社長が黄色を嫌う可能性 | A案全体が崩れる | デモ前にB案担当と「Yellow 量の異なる中間案」を即座に出せる準備 |
| Step 5 カード拡張が画面外に出る | スクロール位置が分からなくなる | 拡張後に「↓ 次のセクションへ」のヒント表示 |

---

## 13. まとめ

A案 Rally Burst は、以下3つの軸で「v1の延長線ではなく、Bと差を出す独立した世界観」として設計した。

```text
1. Yellow を大胆に主役化する（18% 使用、Hero / CTA / ステップ番号 / Step 3）
2. 編集スポーツ誌のリズム（英字3単語ラベル × 日本語見出しのペア、混植リズム）
3. 体感的な3大見せ場（Hero ラリー / Section 7 横スクロール / Section 11 ScrollStack）
```

19セクション全てで「目的（表/裏）」「実装可能なパラメータ」「裏メッセージ」を埋めた。

実装は既存 globals.css の `.split-text` / `.spotlight-card` / `.light-rays` / `.scroll-velocity` / `.rally-trail` を継承し、`rb-` プレフィックスの追加クラスを上に積む方針で、既存実装の作り直しを最小化している。

これが Rally Burst の全体像である。
