import React from 'react'
import ContentTitle from './ContentTitle'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { Link } from 'gatsby'

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    borderCollapse: 'separate',
    padding: '5% 20%',
  },
})

function createData(name, title, url) {
  return { name, title, url }
}

const rows = [
  createData('所属', '横浜国立大学理工学部数物電情情報系学科', ''),
  createData('GitHub', 'Atsuyoshi-N', 'https://github.com/Atsuyoshi-N'),
  createData('Twitter', '@a244_n', 'https://twitter.com/a244_n'),
  createData('ブログ', 'a244_note/blog', '/blog'),
  createData(
    'はてなブログ',
    "acchan's blog",
    'https://acchann.hatenablog.com/'
  ),
]

export default function SelfIntroduction() {
  const classes = useStyles()
  return (
    <>
      <ContentTitle title="Profile" />
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {row.url ? (
                <TableCell>
                  {row.url === '/blog' ? (
                    <Link to={row.url}>{row.title}</Link>
                  ) : (
                    <a href={row.url} target="_blank" rel="noopener noreferrer">
                      {row.title}
                    </a>
                  )}
                </TableCell>
              ) : (
                <TableCell>
                  <Typography>{row.title}</Typography>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
