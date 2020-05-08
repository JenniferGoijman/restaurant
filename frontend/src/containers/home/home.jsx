import React from 'react'
import { connect } from 'react-redux'
import { notification } from 'antd';


const Home = ({user, history} ) => {  
    if(!user.user){
        notification.warning({message:'Desconectado',description:'Debe iniciar secion para ingresar a esta seccion'})
        history.push('/login')
    }else{
        history.push('/userView')
    }
    return (
        <div className="App">   
        </div>
      );
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Home);
