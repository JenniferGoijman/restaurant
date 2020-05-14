import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Row, Col, notification, Card, Button } from 'antd';

import { getAll}  from '../../../redux/actions/users'


const AdminUsers = ({users}) => {

    useEffect(() => { getAll(); }, []);

    return (
        <div>
            { users && <span> usuarios en reducer</span>}
        </div>
    )
}


const mapStateToProps = state => ({ users: state.user.users });
export default connect(mapStateToProps)(AdminUsers);


