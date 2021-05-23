import * as React from 'react'

import JSONData from "../../../content/properties.json"

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import './card.scss'

const CardProperty = () => {
    return (
        <Container>
            <Row>
                {JSONData.content.map((data, index) => {

                    const fiveDaysWeekValue = data.daily * 5;
                    const totalValue = data.daily + data.cleaning_tax + data.deposit;
                    const totalValueDiscount = totalValue - (totalValue * 0.1);

                    return (
                        <Col>
                            <Card>
                                <CardImg top src={data.thumbnail} alt='' />
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
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CardProperty