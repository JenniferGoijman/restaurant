import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Typography } from 'antd';
import Cart from './Cart';
import Tables from './Tables';
import { getAllProducts, addCart } from '../../redux/actions/products';
import { getAllSort } from '../../redux/actions/categoriessort';
import './Menu.scss'

const Menu = props => {
    useEffect(() => { getAllProducts(); getAllSort();}, [])
    const categoriesSorted = props.categorysort.sort((a, b) => a.index - b.index);
    const { Title } = Typography;

    return (
        <Row justify="center">
            <Col span={15} style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Title level={2}> Menu </Title>
                    </Row>
                    <div>
                        {categoriesSorted.map(category => {
                            return (
                            <div className="menu">
                                <h3 type="button" value={category.category._id}>{category.category.name}</h3>
                                <div className="products">
                                    {props.products?.filter(p=>p.category._id===category.category._id).map(product=> {
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
                <Tables></Tables>
            </Col>
        </Row>
    )
}

const mapStateToProps = ({ category, product, categorysort }) => ({ 
    categories:category.categories, products:product.products, categorysort:categorysort.categorysort })
export default connect(mapStateToProps) (Menu);