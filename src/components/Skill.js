import React from 'react'
import ContentTitle from './ContentTitle'
import Grid from '@material-ui/core/Grid'
import SkillSetCard from './SkillSetCard'

const skillSets = [
  {
    technorogy: 'Ruby',
    level: 60,
    history: '3年程',
    description:
      '基本的な文法は調べずに記述できます。簡単なスクリプトを組む時によく使います。メタプログラミングについては詳しくありません。最近はしばらくスクリプトを書いていないです。',
  },
  {
    technorogy: 'C++',
    level: 50,
    history: '2年程',
    description:
      '主に競技プログラミングで使用しています。そのため、競技プログラミングで使用するライブラリには詳しいですが、それ以外のライブラリには詳しくありません。簡単な計算を行う時にさくっと使用しています。いわゆるClass構文やtemplateはそれほど書いたことがないので詳しくありません。',
  },
  {
    technorogy: 'JavaScript',
    level: 50,
    history: '2年半程',
    description:
      '生JS/TypeScriptなど色々触りましたが、DOM操作はjQueryに任せる場面が多かったため、使用する場合にはドキュメントを参照しながらになります。サーバー側での使用は経験が浅いです。TypeScriptには慣れておらず、複雑な型定義はできません。',
  },
  {
    technorogy: 'Rails',
    level: 60,
    history: '3年程',
    description:
      '基本的なMVCアーキテクチャに則ったアプリを開発をすることができます。一人で簡単なプロダクションレベルのサービスの立ち上げができます。FatModel/FatControllerへの対処やPOLO、Form Objectなどには詳しくありません。',
  },
  {
    technorogy: 'React',
    level: 55,
    history: '半年程',
    description:
      'このページはReactで記述されています。簡単なSPAを作成することができます。スタイリングは苦手なので、CSSフレームワークに任せることが多いです。今のところTypeScriptとの組み合わせは苦手です。reduxはredux-toolkitが便利だとは知っていますがチュートリアルをこなした程度の知識しかありません。',
  },
  {
    technorogy: 'Heroku',
    level: 70,
    history: '3年程',
    description:
      '基本的なことはできます。Heroku CIについても知見があります。Web Driversにつまづいた経験があるので、Web DriversやSelenium関連は知見があります。',
  },
  {
    technorogy: 'Vim',
    level: 70,
    history: '3年半程',
    description:
      '基本的な操作をすることができます。普段使いをしています。モーションを使った文字列操作や、簡単なマクロを使った操作なども行うことができます。',
  },
  {
    technorogy: 'Git',
    level: 60,
    history: '2年半程',
    description:
      'Add, Commit, Push, Pull, Cloneといった基本的な操作を行うことができます。GitHubの操作は詳しいですが、GitLabには知見がありません。rebaseなどのコマンドの実行にはtigを使用することがあります。Git Flowに則った開発経験があります。',
  },
]

export default function Skill() {
  return (
    <>
      <ContentTitle title="Skills" />
      <Grid container>
        {skillSets.map(skillSet => (
          <SkillSetCard skillSet={skillSet} key={skillSet.technorogy} />
        ))}
      </Grid>
    </>
  )
}
