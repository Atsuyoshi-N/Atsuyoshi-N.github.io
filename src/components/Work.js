import React from 'react'
import ContentTitle from './ContentTitle'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const works = [
  {
    name: 'portfolio',
    url: 'https://github.com/Atsuyoshi-N/Atsuyoshi-N.github.io',
    description:
      'このサイトのことです。Reactの勉強も兼ねてGatsbyを選定しました。Material UIやreact-reveal, rechartsを活用しています。HostingサービスとしてGitHub Pagesを使用しています。',
    tags: ['JavaScript', 'React', 'Gatsby', 'GitHub Pages'],
  },
  {
    name: 'dotfiles',
    url: 'https://github.com/Atsuyoshi-N/dotfiles',
    description:
      '環境構築スクリプトを自動化したものです。Macの環境を1コマンドでほとんど整えることができます。現在はMacのみの対応となっていますが、Ubuntuにも対応予定です。Macに関しては、HomeBrewやgitに依存しないインストーラを現在作成中です。',
    tags: ['shellscript', 'vimscript'],
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  workName: {
    width: '100%',
  },
  detailsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      width: '80%',
      margin: '0 auto',
    },
  },
  tagChip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  workChip: {
    borderColor: 'cornflowerblue',
  },
}))

function WorkAccordion(props) {
  const { work, classes } = props
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.workName}>
          <Typography
            display="block"
            align="center"
            className={classes.heading}
          >
            <a href={work.url} target="_blank" rel="noopener noreferrer">
              {work.name}
            </a>
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.detailsContainer}>
          <Typography variant="body1" display="block" align="center">
            {work.description}
          </Typography>
          <div className={classes.tagChip}>
            {work.tags.map(tag => (
              <Chip
                label={tag}
                key={tag}
                className={classes.workChip}
                variant="outlined"
              />
            ))}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default function Work() {
  const classes = useStyles()
  return (
    <>
      <ContentTitle title="Works" />
      <div className={classes.root}>
        {works.map(work => (
          <WorkAccordion key={work.name} work={work} classes={classes} />
        ))}
      </div>
    </>
  )
}
