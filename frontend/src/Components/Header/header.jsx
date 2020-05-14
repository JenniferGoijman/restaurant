import React from 'react'
import { connect } from 'react-redux'
import './Header.scss'
import LogBar from './LogBar';
import UnlogBar from './UnlogBar';

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