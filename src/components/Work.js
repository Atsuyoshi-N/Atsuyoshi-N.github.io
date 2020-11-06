import React from 'react'
import ContentTitle from './ContentTitle'
import WorkAccordion from './WorkAccordion'
import Button from 'antd/lib/button'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GitHubIcon from '@material-ui/icons/GitHub'

const works = [
  {
    name: 'portfolio',
    url: 'https://github.com/Atsuyoshi-N/Atsuyoshi-N.github.io',
    description:
      'このサイトのことです。Reactの勉強も兼ねてGatsbyを選定しました。Material UIやreact-reveal, rechartsを活用しています。GitHub Pagesにホスティングしています。',
    tags: ['JavaScript', 'React', 'Gatsby', 'GitHub Pages'],
  },
  {
    name: 'dotfiles',
    url: 'https://github.com/Atsuyoshi-N/dotfiles',
    description:
      '環境構築スクリプトを自動化したものです。Macの環境を1コマンドでほとんど整えることができます。現在はMacのみの対応となっていますが、Ubuntuにも対応させる予定です。また、HomeBrewやgitに依存しないインストーラを現在作成中です。',
    tags: ['shellscript', 'vimscript'],
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}))

export default function Work() {
  const classes = useStyles()
  return (
    <>
      <ContentTitle title="Works" />
      <div className={classes.root}>
        {works.map(work => (
          <WorkAccordion key={work.name} work={work} />
        ))}
      </div>
    </>
  )
}
