import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px',
    textAlign: 'center',
    minWidth: '150px',
  },
  description: {
    textAlign: 'left',
  },
}))

export default function ExperienceTimeLineItem(props) {
  const classes = useStyles()
  const experiences = props.experiences.reverse()

  return experiences.map(experience => (
    <TimelineItem key={experience.id}>
      {props.isNarrow === 'false' && (
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {experience.term}
          </Typography>
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineDot>{experience.icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {experience.company}
          </Typography>
          <Typography variant="h6" component="h2">
            {experience.role}
          </Typography>
          {props.isNarrow === 'true' && (
            <Typography variant="body2" color="textSecondary">
              {experience.term}
            </Typography>
          )}
          <Typography>{experience.description}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  ))
}
