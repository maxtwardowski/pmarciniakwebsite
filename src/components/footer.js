import * as React from 'react'

const Footer = () => (
  <footer className="footer text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img src={require('../tul.jpg')} style={{marginBottom: 16, width: 80}} />
          <h4 className="text-uppercase mb-4">PhD Paweł Marciniak</h4>
          <p className="lead mb-0">Lodz University of Technology<br />
            Department of Microeletronics and applied Computer Science<br />
            <a href="mailto:pmarciniak@dmcs.pl">pmarciniak@dmcs.pl</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer