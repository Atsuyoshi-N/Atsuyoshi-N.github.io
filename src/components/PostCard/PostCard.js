import React from 'react'
import { Link } from 'gatsby'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import 'katex/dist/katex.min.css'

const PostCard = ({ post }) => (
  <div>
    <Card
      marginBottom="30px"
      title={
        <div>
          <Link
            to={post.fields.slug}
            style={{ color: 'black', fontWeight: 'bold' }}
          >
            {post.frontmatter.title}
          </Link>
          <span
            style={{
              float: 'right',
              color: 'grey',
            }}
          >
            {post.frontmatter.date}
          </span>
        </div>
      }
    >
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Card>
  </div>
)

export default PostCard
