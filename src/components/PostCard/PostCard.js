import React from 'react'
import { Link } from 'gatsby'
import TagList from '../TagList'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
// import Card from 'antd/lib/card'
// import 'antd/lib/card/style/css'
import 'katex/dist/katex.min.css'

const useStyles = makeStyles({
  root: {
    margin: '0 10% 30px',
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
          <br />
          <Link to={post.fields.slug}>
            <Typography
              variant="h4"
              display="inline"
              color="textSecondary"
              className={classes.postTitleLink}
            >
              {post.frontmatter.title}
            </Typography>
          </Link>
          <br />
          <br />
          <TagList frontmatter={post.frontmatter} />
          <Typography>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></div>
          </Typography>
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
