import * as React from 'react'
import { Link, animateScroll as scroll } from "react-scroll"
import {Popper, Fade, Paper, makeStyles, createStyles, TextField, CircularProgress, ClickAwayListener} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLockOpen, faLock} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => 
  createStyles({
    grow: {
      flexGrow: 1,
    },
    popperPaper: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(3),
      padding: theme.spacing(2),
      width: 300,
    },
    progressCircle: {
      color: 'white',
      margin: theme.spacing(0),
      padding: theme.spacing(0),
    },
  })  
)

const Navbar = () => {
  const classes = useStyles()
  const [anchorRef, setAnchorRef] = React.useState(null)
  const [loggingIn, setLoggingIn] = React.useState(false)
  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById('mainNav')

    if (distanceY > shrinkOn) {
      headerEl.style.height = '70px'
    } else {
      headerEl.style.height = '100px'
    }
  }
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  React.useLayoutEffect(() => window.addEventListener("scroll", resizeHeaderOnScroll), []) 

  const handleLogin = () => {
    setLoggingIn(true)
    setTimeout(() => {
      setLoggingIn(false)
      setAnchorRef(null)
      window.location.reload()
    }, 3000)
  }

  const SignInPopper = (
    <Popper open={Boolean(anchorRef)} anchorEl={anchorRef} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <ClickAwayListener onClickAway={() => {
            setAnchorRef(null)
            setLoggingIn(false)
          }}>
            <Paper className={classes.popperPaper}>
                <div>
                  <TextField
                    fullWidth
                    margin="normal"
                    variant="filled"
                    label="Username"
                    color="secondary"
                    onChange={e => setUsername(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    variant="filled"
                    label="Password"
                    type="password"
                    color="secondary"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                  <button 
                    className="btn btn-primary" 
                    id="sendMessageButton"
                    onClick={handleLogin}
                    style={{width: 65, height: 50, marginTop: 4}}
                  >
                    {loggingIn ? (
                      <CircularProgress size={30} className={classes.progressCircle} />
                    ) : (
                      <FontAwesomeIcon icon={faLockOpen} />
                    )}
                  </button>
                </div>
            </Paper>
          </ClickAwayListener>
        </Fade>
      )}
    </Popper>
  )

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav" style={{transition: '0.5s'}}>
        <div className="container">
          <Link
            activeClass="active"
            to="app"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-brand js-scroll-trigger"
          >
            PhD Paweł Marciniak
          </Link>
          <button 
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarResponsive" 
            aria-controls="navbarResponsive" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  activeClass="active"
                  to="forStudents"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  For students
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  activeClass="active"
                  to="officeHours"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Office hours
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={e => anchorRef ? setAnchorRef(null) : setAnchorRef(e.currentTarget)}>
                  <FontAwesomeIcon icon={faLock} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {SignInPopper}
    </>
  )
}

export default Navbar