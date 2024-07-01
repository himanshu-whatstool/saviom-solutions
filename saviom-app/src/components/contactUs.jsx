import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"


export const ContactUs = () => {
  return (
    <section>
      <ContactBanner />
      <ContactForm />
    </section>
  )
}

export const ContactBanner = () => {
  return (
    <section>
      <Container fluid>
        <div style={{ backgroundImage: `url("./images/contact-banner.webp")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "32vh", margin: '0 -5px' }} >
          <h2 style={{ fontSize: '44px', fontWeight: 'bold', color: '#293745', textAlign: 'center', paddingTop: '75px' }} >Start a conversation today!</h2>
          <p style={{ border: '3px solid red', width: '5%', textAlign: 'center' }}></p>
        </div>
      </Container>
    </section >
  )
}

export const ContactForm = () => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const handleMobile = (val) => {
    let checkedVal = val?.replace(/[^0-9]/ig, '')
    setMobile(checkedVal)
  }
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')


  const [formStatus, setFormStatus] = useState(true)
  const validateForm = () => {
    if (name?.length !== 0 && email?.length !== 0 && mobile?.length !== 0 && company?.length !== 0 && message?.length !== 0) {
      setFormStatus(false)
    } else {
      setFormStatus(true)
    }
  }
  useEffect(() => {
    validateForm()
  }, [name, email, mobile, company, message])

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      mobile,
      company,
      message
    }
    setName(''), setMobile(''), setEmail(''), setMessage(''), setCompany('')
    console.log('submit', payload);
  }
  const inpstyle = { background: '#009999', outline: 'none', border: 'none', borderBottom: '2px solid white' }

  return (
    <section>
      <p style={{ textAlign: 'center', lineHeight: 2, fontSize: '22px', margin: '50px 0' }} >Want to try out our software solutions? Or speak to one of our sales representatives who can quickly<br /> understand your requirements? <strong>Fill out the form below to register your interest!</strong></p>
      <Container style={{ marginBottom: '80px' }} >
        <Row>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section>
              <img src="./images/contact-main.webp" alt="saviom" className='img-fluid' />
            </section>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section>
              <div style={{ background: '#009999', padding: '40px', height: '100vh' }}>
                <h2 className="text-white pt-5" style={{ fontSize: '34px', fontWeight: 'bold' }}>Contact Us</h2>
                <div style={{ border: '3px solid #fff', width: '12%' }}></div>
                <div className="mb-3 mt-3">
                  <label className='text-white' htmlFor="nameid">Name</label>
                  <input style={inpstyle} value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="nameid" type="text" />
                </div>
                <div className="mb-3">
                  <label className='text-white' htmlFor="emailid">Email Address</label>
                  <input style={inpstyle} className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="emailid" type="email" />
                </div>
                <div className="mb-3">
                  <label className='text-white' htmlFor="phoneid">Phone Number</label>
                  <input style={inpstyle} className="form-control" value={mobile} onChange={(e) => handleMobile(e.target.value)} id="phoneid" type="tel" />
                </div>
                <div className="mb-3">
                  <label className='text-white' htmlFor="companyid">Company Name</label>
                  <input style={inpstyle} className="form-control" id="companyid" value={company} onChange={(e) => setCompany(e.target.value)} type="text" />
                </div>
                <div className="mb-3">
                  <label className='text-white' htmlFor="msgid">Message</label>
                  <textarea style={inpstyle} className="form-control" id="msgid" value={message} onChange={(e) => setMessage(e.target.value)} type="text" ></textarea>
                </div>
                <button onClick={() => handleSubmit()} disabled={formStatus ? true : false} className="btn btn-sm text-center w-100 mt-4" style={{ color: "#009999", fontWeight: 'bold', background: '#fff', padding: '18px 0', fontSize: '22px' }}>Request Free Trail</button>

              </div>
            </section>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

