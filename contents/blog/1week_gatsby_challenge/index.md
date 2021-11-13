---
date: 2020-11-11T13:01:31+09:00
title: 約10日でポートフォリオとブログを改善した話
description: Gatsbyでブログを改善する際にハマったことなど
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
category: Web開発
tags: ['React', 'Gatsby', 'Material-UI', 'Recharts', 'ポエム']
---

今回、およそ 10 日間で昔 Gatsby で作成していたブログの UI を改善し、トップページをポートフォリオとして公開しました。その過程でつまづいたことなどの共有をしたいと思います。

リポジトリはこちら [Github](https://github.com/Atsuyoshi-N/Atsuyoshi-N.github.io)

## はじめに

作り始めるきっかけになったのは次の記事のおかげです。

[フロント未学習の大学生が 1 週間で Vue.js を使ったポートフォリオを作った話](https://qiita.com/p1ass/items/a01578b782f17f573510)

これを読んで、昔テンプレートそのままの Gatsby で作ったブログページがあることを思い出しました。そこで 1 週間程度でポートフォリオもブログページも改善できたらいいなと思い挑戦してみました。

結果的に出来たのは、トップページのポートフォリオと、ブログ一覧ページ、ブログ詳細記事(このページ)です。

上の記事の執筆者である p1ass さんをはじめとする様々な方のブログやポートフォリオを参考にしつつ、React と Material-UI で作ってみました。(~~Material-UI を使用したのは、CSS を書きたくなかったからとタイムラインを簡単に使用できるからです。~~)

## 作った機能

次のうち、強調した部分について次のセクションで触れます。

### ポートフォリオページ

- Profile を表示するテーブル
- 経歴を表示するタイムライン
- **Skill Level を表示するパイチャート**
- 成果物を表示するアコーディオンメニュー
- **レスポンシブ対応**

### ブログ一覧/個別ページ

- **レイアウトのカードから Material-UI のカードへと移行**
- タグの実装
- **ブログ一覧ページの個別のブログの description で excerpt の format に HTML を指定**
- next, prev 記事の実装

### その他

- Header の項目を増やすこと
- **Header のレスポンシブ対応**
- **ブログカテゴリーの実装**
- RSS フィードの設置
- **gatsby-node.js を更新しても反映されない**
- **ページリロードで記事が表示されなくなる**

## 共有したい点

### Skill level を表すパイチャート

結論を言うと、パイチャートの表示には、[Recharts](https://recharts.org/en-US/)の[CustomActiveShapePieChart](https://recharts.org/en-US/examples/CustomActiveShapePieChart)を使用しています。公式の Example が極めて見難いので苦労しました。このライブラリを使用したのは愛用させてもらってる[AtCoder Problems](https://kenkoooo.com/atcoder#/table/)で使用されていたためです。

### レスポンシブ対応

これには苦労しました。Gatsby 上で Material-UI の makeStyles が開発環境ではきちんとスタイルが表示されるのに、本番環境になるとスタイルが崩れてしまう問題に直面しました。

はじめ経歴を表すタイムラインを表示するとその下のコンポーネントが崩れることを確認し、モバイルと PC ごとに表示を分けている親コンポーネントにスタイルのクラスを渡すことで修正できました。

しかしながら、あとから Header を追加すると同様の問題に直面したため、共通点を考えたところ、`react-responsive`を使用していることを発見しました。

そこで、react-responsive を[gatsby-plugin-breakpoints](https://www.gatsbyjs.com/plugins/gatsby-plugin-breakpoints/)に変更したところ、うまく動くようになりました。これに関しては原因がよくわかりませんが、[Python しか触ったことのなかった大学生が React(Gatsby.js)で Web 開発した話](https://qiita.com/horri1520/items/cee083e846c01d38b622)に助けられました。

### レイアウトのカードから Material-UI のカードへと移行

これは表題の通りです。なぜ移行したかと言うと、長いタイトルのブログがあった時、そのタイトルが見切れて表示されなかったからです。

Material-UI には標準でカードコンポーネントがあり、とても便利でした。

### ブログ一覧ページの description の改善

当初、ブログ一覧画面の description には数式の部分が空白で表示されているという問題がありました。GraphQL の IDE を眺めていると、excerpt に format を指定できることを発見しました。format を HTML にして渡すことによって数式を含んだ description を精製できました。

### ブログカテゴリーの実装

他の方のブログを見ていると、タグとカテゴリーの両方を活用しているケースがあり、自分のブログにもその機能が欲しいなと思い実装しました。

基本的にはタグの実装と同じです。タグの実装については、公式ドキュメントが素晴らしいので、公式ドキュメントを参照するようにしましょう。[Creating Tags Pages for Blog Posts](https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/)

もしかしたら gatsby-node.js の実装部分で困るかもしれません。その時は、[該当コミット](https://github.com/Atsuyoshi-N/Atsuyoshi-N.github.io/pull/3/commits/4573372411a3ddd2f3b812e1a33095d9cdcc0640)のように frontmatter に category を追加し、categoriesGroup を定義し、category ごとに categoryTemplate を呼び出すことを行うと良いでしょう。(該当コミットでは、gatsby-node.js が gatsby/creeeatePages.js に置き換わっていることに注意)

### gatsby-node.js を更新しても反映されない。

prev、next の実装を行ってる時に起こりました。具体的には、createPages の context の中身を変更し、gatsby develop を立ち上げ直しても変更した context の中身が変わらないというものでした。

解決策としては、[GitHub の Issue](https://github.com/gatsbyjs/gatsby/issues/10742#issuecomment-458610239)に書いてある通り、pages や templates の名前の変更を行うと一度は直りましたが、また同じ状況が再現します。

そのため、キャッシュを消した後(.cache フォルダを削除)に再度 gatsby develop を試したところ、正常に動きました。

### ページリロードで記事が表示されなくなる。

develop 環境では正常に記事が表示されるのに、gatsby build && gatsby serve をすると、記事が全く表示されない問題が生じました。表示される場合と表示されない場合とがあり混乱しました。

#### 表示される場合

- 一覧ページにあるリンクから記事に飛ぶ場合

#### 表示されない場合

- 直接リンクを叩く場合
- 記事詳細画面でリロードを行う場合
- next/prev ボタンで遷移する場合

友人にも相談し trailing-backspace が怪しいんじゃないかとなり、対応してみましたが改善しませんでした。

結局、dangerouslySetInnerHTML が production build で動かないことを発見し、対応しました。対応方法については[Gatsby + microCMS + Firestore エラー・不具合集](https://qiita.com/atomyah/items/b8ae87ad7265e46bc6d2)と[dangerouslySetInnerHTML does not work on production builds #11108](https://github.com/gatsbyjs/gatsby/issues/11108)が参考になりました。

## まとめ

結構大変でしたが、およそ 10 日間でポートフォリオもブログもある程度形にできたのはとても嬉しいです。

作ってみた感想としては、

- 集中すればそれなりのものが作れるということ
- 公式のリファレンスをはじめとして誰かのブログなりコードなりが充実してるのが素晴らしい

ということです。

ポートフォリオの成果物の欄をもっと充実させられるように日々アウトプットを心がけていきたいですね。
