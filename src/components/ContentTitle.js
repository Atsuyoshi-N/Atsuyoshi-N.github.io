import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    margin: '0 20% 5%',
    borderBottom: '1px solid cornflowerblue',
  },
})

export default function ContentTitle(props) {
  const classes = useStyles()
  const { title } = props
  return (
    <Typography
      align="center"
      className={classes.title}
      color="textSecondary"
      variant="h3"
    >
      {title}
    </Typography>
  )
}
