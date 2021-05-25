import * as React from 'react'

import { Link } from 'gatsby'

import JSONData from "../../../content/properties.json"

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Row,
    Col
} from 'reactstrap';
import './card.scss'

const CardProperty = () => {
    return (
        <Container className="card-wrapper">
            <h1>Todos os imóveis</h1>
            <p className="text-muted">200 imóveis</p>
            <Row>
                {JSONData.content.map((data, index) => {

                    const fiveDaysWeekValue = data.daily * 5;
                    const totalValue = data.daily + data.cleaning_tax + data.deposit;
                    const totalValueDiscount = totalValue - (totalValue * 0.1);

                    return (
                        <Col md={4}>
                            <Link to="/propriedades/detalhes" className="card-link">
                                <Card>
                                    <div className="card-img">
                                        <CardImg top src={data.thumbnail} alt={data.name} />
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5">{data.title}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                                            {data.adress} . {data.guests_limit} . {data.rooms}
                                        </CardSubtitle>
                                        <CardText>
                                            <span>Valor da diária</span> <span>R$ {data.daily} / noite</span>
                                        </CardText>
                                        <CardText>
                                            <span>Total 5 diárias</span> <span>R$ {fiveDaysWeekValue}</span>
                                        </CardText>
                                        <CardText>
                                            <span>Taxa de limpeza</span> <span>R$ {data.cleaning_tax}</span>
                                        </CardText>
                                        <CardText>
                                            <span>Caução</span> <span>R$ {data.deposit}</span>
                                        </CardText>
                                        <CardText>
                                            <strong>Total</strong>
                                            <div>
                                                <span>R$ {totalValue} </span>| <strong className="green-text">R$ {totalValueDiscount}</strong>
                                            </div>
                                        </CardText>
                                        <p className="discount-tag green-text">à vista</p>

                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CardProperty