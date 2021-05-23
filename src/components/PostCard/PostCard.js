import React from 'react'
import { Link } from 'gatsby'
import MarkdownArticle from '../MarkdownArticle'
import TagList from '../TagList'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import 'katex/dist/katex.min.css'

const useStyles = makeStyles({
  root: {
    margin: '0 5% 30px',
  },
  posts: {
    marginTop: '50px',
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
      <div className={classes.posts}>
        <span className={classes.date}>{post.frontmatter.date}</span>
        <br />
        <Link to={post.fields.slug}>
          <Typography
            variant="h4"
            display="inline"
            color="#2b2b2b"
            className={classes.postTitleLink}
          >
            {post.frontmatter.title}
          </Typography>
        </Link>
        <br />
        <TagList frontmatter={post.frontmatter} />
        <MarkdownArticle html={post.excerpt} />
        <Typography
          align="right"
          variant="subtitle2"
          className={classes.readMore}
        >
          <Link to={`${post.fields.slug}`}>続きを読む...</Link>
        </Typography>
      </div>
    </div>
  )
}
