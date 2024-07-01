import React from "react"
import { Container, Row, Col } from "react-bootstrap"


export const About = () => {
  return (
    <section>
      <AboutOne />
      <AboutTwo />
      <AboutThree />
      <Coptright />
    </section>
  )
}

export const AboutOne = () => {
  return (
    <section>
      <Container fluid>
        <div style={{ backgroundImage: `url("./images/pmentre-about-us-page-banner.webp")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "32vh", margin: '0 -5px' }} >
          <Container>
            <h2 style={{ fontSize: '44px', fontWeight: 'bold', color: '#293745', paddingTop: '75px' }} >PMEntire Helps Redefine Your</h2>
            <h2 style={{ fontSize: '40px', color: '#009999', fontWeight: 'bold' }} >Business Efficiency</h2>
            <p style={{ border: '3px solid red', width: '5%', textAlign: 'center' }}></p>
          </Container>
        </div>
      </Container>
    </section >
  )
}
export const AboutTwo = () => {
  return (
    <section>
      <Container style={{ marginTop: '120px' }}>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section>
              <img src="./images/about-pmentire-img.webp" alt="saviom" className='img-fluid' />
            </section>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section style={{ marginLeft: '40px', marginTop: '34px' }}>
              <h2>About PMEntire</h2>
              <p style={{ fontSize: '22px', color: '#273041' }}>PMEntire software empowers professional service organizations to reach new levels of efficiency and profitability. With over 20 years of industry experience, our PSA tool is designed to help businesses overcome the challenges of the 2020s and beyond. Some of them include global competition, market volatility, business uncertainties, and more.  PMEntire specializes in PSA software and it is a part of the Saviom group of companies. Saviom has catered to the needs of several Fortune 500 companies across 50+ countries. Some of our notable customers include Siemens, Fujitsu, DHL, Honeywell, Global Wind Services, Alix Partner, and many more.          </p>
            </section>
          </Col>
        </Row>
      </Container>
    </section >
  )

}

export const AboutThree = () => {
  return (
    <section style={{ background: '#faebd7', paddingTop: '120px', marginTop: '120px' }}>
      <Container>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section style={{ marginLeft: '40px', marginTop: '34px' }}>
              <h2>History</h2>
              <p style={{ fontSize: '22px', color: '#273041' }}>Saviom is the brainchild of 4 passionate and visionary entrepreneurs who aspired to develop a product for increasing business efficiency. Starting as a bootstrapped business in 1999 from a Sydney suburban garage, today we are a name to reckon with in resource management. Riding on the success of our ERM solution, we were motivated to come up with our next offering in the PSA space. There is constant growth in this space, and we believe we can make a difference in solving the pertinent challenges faced by professional service organizations today.</p>
            </section>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section>
              <img src="./images/history-about-us.webp" alt="saviom" className='img-fluid' />
            </section>
          </Col>
        </Row>
        <Row style={{ padding: '120px 0' }}>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section>
              <img src="./images/Our-Innovation-about-us.webp" alt="saviom" className='img-fluid' />
            </section>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <section style={{ marginLeft: '40px', marginTop: '34px' }}>
              <h2>Our Innovation</h2>
              <p style={{ fontSize: '22px', color: '#273041' }}>At PMEntire, we constantly innovate and develop futuristic solutions to help our customers achieve greater operational efficiency and productivity. Besides, our intuitive solutions enable businesses to forecast and be proactive. Starting as pioneers in resource management, today, our products are several years ahead of the market. We foster an innovative culture wherein out-of-the-box ideas are encouraged and evaluated. Our range of products is highly configurable to fit every customer's unique business needs. Additionally, our future releases are decided after carefully understanding various client-centric challenges.</p>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export const Coptright = () => {
  return (
    <section style={{ background: '#273041', padding: '24px 0' }}>
      <Container>
        <small className="text-white pt-2">© 2022. PMEntire Pvt. Ltd. All rights are reserved.</small>
      </Container>
    </section>
  )
}