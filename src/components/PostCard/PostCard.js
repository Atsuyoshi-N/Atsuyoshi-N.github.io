import React from 'react'
import { Link } from 'gatsby'
import TagList from '../TagList'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import 'katex/dist/katex.min.css'

const useStyles = makeStyles({
  root: {
    margin: '0 10% 30px',
  },
  postTitleLink: {
    color: 'cornflowerblue',
    textDecoration: 'none',
    '&:hover': {
      borderBottom: '1px solid cornflowerblue',
    },
  },
})

export default function PostCard({ post }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card
        marginBottom="30px"
        title={
          <div>
            <span
              style={{
                color: 'grey',
                marginBottom: '10px',
              }}
            >
              {post.frontmatter.date}
            </span>
            <br />
            <br />
            <Link to={post.fields.slug}>
              <Typography
                variant="h4"
                display="inline"
                className={classes.postTitleLink}
              >
                {post.frontmatter.title}
              </Typography>
            </Link>
          </div>
        }
      >
        <TagList frontmatter={post.frontmatter} />
        <Typography>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          ></div>
        </Typography>
        <Typography align="right" style={{ marginTop: '15px' }}>
          <Link to={`${post.fields.slug}`}>続きを読む</Link>
        </Typography>
      </Card>
    </div>
  )
}

// const PostCard = ({ post }) => (
//   <div>
//     <Card
//       marginBottom="30px"
//       title={
//         <div>
//           <Link
//             to={post.fields.slug}
//             style={{ color: 'black', fontWeight: 'bold' }}
//           >
//             {post.frontmatter.title}
//           </Link>
//           <span
//             style={{
//               float: 'right',
//               color: 'grey',
//             }}
//           >
//             {post.frontmatter.date}
//           </span>
//         </div>
//       }
//     >
//       <div
//         className="blog-post-content"
//         dangerouslySetInnerHTML={{ __html: post.html }}
//       />
//     </Card>
//   </div>
// )

// export default PostCard
