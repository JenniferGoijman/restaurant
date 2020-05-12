import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col,  Typography } from 'antd';

const Menu = props => {
    console.log(props);
    const { Title } = Typography;

    return (
        <Row justify="center">
            <Col span={18} style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Title level={2}> Menu </Title>
                    </Row>
                    <div>
                        {props.category.categories?.map(category=> {
                            return (
                            <div>
                                {/* agregar un onClick al boton para agregar a order */}
                                <h3 type="button" value={category._id}>{category.name}</h3>
                                {props.product.products?.filter(p=>p.category._id===category._id).map(product=> {
                                    return (
                                        <button type="button" value={product._id}>{product.name} €{product.price}</button>
                                    )
                                })}
                            </div>
                            )
                        })}
                    </div>
                </Card>
            </Col>
            <Col span={6} style={{marginTop: 60}}>
                <h1> Pedido </h1>
                {/* mostrar productos de order*/}
            </Col>
        </Row>
    )
}

const mapStateToProps = (dataStore) => ({...dataStore});
export default connect(mapStateToProps) (Menu);