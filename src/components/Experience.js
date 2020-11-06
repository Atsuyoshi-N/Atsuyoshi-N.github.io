import React from 'react'
import ExperienceTimeLineItem from './ExperienceTimeLineItem'
import ContentTitle from './ContentTitle'
import Fade from 'react-reveal/Fade'
import MediaQuery from 'react-responsive'
import Timeline from '@material-ui/lab/Timeline'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import HotelIcon from '@material-ui/icons/Hotel'
import CreateIcon from '@material-ui/icons/Create'
import ChatIcon from '@material-ui/icons/Chat'
import DataUsage from '@material-ui/icons/DataUsage'

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
    term: '2018年2月~2018年3月',
    icon: <ChatIcon />,
    company: 'LINE株式会社',
    role: 'スクールコース',
    description:
      '前半の1ヶ月でRuby on RailsとSwiftの基礎を学び、後半の1ヶ月でペアプロを行いました。',
  },
  {
    id: 3,
    term: '2017年11月~2019年5月',
    icon: <FastfoodIcon />,
    company: '株式会社OMAKASE',
    role: 'エンジニアインターン',
    description:
      'Ruby on RailsとjQueryをメインに使用しながら高級飲食店の予約サービスOMAKASEのエンハンスメント開発を行いました。また、新規サービス立ち上げにも関わり、CIのセットアップやリンターの設定、Railsを用いたサーバーサイドの開発やReactを用いたフロントエンドの開発に貢献しました。',
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
].reverse()

export default function Experience() {
  return (
    <Fade bottom>
      <ContentTitle title="Experiences" />
      <MediaQuery query="(max-width: 767px)">
        <Timeline align="left">
          <ExperienceTimeLineItem experiences={experiences} isNarrow="true" />
        </Timeline>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <Timeline align="left">
          <ExperienceTimeLineItem experiences={experiences} isNarrow="false" />
        </Timeline>
      </MediaQuery>
    </Fade>
  )
}
