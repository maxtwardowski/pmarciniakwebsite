import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const message = `
  Z powodów zdrowotnych zmuszony jest odwołać konsultacje w dniu 12.11.2019 (wtorek).
  W przypadku konsultacji w dniu 13.11.2019 zainteresowane osoby proszę o wiadomość.
  Osoby wybierające się w kwestiach formalnych (podpisanie formularza) proszone są o dostarczenie go do sekretariatu DMCS (jutro lub w czwartek dokument podpiszę).
  Proszę o przekazanie informacji zainteresowanym osobom.
`

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
      <div class="row justify-content-md-center">
        <div class="col-sm-8">
          <p class="lead" style={{textAlign: 'justify'}}>
            {message}
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default ForStudents