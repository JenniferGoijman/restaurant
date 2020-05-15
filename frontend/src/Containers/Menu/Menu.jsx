import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col,  Typography } from 'antd';
import Cart from './Cart';
import { getAllProducts, addCart } from '../../redux/actions/products';
import './Menu.scss'

const Menu = props => {
    useEffect(() => {
        getAllProducts()
        .catch(console.error)
    }, [])

    const { Title } = Typography;

    return (
        <Row justify="center">
            <Col span={18} style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Title level={2}> Menu </Title>
                    </Row>
                    <div>
                        {props.categories?.map(category=> {
                            return (
                            <div className="menu">
                                <h3 type="button" value={category._id}>{category.name}</h3>
                                <div className="products">
                                    {props.products?.filter(p=>p.category._id===category._id).map(product=> {
                                        return (
                                            <button type="button" className="product" onClick={addCart.bind(this, product)}>
                                                {product.name}</button>
                                        )
                                    })}
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </Card>
            </Col>
            <Col span={6} style={{marginTop: 60}}>
                <Cart></Cart>
            </Col>
        </Row>
    )
}

const mapStateToProps = ({ category, product }) => ({ 
    categories:category.categories, products:product.products })
export default connect(mapStateToProps) (Menu);