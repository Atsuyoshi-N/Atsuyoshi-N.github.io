import React from 'react'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function ExperienceTimeLineItem(props) {
  const { experiences, isNarrow, classes } = props

  return experiences.map(experience => (
    <TimelineItem key={experience.id}>
      {isNarrow === 'false' && (
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
        <Paper elevation={3} className={classes.title}>
          <Typography variant="h6" component="h1">
            {experience.company}
          </Typography>
          <Typography variant="h6" component="h3">
            {experience.role}
          </Typography>
          {isNarrow === 'true' && (
            <Typography variant="body2" color="textSecondary">
              {experience.term}
            </Typography>
          )}
          <Typography className={classes.description}>
            {experience.description}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  ))
}
