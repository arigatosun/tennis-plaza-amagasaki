# docs ディレクトリ ナビゲーション

テニスプラザ尼崎案件の計画書・ドキュメント置き場。カテゴリごとに番号付きフォルダで管理する。

## 構成

| フォルダ | 中身 | まず見るファイル |
|---|---|---|
| `00_提案・戦略/` | 6/15提案パッケージ（KPI戦略・3プラン・SNS運用・現状分析・MTG台本） | `tennis_plaza_proposal_INDEX.md` |
| `01_採用LP_設計/` | 採用LPの実装計画・構成案・モーション・ビジュアル設計（variant A/B・AB比較） | `tennis_plaza_recruit_lp_implementation_plan.md` |
| `02_採用LP_レビュー/` | 採用LPのコピー/ビジュアルのレビュー・AB評価 | `tennis_plaza_recruit_lp_copy_review.md` |
| `03_背景・元資料/` | 案件の背景・戦略思考の履歴・元ブリーフ | `context.md` |

## 00_提案・戦略 の読む順

1. `tennis_plaza_proposal_INDEX.md`（束ね・全体ストーリー）
2. `tennis_plaza_genba_analysis.md`（現状分析・枠組み版）
2b. `tennis_plaza_hp_analytics_report.md`（HP現状診断・GA4実数版／テキストmaster）
2c. `tennis_plaza_hp_genjo_report.html`（HP現状報告資料・GA4証跡版／プレゼン用・印刷でPDF化。画像は`assets/ga4/`）
3. `tennis_plaza_kpi_strategy.md`（KPI戦略＝ロジック/モデル・仮置き版）
3b. `tennis_plaza_kpi_plan.md`（**KPI戦略設計計画＝実行計画・GA4実数反映／火曜提出のメイン**）
3c. `tennis_plaza_kpi_plan_easy.html`（KPI計画のやさしいHTML版・投影/PDF用）
3d. `tennis_plaza_kpi_calculator.html`（採用KPI逆算シート・自動計算）
3e. `tennis_plaza_phase0_setup_guide.md`（Phase0計測設定 手順書・吉川向け）
3f. `tennis_plaza_kpi_summary_1pager.md`（社内提出サマリー1枚）
3g. `tennis_plaza_recruit_media_strategy.md`（**採用媒体戦略・無料優先確定版**／人材紹介除外・engage/Google for Jobs/リファラル）
★ `tennis_plaza_proposal_deck.pptx`（**★★MTG本番用 通し提案書・PPTX29枚・図解中心**／クライアント視点レビュー反映済）＋ `design.md`（デザイン仕様）＋ `_deck_builder.py`（生成スクリプト）
4. `tennis_plaza_proposal_client.html`（クライアント提示用 提案資料・HTML版／PPTXの元コンテンツ）
4a. `tennis_plaza_3plan_proposal_v2.md`（提案の内部詳細仕様・5領域統合）
4b. `tennis_plaza_3plan_proposal.md`（旧運用代行版・参考残置）
4. `tennis_plaza_sns_content_ops.md`（SNS/コンテンツ運用設計）
5. `tennis_plaza_3plan_proposal.md`（3プラン）
6. `tennis_plaza_mtg_playbook.md`（6/15進行台本）

## 今後ドキュメントを追加するときのルール

- 既存カテゴリに該当すれば、その番号フォルダ内に置く。
- 新カテゴリが必要なら、次の連番フォルダを作る（例: `04_育成・研修`, `05_西宮展開`, `06_計測・レポート`）。番号は用途の登場順で増やし、既存番号は振り直さない。
- ファイル名は `tennis_plaza_<トピック>_<種別>.md` の命名を踏襲（種別例: `_plan` / `_review` / `_strategy` / `_proposal`）。
- 各カテゴリで最初に見るべきファイルが分かるよう、必要に応じてこのREADMEの表を更新する。
