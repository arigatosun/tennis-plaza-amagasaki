# テニスプラザ尼崎 採用LP ビジュアル設計 A/B 比較 & 提案サマリ

- 作成日：2026-05-24
- 目的：来週の山下社長への提案デモで、A案（Rally Burst）／B案（Court Editorial）を並べて見せて方向決めを取りに行くための1枚物
- 推奨閲覧者：アリガトサン社内（吉川／実装担当／デザイン）、提案当日に同席する全員
- 参照ファイル：
  - `tennis_plaza_recruit_lp_section_restructure_plan.md`（19セクション再構成）
  - `tennis_plaza_recruit_lp_visual_design_variant_A.md`（A案フル仕様 / 1780行）
  - `tennis_plaza_recruit_lp_visual_design_variant_B.md`（B案フル仕様 / 1344行）

---

## 0. 30秒サマリ

```text
A案：Rally Burst — 若年層に刺す、エネルギー型スポーツブランドLP
       Yellow主役 (面積18%) × Inter Tight 900 × ブロークン斜めグリッド
       「採用ブランドを"今っぽく"した。20代に届く土俵を作った」

B案：Court Editorial — 大人と社長に刺す、編集ジャーナル型LP
       Deep Green + Coral差し色 × Fraunces Italic × マガジン12カラム
       「採用ブランドが大人として独立。家族や保護者にも勧められる」

両案とも、19セクション再構成案に完全準拠 / 既存 globals.css を継承拡張 /
プレイフル要素を含む / prefers-reduced-motion 対応 / 実装可能粒度まで仕様化済み。
```

提案の出し方は **「2案見せて社長に選ばせる」** を推奨。理由は §7 参照。

---

## 1. A vs B 早見表（社長提案時の "正解は2つある" メッセージ）

| 観点 | A：Rally Burst | B：Court Editorial |
|---|---|---|
| **一言で** | スニーカーブランドの採用キャンペーン | スポーツ雑誌の特集記事 |
| **第一印象** | 「これ求人ページじゃない、ブランドだ」 | 「これ本だ、品がある」 |
| **想定ベンチマーク** | Nike SB / On Running / Patta / F1 DTS | Number / Racquet Magazine / The Players' Tribune / Off-White Mag |
| **主役色** | Tennis Yellow `#D9FF43`（面積18%） | Deep Court Green `#0B3B2E` + Warm White（白60%） |
| **差し色** | Clay Coral `#FF7A59`（スコアボード `+1`） | Clay Coral `#FF7A59`（引用記号・章番号） |
| **黄色の使い方** | **面で使う**（CTA、Hero、Step3、ストライプ） | **線で使う**（CTAアンダーバー1px、見学chipのみ） |
| **メイン書体（英）** | Inter Tight Black 900 + Space Grotesk 700 | Fraunces Italic 600 + Inter 400/500 |
| **メイン書体（和）** | Noto Sans JP Black 900 | Noto Serif JP 600 + Noto Sans JP 400 |
| **モノスペース** | Sora 700（スコアボード） | JetBrains Mono 400（章番号 `№`） |
| **角丸** | 4px + CTAだけpill | 4px（pillすら使わない） |
| **グリッド** | 12カラム + 一部 -3°〜+3° 傾き（Broken） | 12カラム + 1080px width + 余白広め（Magazine） |
| **写真処理** | Yellow Overlay+網点 / 斜めクロップ / Polaroid | B&W寄り Full-bleed / Coral正方枠 / ポートレート細罫 |
| **モーション強度** | 強（Hero 5/5、CTA 5/5、Career 5/5） | 控（Hero 3/5、Final CTA 2/5、ほとんど 1-2/5） |
| **モーション主役** | SplitText / ScrollVelocity / Magnet / ClickSpark / RallyTrail | BlurText / TiltedCard / ScrollFloat / SVG stroke draw |
| **プレイフル要素** | 大胆（ボールバウンド、`+1`ポップ、ラリー軌道） | 控えめ（手書き✓、FAQのテニスボール、引用4deg回転） |
| **第一ペルソナ** | A（テニス経験/コーチ未経験 20-30代）× D（学生/アルバイト） | B（コーチ経験者）× C（接客営業経験者）× 社長/保護者 |
| **裏メッセージの強さ** | 「採用ブランドを今っぽく」 | 「採用ブランドが大人として独立。HP/西宮LPに転用可」 |
| **追加で必要なフォント** | Inter Tight + Space Grotesk + Sora | Fraunces + Noto Serif JP + JetBrains Mono |
| **実装コスト（v1からの追加）** | 中〜大（CSS追加 `rb-*` クラス 12-15個 / SVG 5本 / 横スクロールRallyステップ） | 中（CSS追加 `--b-*` クラス 8-10個 / 章扉3か所 / 手書きSVG 5本） |
| **デモ映え** | ★★★★★（スクロールが画になる） | ★★★★☆（写真と引用が刺さる） |
| **読みやすさ（長文）** | ★★★☆☆（密度高い） | ★★★★★（行間1.95 / AAA） |
| **転用余地** | スカウト文・SNS広告クリエイティブ | HP本体・西宮テニスクラブLP・ジュニア保護者LP |
| **想定リスク** | 黄色18%が社長に「派手すぎる」と映る可能性 | Fraunces+Noto Serif JP追加でLCP劣化リスク（subset/preloadで緩和） |

---

## 2. 構造的な決定的違い（5つ）

### 違い 1：黄色の役割が真逆

```text
A：Yellow = 主役。CTA面・Hero軌道・Step3背景・斜めストライプで「画面の中心」を作る。
B：Yellow = 栞。CTA下の1pxアンダーバーと、見学chipの内側1pxだけ。「儀礼的な存在」。
```

これがLP全体のエネルギー量を決める。社長の好みが「派手 / 落ち着き」のどちらに寄るかで即決できる軸。

### 違い 2：書体の主役（セリフ vs サンセリフ）

```text
A：英ディスプレイ = Inter Tight 900（直線的・スポーツブランド系）
B：英ディスプレイ = Fraunces Italic 600（セミセリフ・エディトリアル系）

A：和見出し = Noto Sans JP 900（強くて速い）
B：和見出し = Noto Serif JP 600（深くて静か）
```

Bの「Italic + Serif」が一発で品を作る。Aの「Black sans + Black sans」が一発でエネルギーを作る。

### 違い 3：Heroの組み方

```text
A：フルブリード写真 + Yellow巨大数字 + Yellow ラリー軌道 SVG + 流れる英字ティッカー
    → 10秒で「ブランドだ」と分かる。本文は読みづらくない。

B：左大判B&W写真 + 右に縦組み気味の H1（Noto Serif JP + Fraunces Italic）+ 小さなCTA
    → 10秒で「読み物だ」と分かる。本文を読みたくなる。
```

### 違い 4：章扉ページの有無

```text
A：章扉なし。代わりに各セクション左上に「巨大スコアボード番号 `00/19`」を薄く敷く。
B：Why Now / 体験〜入会 / Future Roadmap の3か所に「章扉ページ」を1ページ挿入。
    縦線+章番号+リード+全幅写真。本としての読書リズムを作る。
```

### 違い 5：Career（Section 11）の見せ方

```text
A：ScrollStack でカード5枚が積み上がる。Step 3 は Yellow 蛍光ハイライト。
    最終 School Growth Manager のカードが画面サイズに拡張する演出。
B：紙片が縦に積まれた静的レイアウト。Step 3 は Coral インライン蛍光ペン風。
    最終ステップは見開きの "Editor's Note" として大きく置く。
```

---

## 3. セクション別 A vs B 早見表（19セクション×差分のみ）

両案とも19セクション完全網羅。差分のあるところだけ抜粋する。

| § | セクション | A：Rally Burst | B：Court Editorial |
|---:|---|---|---|
| 0 | Sticky Header | 白半透明+blur / CTA に StarBorder Yellow / ホバーで磁石 | Hairline 1px罫線 / ナビhoverでItalic化 / フォリオ `№` |
| 1 | Hero | フルブリード+Yellow巨大数字+ラリー軌道+ティッカー | 左B&W写真+右縦組みH1+Fraunces Italic+小さなCTA |
| 2 | Why Now | ScrollFloat巨大数字+カウンター | **章扉ページ1枚**（縦線+章番号+全幅B&W写真） |
| 3 | 共感 | SpotlightCard+ClickSpark | 白カード+細罫線+hoverでCoralアンダーライン |
| 4 | 理想人材 | BlurText強調+Yellowストライプ斜め走査 | Quote罫線+Fraunces Italicの大きな引用 |
| 5 | 3つの価値 | SpotlightCard+Magnet+Coral `+1`ポップアップ | 正方形Coral枠の3カード+番号フォリオ |
| 6 | 山下哲学 | CardSwap×3場面+ TiltedCard | 大判B&Wポートレート+本文右寄せ+Coral署名SVG |
| 7 | 体験→入会 | **横スクロール「ラリー往復ステップ」**（左→右→左） | **章扉ページ**+ 垂直タイムライン+ 手書き①〜⑤がフェードイン |
| 8 | 近江メッセージ | Polaroid写真+ TiltedCard+ CardSwap | ポートレート細罫線+ Quote罫+ 手書き署名 |
| 9 | 仕事内容 | 6カード SpotlightCard+ ClickSpark | 1:1 Coral枠の6カード+ Inter small caps ラベル |
| 10 | 育成体制 | AnimatedList+ Yellow チェック点灯 | 罫線で囲った Training Modules+ 手書き✓ |
| 11 | キャリア | **ScrollStack** 5枚積み+ Step3 Yellow背景+ 最終カード拡張 | 紙片積み縦並び+ Step3 Coral蛍光+ 最終 Editor's Note 拡大 |
| 12 | AIロープレ | GridScan+ Sky Blue+ LetterGlitch弱め+ 会話カード入力アニメ | GridScan薄く+ 会話バブルが手紙のように開く |
| 13 | 1日の流れ | コートライン風タイムライン+ GridMotion+ Sora時刻 | 縦タイムライン+ JetBrains Mono時刻+ 静かなfade |
| 14 | 募集要項 | 表組み+ 軽いfade+ Yellow行ハイライト | Hairline表組み+ Coral脚注+ JetBrains Mono数値 |
| 15 | 見学で確認 | 5カード+ ClickSpark+ Polaroid風 | 手書き✓が1個ずつ書かれる（Coral） |
| 16 | 選考フロー | 5ステップ横並び+ アクティブ化アニメ | 縦タイムライン+ Coral番号+ 静かなfade |
| 17 | FAQ | Accordion+ Yellowアイコン回転 | Accordion+ **アイコンがテニスボールに置換**+ open時にBoll 180度回転 |
| 18 | Final CTA | StarBorder Yellow+ 背景ラリーボール3方向ClickBurst | BlurText+ Ink黒ベタ+ Yellow 1pxアンダーバーだけ |
| 19 | Future Roadmap | Yellow ストライプで4Phase区切り+ Sky Blue補助 | **章扉ページ**+ 4Phaseを編集記事の目次風に並べる |

---

## 4. 想定ペルソナ別 推奨

| ペルソナ | A | B | 推奨 |
|---|:---:|:---:|---|
| Persona A（テニス経験/コーチ未経験 20-30代） | ◎ | ○ | A |
| Persona B（コーチ経験者・スクール経験者） | ○ | ◎ | B |
| Persona C（接客/営業経験 × テニス経験） | ○ | ◎ | B |
| Persona D（学生/アルバイト/副業） | ◎ | △ | A |
| **山下社長（経営者目線）** | ○ | ◎ | B |
| **近江さん（現場目線）** | ○ | ◎ | B（写真と引用が現場を立てる） |
| ジュニア保護者層（将来の転用先） | △ | ◎ | B |
| 西宮テニスクラブ展開（将来の転用先） | △ | ◎ | B |

```text
ターゲットが「採用したい人材」だけならA優位。
ターゲットが「採用＋保護者＋経営者＋西宮展開の総合ブランド」ならB優位。
```

---

## 5. ハイブリッド案（社長が両方欲しいと言った場合の保険）

両案を組み合わせる第3の選択肢も用意できる。

```text
Hybrid C：Editorial Burst
- ベース構造：B（マガジン12カラム + 余白 + Noto Serif JP）
- Heroだけ：A（フルブリード + Yellow巨大数字 + ラリー軌道）
- Career（§11）だけ：A（ScrollStack）
- 他は全部 B のトーン
→ "落ち着いた本の中に、Hero と Career だけスポーツブランドの見せ場を仕込む"
→ 実装コストは A + B の 1.3倍だが、両方のいいとこ取りができる
```

これは社長の反応次第で当日提示する隠し玉として持っておく。**最初からこれを出すと判断軸がぼやけるので、推奨はAかBの2択提示。**

---

## 6. 実装観点での違い

### 共通基盤（両案とも）

- 既存 `globals.css` の `.split-text` `.blur-text` `.spotlight-card` `.light-rays` `.scroll-velocity` `.scroll-reveal` をそのまま継承
- `tailwind.config.ts` の `colors.tennis / clay / sky / warm / deep / rally / ink / soft` を継承
- `src/components/react-bits/` のローカル実装を継承拡張
- `prefers-reduced-motion` のフォールバックは両案で完備
- 19セクション全部、`src/components/recruit/` 配下に1コンポーネント1ファイルで実装

### A固有で追加が必要なもの

- フォント：Inter Tight 900 / Space Grotesk 700 / Sora 700（next/font/google）
- CSS クラス：`rb-bounce-cta` `rb-scoreboard` `rb-yellow-stripe` `rb-tilt-broken` `rb-step-rally` `rb-card-burst`（計12-15個）
- SVG コンポーネント：RallyBallTrail / CourtLines / ScoreboardFrame / RacketSweep / StepBounce
- 横スクロール体験：Section 7「体験→入会」のラリーステップ（要：横スクロール用ライブラリ or 自前 IntersectionObserver）

### B固有で追加が必要なもの

- フォント：Fraunces Italic 600 / Noto Serif JP 600 / JetBrains Mono 400（next/font/google + subset/preload 必須）
- CSS クラス：`b-blur-in` `b-tilt-soft` `b-underline-coral` `b-stroke-draw` など8-10個
- SVG：手書き✓5種類（Rough.js風）/ 章扉縦線 / 署名SVG
- 章扉ページ3か所：Section 2 / 7 / 19 にフルブリード写真+章番号レイアウト
- 紙質感ノイズ：bg-noise レイヤ（SVG feTurbulence）

### Hybrid C（参考）の追加コスト

```text
A固有 + B固有のフォント・CSSが両方必要 → フォント8書体、CSS追加20個前後
ただしページ全体トーンはBに寄せられるので「Hero + Career」だけAの実装を移植する形で済む
工数：A単体の +30%、B単体の +50% を目安
```

---

## 7. なぜ "2案見せる" を推奨するのか

```text
1. 社長への裏メッセージが2層あるから
   - 「採用ブランドの方向性、まだ複数あります」と見せる方が、
     アリガトサン側の検討深度が伝わる
   - 1案だけ出すと「これしか考えてない」と映る可能性

2. 山下社長と近江さんで好みが割れる可能性が高い
   - 社長は経営者目線で B に寄りやすい
   - 若手スタッフ採用の現場感がある近江さんは A に寄る可能性あり
   - 2案あれば、その場で「両方のいいとこ取り」を交渉できる

3. 来週は決定MTGではない（吉川さんのフィードバック方針）
   - HP/採用/育成/集客の方向決めMTG
   - 「方向決め」のために2案あった方が議論が立ち上がる

4. ハイブリッド提案（Hybrid C）への流れを作れる
   - 2案見せる → 反応見る → Hybrid Cを最後に出す、で予算と工数の幅を取れる
```

ただし、**「両方やります」は禁句**。必ず「方向を決めるための2案」として出す。

---

## 8. デモ当日の見せ方台本（合計 12分構成）

### Step 1：前置き（1分）

```text
今日は完成版のHPを持ってきたというより、
テニプラがこれから人を採って育てていくために、
求職者にどう見えるべきかを仮説として形にしてきました。

実は方向性として2案、極端に振った形で持ってきています。
両方とも19セクション、社長と近江さんに見ていただきたい内容は同じです。
ただ「LPの空気感」が真逆になります。
今日は、どちらの空気が、テニプラに合うかを一緒に決めたいです。
```

### Step 2：A案を流す（3分）

```text
- Hero を 10秒見せて、ラリー軌道と Yellow を見せる
- Section 7 横スクロールラリーステップを見せる
- Section 11 Career ScrollStack を見せる
- Final CTA のボールバウンドを見せる

口頭で添える：
「これは Nike や On Running のような若年層向けスポーツブランドのトーンです。
20代に届きやすく、SNSやスカウト文にも転用しやすい方向です。」
```

### Step 3：B案を流す（3分）

```text
- Hero を 10秒見せて、Noto Serif JP の落ち着きと B&W写真を見せる
- Section 2 章扉ページを見せて、本の見開き感を見せる
- Section 6 山下哲学の引用ブロックを見せる
- Section 19 Future Roadmap の章扉を見せる

口頭で添える：
「こちらは Number や Racquet Magazine のような編集ジャーナルのトーンです。
30代経験者や保護者にも刺さりやすく、HP本体や西宮LPにも同じトーンで広げられます。」
```

### Step 4：論点整理（2分）

```text
「どちらが正解、ではなく、どちらを採用ブランドの軸にするかの選択です。」

- ターゲットの中心はどこか（20代未経験 vs 30代経験者）
- 保護者や経営者にも届く必要があるか
- HP本体や西宮展開LPに同じトーンを使うか
- スカウト文・SNS広告までブランドを統一するか
```

### Step 5：質問タイム（2分）

§9 のヒアリング項目から拾う。

### Step 6：Hybrid C の提示（1分・必要なら）

```text
「実は両方の良いとこ取りも可能です。
ベースは B のエディトリアルで、Hero と Career だけ A のエネルギーを乗せる。
落ち着きと派手さの両立ができます。
ただし工数は B 単体の +50% になります。」
```

---

## 9. MTGで社長にぶつける質問（A/B方向決め用）

| 質問 | 回答が "こっち" なら | 推奨案 |
|---|---|---|
| 採用したい主役は、20代未経験 or 30代経験者、どちらが多い？ | 20代 / 30代 | A / B |
| 来年、ジュニア保護者向けのLPも作る予定はあるか？ | YES | B |
| 西宮テニスクラブの認知拡大LPに、同じトーンを使いたいか？ | YES | B |
| 派手な動きを「楽しい」と感じるか「うるさい」と感じるか？ | 楽しい / うるさい | A / B |
| SNS広告クリエイティブの素材としても流用したいか？ | YES | A |
| HP本体（採用LP以外）も近い時期に作り替える予定か？ | YES | B |
| 「テニプラ」というブランドの位置を、若さ寄り or 大人寄り、どこに置きたいか？ | 若さ / 大人 | A / B |

---

## 10. 提案後のロードマップ（方向決定後）

```text
Week 1（来週MTG後）
- 方向決定（A / B / Hybrid C）
- 実写素材の撮影日程確定（山下コーチ / 近江さん / レッスン風景）
- 採用条件（給与・評価）の確認

Week 2-3
- 決定方向の追加フォント import
- 共通基盤（globals.css 拡張、Tailwind 拡張）
- 全19セクション実装

Week 4
- 実写素材組み込み
- AAコントラスト・LCP・CLS チェック
- 山下社長・近江さん本人コメント差し替え
- 公開前最終レビュー
```

---

## 11. リスクと対策

| 種別 | A | B |
|---|---|---|
| **見え方リスク** | Yellow 18%が「派手すぎる」と社長に映る可能性 | Fraunces Italic+Noto Serif JP のセリフ多用が「重い」と映る可能性 |
| **対策** | デモ時に最初は **Hero だけ**見せて反応見る。「派手」と言われたら Yellow を 10% に下げる代替案を即座に提示 | デモ時に Section 6 山下哲学の引用ブロックを見せ、「読みたくなりません？」で印象を取りに行く |
| **技術リスク** | 横スクロールラリーステップが SP で破綻しやすい | Web Font 5書体追加で LCP / CLS 劣化 |
| **対策** | SP は縦タイムラインに自動 fallback | subset + preload + `font-display: swap`、Total 220KB 以下を厳守 |
| **転用リスク** | スポーツブランド寄りすぎてジュニア保護者・西宮LPに使いまわしづらい | エディトリアル寄りすぎてSNS広告クリエイティブが地味になる |
| **対策** | 別途、保護者向けトーンの「やわらかB寄り派生案」を準備 | SNS用に Yellow 比率を上げる派生バナーレギュレーションを作る |

---

## 12. 結論（アリガトサン社内の推奨）

```text
社内推奨：B → Hybrid C の順で出す
理由：
- 山下社長は経営者目線で B に共鳴しやすい（採用 / HP / 西宮の総合ブランド化）
- 近江さんに B の山下哲学・近江メッセージの大判ポートレートを見せれば現場の納得が取れる
- 「20代に届きにくい」という反論が出たら Hybrid C で Hero / Career だけ A を乗せる提案ができる
- A は単独で出すと社長の "派手すぎ" 懸念で潰れるリスクがあるが、Hybrid の中で部分採用すれば活きる

ただし、社長が即答で「A の方が今っぽくていい」と言う可能性も十分ある。
その場合は A 全面採用に振る。両案とも 19セクション完成形が用意されているので、どちらに転んでも翌週から実装に入れる。
```

---

## 付録 A：両案フル仕様への参照

| ファイル | 行数 | 内容 |
|---|---:|---|
| `tennis_plaza_recruit_lp_visual_design_variant_A.md` | 1780 | A案 Rally Burst フル仕様（19セクション×9項目） |
| `tennis_plaza_recruit_lp_visual_design_variant_B.md` | 1344 | B案 Court Editorial フル仕様（19セクション×9項目） |
| `tennis_plaza_recruit_lp_section_restructure_plan.md` | — | 19セクション再構成案（両案の元データ） |
| `tennis_plaza_recruit_lp_visual_design_plan.md` | — | v1ビジュアル計画（両案の継承元） |
| `tennis_plaza_recruit_lp_copy_review.md` | — | ペルソナ別コピーレビュー |

---

## 付録 B：採用フォント全リスト（実装担当向け）

### A案で導入するフォント

```text
next/font/google からインポート：
- Inter Tight (Black 900)        — 英字ディスプレイ
- Space Grotesk (Bold 700)       — 英字ラベル
- Sora (Bold 700)                — スコアボード数字
- Noto Sans JP (Medium 500, Bold 700, Black 900) — 既存流用
- Inter (Regular 400, Bold 700)  — 既存流用
合計：5書体 / Total < 240KB 目標
```

### B案で導入するフォント

```text
next/font/google からインポート：
- Fraunces (Italic 600)          — 英字ディスプレイ
- Noto Serif JP (SemiBold 600)   — 和文ディスプレイ
- JetBrains Mono (Regular 400)   — モノ
- Inter (Regular 400, Medium 500) — サンセリフ
- Noto Sans JP (Regular 400, Medium 500) — 和本文（既存流用）
合計：5書体 / Total < 220KB 目標
```

---

以上。来週MTGに向け、両案の詳細仕様（A: 1780行 / B: 1344行）と本比較ドキュメントの計3本で提案セットは完成。
