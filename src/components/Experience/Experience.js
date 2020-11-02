import React from 'react'
import ExperienceTimeLineItem from '../ExperienceTimeLineItem/ExperienceTimeLineItem'
import Fade from 'react-reveal/Fade'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import HotelIcon from '@material-ui/icons/Hotel'
import CreateIcon from '@material-ui/icons/Create'
import ChatIcon from '@material-ui/icons/Chat'
import RepeatIcon from '@material-ui/icons/Repeat'
import DataUsage from '@material-ui/icons/DataUsage'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const experiences = [
  {
    id: 1,
    term: '2017/5月~2018年12月',
    icon: <CreateIcon />,
    company: '株式会社div',
    role: 'メンターインターン',
    description:
      'HTML/CSS、Ruby on Rails、jQuery、MySQL、Git/GitHub、Herokuの基礎を学び、メンターとして受講生の方に教えていました。受講生の方のオリジナルアプリ作成のDB設計の手助けなども行いました。',
  },
  {
    id: 2,
    term: '2017年11月~2019年5月',
    icon: <FastfoodIcon />,
    company: '株式会社OMAKASE',
    role: 'エンジニアインターン',
    description:
      'Ruby on RailsとjQueryをメインに使用しながら高級飲食店の予約サービスOMAKASEのエンハンスメント開発を行いました。また、新規サービス立ち上げにも関わり、CIのセットアップやリンターの設定、Railsを用いたサーバーサイドの開発やReactを用いたフロントエンドの開発に貢献しました。',
  },
  {
    id: 3,
    term: '2018年2月~2018年3月',
    icon: <ChatIcon />,
    company: 'LINE株式会社',
    role: 'スクールコース',
    description:
      '前半の1ヶ月でRuby on RailsとSwiftの基礎を学び、後半の1ヶ月でペアプロを行いました。',
  },
  {
    id: 4,
    term: '2019年11月~2019年12月',
    icon: <DataUsage />,
    company: '株式会社フライウィール',
    role: 'SWEインターン',
    description:
      'Java、Spring Boot、grpcを用いて、DSPのエンハンスメント開発を行いました。また、JavaScriptを用いて社内ツールの運用改善を行いました。',
  },
  {
    id: 5,
    term: '2020年3月~2020年5月',
    icon: <FastfoodIcon />,
    company: '株式会社OMAKASE',
    role: 'エンジニア',
    description:
      'RailsとReactを用いて高級飲食店予約サービスOMAKASEのエンハンスメント開発を行いました。',
  },
  {
    id: 6,
    term: '2020年６月~現在',
    icon: <HotelIcon />,
    company: '休職中',
    role: '求職中',
    description: '現在求職中です。',
  },
]

export default function Experience() {
  const classes = useStyles()

  return (
    <Fade bottom>
      <Timeline align="alternate">
        <ExperienceTimeLineItem experiences={experiences} />
      </Timeline>
    </Fade>
  )
}
