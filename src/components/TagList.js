import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  tagsList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
  },
  tagItem: {
    color: 'rgba(0, 0, 0, 0.54)',
    margin: '0 10px 0 0',
  },
})

export default function TagList(props) {
  const classes = useStyles()
  const { frontmatter } = props
  return (
    <ul className={classes.tagsList}>
      {frontmatter.tags !== null &&
        frontmatter.tags.map(tag => (
          <li>
            <Typography variant="subtitle2" color="textSecondary">
              <Link
                to={`/tags/${kebabCase(tag)}`}
                className={classes.tagItem}
              >{`#${tag}`}</Link>
            </Typography>
          </li>
        ))}
    </ul>
  )
}
