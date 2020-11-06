import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  workName: {
    width: '100%',
  },
  detailsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      width: '80%',
      margin: '0 auto',
    },
  },
  tagChip: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  workChip: {
    borderColor: 'cornflowerblue',
  },
}))

export default function WorkAccordion(props) {
  const classes = useStyles()
  const { work } = props
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.workName}>
          <Typography
            display="block"
            align="center"
            className={classes.heading}
          >
            <a href={work.url} target="_blank" rel="noopener noreferrer">
              {work.name}
            </a>
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.detailsContainer}>
          <Typography
            variant="body1"
            display="block"
            align="center"
            className={classes.detailsContainerDetails}
          >
            {work.description}
          </Typography>
          <div className={classes.tagChip}>
            {work.tags.map(tag => (
              <Chip
                label={tag}
                key={tag}
                className={classes.workChip}
                variant="outlined"
              />
            ))}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
