import React from 'react'
import { Link } from 'gatsby'
import TagList from '../TagList'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import 'katex/dist/katex.min.css'

const useStyles = makeStyles({
  root: {
    margin: '0 5% 30px',
  },
  date: {
    marginTop: '10px',
  },
  cardContent: {
    margin: '0 7px',
  },
  postTitleLink: {
    textDecoration: 'none',
    '&:hover': {
      color: 'cornflowerblue',
      borderBottom: '1px solid cornflowerblue',
    },
  },
  blogPostContent: {
    '& p': {
      fontSize: '16px',
    },
  },
  readMore: {
    marginTop: '15px',
  },
})

export default function PostCard({ post }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card>
        <CardContent className={classes.cardContent}>
          <span className={classes.date}>{post.frontmatter.date}</span>
          <br />
          <Link to={post.fields.slug}>
            <Typography
              variant="h5"
              display="inline"
              color="#2b2b2b"
              className={classes.postTitleLink}
            >
              {post.frontmatter.title}
            </Typography>
          </Link>
          <br />
          <br />
          <TagList frontmatter={post.frontmatter} />
          <div
            className={classes.blogPostContent}
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          ></div>
          <Typography
            align="right"
            variant="subtitle2"
            className={classes.readMore}
          >
            <Link to={`${post.fields.slug}`}>続きを読む...</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
