# Plan A｜CV計測設計 v1（GTM/GA4）— 2026-06-23

> 作成: アリガトサン / 2026-06-23
> 根拠: 公開サイト実査（CV接点）＋管理画面調査 [[wp_admin_investigation_2026-06-23]]＋GA4ホーム画面（近江共有）
> 対象タスク: T-07（計測先行Plan A）。関連: T-14（buscatch）/ T-02（HP委託）

## 0. 前提（実測で確定）
- **GA4**: プロパティ「テニスプラザ尼崎」 account `385513819` / property `525873793` / 計測ID `G-GWGY9TGJ1Z`。
  - 直近7日: アクティブ299・新規243・**イベント3,319（データは流れている）**。**キーイベント＝0（コンバージョン未設定）**。
  - ＝ **PV/基本イベントは稼働、CV計測だけがゼロ**。Plan Aは「CVをキーイベント化する」作業が主。
- **タグ管理**: GTMコンテナ `GTM-PTKNCM87` が全ページ稼働（TCDテーマ `script_code` 欄に直書き）。GA4はこのGTM経由で発火。
- **実装の唯一の律速 = GTM `GTM-PTKNCM87` の編集権限**。これがあればサイト無改変でCV計測を構築できる。GA4側はキーイベント登録権限が必要（近江アカウントで保有見込み）。
- フォールバック: WP Administrator＋Site Kit(導入済停止中)＋TCD`script_code`／テーマファイル編集も可（[[wp_admin_investigation_2026-06-23]]）。

## 1. CV6種 → 実接点マッピング（サイト実査で確定）
| # | CV | 実接点（確認済） | GTMトリガー | GA4イベント名(案) | キーイベント |
|---|---|---|---|---|---|
| 1 | 電話タップ | `tel:06-6497-1234`（全ページ共通） | Click URL が `tel:` で始まる | `tel_tap` | ◯ |
| 2 | 体験申込（開始） | `scr.buscatch.net/trial/list?f=tp_amagasaki`（全ページ） | 外部クリック: Click URL contains `scr.buscatch.net/trial` | `trial_start_click` | ◯（暫定） |
| 2' | 体験申込（完了） | buscatch `/trial/complete?f=tp_amagasaki`（**別ドメイン**） | buscatch側でタグ設置が必要（GA4測定ID共有 or GTM） | `trial_complete` | ◎（本命） |
| 3 | ネット予約（レンタル） | `reserve.tennisbear.net/tennisplaza`（**テニスベア＝別ドメイン・別システム**。`/school/rental/`内に導線） | 外部クリック: Click URL contains `reserve.tennisbear.net` | `rental_reserve_click` | ◯（暫定／完了は別システム） |
| 4 | ~~LINE相談~~ | **公式LINEアカウント無し（2026-06-23 山下確認）＝初期スコープ外** | （将来、公式LINE開設＋導線設置後）`line_click` | — 初期は対象外 |
| 5 | アクセス確認 | `/about/` PV＋地図 `maps.app.goo.gl/...`＋埋込地図 | ① `/about/` page_view ② Click URL contains `maps.app.goo.gl` | `access_view` / `map_click` | △（マイクロCV） |
| 6 | 料金確認 | `/join/`（入会・料金） | `/join/` page_view | `price_view` | △（マイクロCV） |

> マクロCV（本命の問い合わせ／申込）= #1電話・#2体験・#3予約・#4LINE。マイクロCV（検討の深さ）= #5アクセス・#6料金。GA4キーイベントは原則マクロCVに付与し、マイクロCVは指標として観測（過剰にキーイベント化しない）。

## 補足: 確定した提案条件（2026-06-23・提案サマリ整理シートと一致）
- **採用LP制作 60万**（既提案・別軸） ／ **今回追加＝既存HP計測 初期30万** ／ **継続支援 月額5万**（月次レポート・改善提案・軽微な運用保守）。納期＝着手から約1ヶ月。
- 位置づけ: **HP全面作り替えは「2年後の修繕工事リフォームに合わせて」**（まやの情報）＝今は計測先行で「見える化」。本設計と完全整合（GA4稼働・CV=0）。

## 2. 設計上の重要制約（クロスドメインが核心）
### (0) 主要CVはほぼ全て“外部システム”に出る → HP側はクリック計測まで
- 体験申込 → **buscatch**（`scr.buscatch.net`）
- レンタル予約 → **テニスベア**（`reserve.tennisbear.net`）
- ＝ HP上のGTMでは**送客クリック（=申込/予約の開始）**は測れるが、**完了（実申込/実予約）は各外部システム側の数字**が必要。完了まで繋ぐには各システムへのアクセス（buscatch=T-14／tennisbear=新規確認）or 自前フォーム化が前提。

### (A) 体験申込は buscatch クロスドメイン
- 体験フォーム本体・完了画面は **`scr.buscatch.net`（別ドメイン・別管理）**。tennisplaza.jp のGTMでは**クリック（申込開始）までしか測れない**。
- **完了（実申込）を測るには T-14（buscatch）が前提**: ①buscatch側にGA4タグ/GTMを入れられるか ②クロスドメイン計測の設定（referral除外＋linker）。
- 当面は `trial_start_click`（buscatchへの送客クリック）を暫定CVに。完了測定はT-14で接続。**自前フォーム化（社内MTG6/16で議論）すれば完了まで自社計測可能**。
- 「受講者年代」任意項目も**buscatchフォーム側の改修（T-14）**が必要。自前フォーム化なら同時に解決。

### (B) LINE相談は初期スコープ外（公式LINEが存在しない）
- **2026-06-23 山下確認: 公式LINEアカウント無し**。サイト全ページにLINEリンクも無し（社内MTG6/16「LINE導線なし」と整合）。
- ＝ **初期30万のCV計測からLINEを除外**（測定対象が存在しないため、約束に含めない）。CV計測は **電話・体験申込・レンタル予約・料金確認・アクセス確認の5本**に整理。
- 将来オプション: 公式LINE開設＋導線設置をすれば `line_click`（友だち追加/相談クリック）の計測は可能。提案には「将来オプション」として一言添える程度に留める。

## 3. GTM実装仕様（アクセス取得後に投入）
**変数（Variables）**: 組込 `Click URL` `Page Path` `Page Location` を有効化。GA4設定変数（Measurement ID `G-GWGY9TGJ1Z`）を1つ作成。
**トリガー（Triggers）**:
- T_tel: クリック(リンク) / Click URL の先頭が `tel:`
- T_trial_click: クリック(リンク) / Click URL に `scr.buscatch.net/trial` を含む
- T_map: クリック(リンク) / Click URL に `maps.app.goo.gl` を含む
- T_reserve: （予約機構特定後）レンタル予約CTA or 完了
- T_access_view: ページビュー / Page Path が `/about/`
- T_price_view: ページビュー / Page Path が `/join/`
- T_line: （接点新設後）Click URL に LINE URL を含む
**タグ（Tags）**: 各トリガーに GA4イベントタグ（上表のイベント名）。共通パラメータに `page_location` `link_url` を付与。
**GA4側**: 管理 > キーイベント に `tel_tap` `trial_start_click`(暫定→`trial_complete`) `reserve_click` `line_click` を登録。`access_view`/`price_view`/`map_click` は通常イベントとして観測。

## 4. 補助計測（Plan A 残り）
- **流入元/utm**: チラシ・Insta・QR等に `utm_source/medium/campaign` を付与する運用ルールを定義（GA4の既定で取得）。Plan C（ポスティングQR）と接続。
- **Search Console連携**: GA4 ↔ SC をリンク（GA4管理 or Site Kit）。検索クエリ流入を可視化。SCプロパティの所有確認が必要。
- **404→301**: 既存404調査（[[tennis_plaza_404_search_investigation_2026-06-15]]）の結果を301で集約。AIOSEO/サーバ設定で対応。
- **Clarity（ヒートマップ）**: GTMで Microsoft Clarity タグを追加（ホーム最適化＝吉川の前提に直結）。
- **受講者年代**: buscatch/自前フォームの任意項目（T-14）。

## 5. 判断基準（再掲・T-07）
- 共通目標: **月10件リード**。基準CVR **0.61%**（月10件ライン）。
- CVR **2.2%以上**→流入増施策へ／**0.6〜1%未満**→HP導線改修／中間→部分改善。
- まずCVをキーイベント化して「分母（流入）×分子（CV）」を1つの画面で見える状態に。

## 6. 実装前提・次アクション（順序）
1. **GTM `GTM-PTKNCM87` の編集権限取得**（所有者特定→共有依頼）。← 実装の入口
2. GA4 `525873793` の編集権限確認（キーイベント登録のため。近江アカウントで可否確認）。
3. §3のGTM設定を投入 → GA4でキーイベント登録 → リアルタイムで発火検証。
4. **T-14（buscatch）アクセス**で 体験完了CV＋受講者年代を接続。
5. 並行: 公式LINE導線の要否を山下コーチへ確認（#4の前提）／レンタル予約機構の特定（#3）。
6. SC連携・utm運用ルール・Clarity・404→301を順次。
7. 2週間ほどデータ蓄積→初期レポート→CVRで判断分岐（§5）。

## 7. 未確定（要確認）
- GTMコンテナ `GTM-PTKNCM87` の**所有者・編集権限の所在**（ベンダー/山下コーチ/GA代行）。
- レンタルコート「ネット予約」の**実機構**（buscatchか別フォームか）。
- 公式**LINEアカウント**の有無（LINE相談CVの前提）。
- GA4の**拡張計測機能**の現状（イベント3,319の内訳）・**データ保持期間**・**SC/Adsリンク**の有無 → GA4管理画面でのライブ監査が必要（要・自動化ブラウザへのGA4ログイン or 近江の画面共有）。
</content>
