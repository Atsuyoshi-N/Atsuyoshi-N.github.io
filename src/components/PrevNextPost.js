import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core'

export default function PrevNextPost({ prev, next }) {
  return (
    <Box mt={5} display="flex" justifyContent={prevNextButtonPos(prev, next)}>
      {prev === null ? null : PrevNextLink(prev, 'prev')}
      {next === null ? null : PrevNextLink(next, 'next')}
    </Box>
  )
}

const PrevNextLink = ({ fields, frontmatter }, direction) => {
  return (
    <Box display="flex" flexDirection="column" style={{ width: '40%' }}>
      <Typography gutterBottom variant="body2" component="h6">
        {direction === 'prev' ? '前の記事' : '次の記事'}
      </Typography>
      <Card style={{ width: '100%', height: '100%' }}>
        <CardActionArea
          href={fields.slug}
          style={{ display: 'flex', alignItems: 'stretch' }}
        >
          <CardContent style={{ flex: '1' }}>
            <Typography variant="body2" component="p">
              {frontmatter.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

const prevNextButtonPos = (prev, next) => {
  if (prev !== null && next !== null) return 'space-between'
  else if (prev === null && next === null) return 'space-between'
  else if (prev !== null) return 'flex-start'
  else return 'flex-end'
}
