import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const ForStudents = () => (
  <section className="page-section" id="contact">
    <div className="container">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">For students</h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
        </div>
      </div>
    </div>
  </section>
)

export default ForStudents