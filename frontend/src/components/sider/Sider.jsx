import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Siderbar({user}) {

    return (
       <div>
           menu works
       </div>   
    )
  }
  
  const mapStateToProps = state => ({ user: state.user });
  export default connect(mapStateToProps)(Siderbar);