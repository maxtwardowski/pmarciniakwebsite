import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Masthead = () => (
  <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      <img className="masthead-avatar mb-5" src="../avatar.png" alt="" />
      <h1 className="masthead-heading text-uppercase mb-0">PhD Paweł Marciniak</h1>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <p className="masthead-subheading font-weight-light mb-0">Lodz University of Technology</p>
    </div>
  </header>
)

export default Masthead