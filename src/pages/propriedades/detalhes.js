import * as React from "react"

import JSONData from "../../../content/properties.json"

import './internal-pages.scss'
import { Container, Row, Col } from "reactstrap"

import groupIcon from "../../images/icons/group.svg"
import cleaningIcon from "../../images/icons/cleaning.svg"
import handIcon from "../../images/icons/hand.svg"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import Breadcrumb from "../../components/Breadcrumb"


const IndexPage = () => {

  const propertyData = JSONData.content[0];
  return (
    <Layout>
      <Seo title="detalhes da propriedade" />
      <div className="details-page-wrapper">

        <Container>

          <Row>
            <Breadcrumb />
          </Row>
          <Row>
            <Col md={4}>
              <div className="datails-page-card">
                <div><img src={propertyData.thumbnail} /></div>
                <strong>Localização</strong>
                <p className="text-muted">{propertyData.adress}</p>
                <a href="/" className="view-location">Ver Localização</a>
              </div>
            </Col>
            <Col>
              <h1>{propertyData.title}</h1>
              <span className="text-muted">{propertyData.adress} - {propertyData.description}</span>
              <p>
                <strong className="status">
                {propertyData.rooms}
                <span> ⬤ {propertyData.status}</span>
              </strong>
              </p>

              <Row className="info-box-wrapper">
                <Col md={4}>
                  <div className="info-box">
                    <p>Máx. de hospedes</p>
                    <img className="info-icon" src={groupIcon} alt=" " width="24px" />
                    {propertyData.guests_limit.substring(0, 2)}
                  </div>
                </Col>
                <Col md={4}>
                  <div className="info-box">
                    <p>Taxa de limpeza</p>
                    <img className="info-icon" src={cleaningIcon} alt=" " width="24px" />
                    R$ {propertyData.cleaning_tax}
                  </div>
                </Col>
                <Col md={4}>
                  <div className="info-box">
                    <p>Caução</p>
                    <img className="info-icon" src={handIcon} alt=" " width="24px" />
                    R$ {propertyData.deposit}
                  </div>
                </Col>
              </Row>

              <div className="confort-list-wrapper">
                <h4>Comodidades</h4>
                {propertyData.confort.map((confList, index, array) => {
                  return(
                    <li>{confList}</li>
                  )
                })}
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </Layout>
  )
}

export default IndexPage
