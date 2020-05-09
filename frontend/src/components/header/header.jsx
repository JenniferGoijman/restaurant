import React from 'react'
import { connect } from 'react-redux'
import './Header.scss'
import LogBar from './logBar';
import UnlogBar from './unlogBar';

const Header = ({user}) => {
    
    return (
        <header className="homeHeader animated zoomIn ">
            { user.user ? 
                <LogBar/>
                :
                <UnlogBar/>
            }
        </header>    
    )
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Header);