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
  root: {
    minWidth: 275,
    height: 650,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  history: {
    marginBottom: 20,
    borderBottom: '1px solid cornflowerblue',
  },
})

export default function SkillSetCard(props) {
  const classes = useStyles()
  const { skillSet } = props

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {skillSet.technorogy}
          </Typography>
          <SkillLevelPiChart skillSet={skillSet} />
          <Typography
            display="block"
            align="center"
            component="subtitle2"
            className={classes.history}
          >
            {skillSet.history}
          </Typography>
          <Typography variant="body2" component="p">
            {skillSet.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
