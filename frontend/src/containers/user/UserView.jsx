import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Row, Col, notification, Card, Button } from 'antd';

import { logout}  from '../../redux/actions/users'


const UserView = ({user, history} ) => {

    useEffect(() => {//componentDidMount() equivalente
        if(!user.user){
            notification.error({message:'No está autorizado', description:'Debe iniciar sesión para ingresar a esta sección'})
            history.push('/login')
        }
    }, [])

    const disconect = () =>{
        logout()
        .then( res=>{
            notification.warning({message:'Desconectado',description:'Se ha desconectado de manera satisfactoria'})
            history.push('/login')
        })
    }

    return (
        <div>
            <Row justify="center" align="middle" style={{height: 400}}>
                <Col span={12}>
                    <Card className="profileContainer animated bounceInRight">
                        {user.user && <React.Fragment>
                            <div className="userHeader">
                            Home Works
                            <div className="userData">
                                <span>{user.user.username}</span>
                            </div>
                            <Row justify="center">
                                <Col>
                                    <Button onClick={disconect}>LogOut</Button>
                                </Col>
                            </Row>
                            </div>
                            <div className="comments">
                            </div>
                        </React.Fragment>}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(UserView);
