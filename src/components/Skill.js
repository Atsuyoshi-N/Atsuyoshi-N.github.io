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
    description: '基本的な文法は調べずに記述できます。',
  },
  {
    technorogy: 'Rails',
    level: 50,
    description: '基本的な文法は調べずに記述できます。',
  },
  {
    technorogy: 'C++',
    level: 100,
    description: '基本的な文法は調べずに記述できます。',
  },
  {
    technorogy: 'MySQL',
    level: 20,
    description: '基本的な文法は調べずに記述できます。',
  },
  {
    technorogy: 'Heroku',
    level: 40,
    description: '基本的な文法は調べずに記述できます。',
  },
  {
    technorogy: 'Docker',
    level: 80,
    description: '基本的な文法は調べずに記述できます。',
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
      <Grid container justify="center">
        {skillSets.map(skillSet => (
          <SkillSetCard skillSet={skillSet} />
        ))}
      </Grid>
    </>
  )
}
