import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const OfficeHours = () => (
  <section className="page-section bg-primary text-white" id="contact" id="officeHours">
    <div className="container">
      <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Office hours</h2>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-sm-8">
          <h4 className="page-section-heading text-center text-uppercase text-white mb-0">
          <span style={{fontSize: 40}}>Mondays: </span><span style={{fontSize: 20}}>10:15-11:00<span style={{fontSize: 10}}>AM</span> room 303 CTI building</span><br/>
          <span style={{fontSize: 40}}>Tuesdays: </span><span style={{fontSize: 20}}>10:15-11:00<span style={{fontSize: 10}}>AM</span> room 301 CTI building</span><br/>
          </h4>
        </div>
      </div>
    </div>
  </section>
)

export default OfficeHours