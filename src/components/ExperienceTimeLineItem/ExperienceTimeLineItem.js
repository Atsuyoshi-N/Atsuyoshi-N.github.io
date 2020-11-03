import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import HotelIcon from '@material-ui/icons/Hotel'
import CreateIcon from '@material-ui/icons/Create'
import ChatIcon from '@material-ui/icons/Chat'
import DataUsage from '@material-ui/icons/DataUsage'
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
          <Typography variant="h6" component="h1">
            {experience.roll}
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
