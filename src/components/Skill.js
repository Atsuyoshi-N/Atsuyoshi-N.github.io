import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SkillSetCard from './SkillSetCard'

const useStyles = makeStyles({
  title: {
    margin: '0 20% 5%',
    borderBottom: '1px solid cornflowerblue',
  },
})

const skillSets = [
  {
    technorogy: 'Ruby',
    level: 60,
    history: '3年程',
    description:
      '基本的な文法は調べずに記述できます。簡単なスクリプトを組む時によく使います。メタプログラミングについては詳しくありません。最近はしばらく触っていないので思い出すのに時間が必要になるかもしれません。',
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
      '生JS/TypeScriptなど色々触りましたが、DOM操作はjQueryに任せる場面が多かったため、使用する場合にはドキュメントを参照しながらになります。。サーバー側での使用は経験が浅いです。TypeScriptには慣れておらず、複雑な型定義はできません。',
  },
  {
    technorogy: 'Rails',
    level: 60,
    history: '3年程',
    description:
      '基本的なMVCアーキテクチャに則った開発をすることができます。FatModel/FatControllerへの対処やPOLO/Form Objectなどには詳しくありません。',
  },
  {
    technorogy: 'React',
    level: 55,
    history: '半年程',
    description:
      'このページはReactで記述されています。SPAを作成するくらいはできますがCSSフレームワークのドキュメントによるおかげが強いです。関数コンポーネントで記述できますが、TypeScriptとの組み合わせは苦手です。reduxはredux-toolkitが便利だとは知っていますが使い方は詳しくありません。',
  },
  {
    technorogy: 'Heroku',
    level: 70,
    history: '3年程',
    description:
      '基本的なことはできます。Heroku CIについても知見があります。Web Driversにつまづいた経験があるので、Selenium関連は知見があるつもりです。',
  },
  {
    technorogy: 'Vim',
    level: 70,
    history: '3年半程',
    description:
      '基本的な操作をすることができます。普段使いをしています。モーションを使った文字列操作や、場面に応じてマクロを使用することができます。',
  },
  {
    technorogy: 'Git',
    level: 60,
    history: '2年半程',
    description:
      '基本的な操作ができ、GitHubへの連携も行えます。rebaseなどもできますが、基本的にtigを使用しています。reflogも知識としては持っていますが、使ったことは数回しかありません。',
  },
]

export default function Skill() {
  const classes = useStyles()
  return (
    <>
      <Typography
        align="center"
        className={classes.title}
        color="textSecondary"
        variant="h3"
      >
        Skills
      </Typography>
      <Grid container>
        {skillSets.map(skillSet => (
          <SkillSetCard skillSet={skillSet} key={skillSet.technorogy} />
        ))}
      </Grid>
    </>
  )
}
