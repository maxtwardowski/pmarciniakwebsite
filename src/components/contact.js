import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {CircularProgress, makeStyles, createStyles, Tooltip, TextField} from '@material-ui/core'

const useStyles = makeStyles(theme => 
  createStyles({
    progressCircle: {
      color: 'white',
      margin: theme.spacing(0),
      padding: theme.spacing(0),
    },
  })
)

const Contact = () => {
  const classes = useStyles()
  const [emailAddress, setEmailAddress] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [messageSent, setMessageSent] = React.useState(false)

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form name="sentMessage" id="contactForm">
              <TextField
                label="Email address"
                margin="normal"
                variant="filled"
                fullWidth
                color="secondary"
              />
              <TextField
                label="Message"
                margin="normal"
                variant="filled"
                fullWidth
                color="secondary"
                multiline
                rows="8"
              />
              <div className="form-group" style={{display: 'flex'}}>
                <div style={{flexGrow: 1}}/>
                <button 
                  className="btn btn-primary" 
                  id="sendMessageButton"
                  onClick={e => {
                    e.preventDefault()
                    setMessageSent(true)
                  }}
                  style={{width: 80, height: 60}}
                >
                  {messageSent ? (
                    <CircularProgress size={30} className={classes.progressCircle} />
                  ) : (
                    <Tooltip title="Send">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </Tooltip>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact