import React from 'react'
import SkillLevelPiChart from './SkillLevelPiChart'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function SkillSetCard(props) {
  const classes = useStyles()
  const { skillSet } = props
  console.log(skillSet)

  return (
    <Grid key={skillSet.technorogy} item xs={12} md={4} lg={3}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {skillSet.technorogy}
          </Typography>
          <SkillLevelPiChart skillSet={skillSet} />
          <Typography variant="body2" component="p">
            {skillSet.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
