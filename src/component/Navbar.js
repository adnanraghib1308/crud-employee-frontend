import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import {Menu} from 'antd';
import {isAutheticated, signout} from '../authapicalls';

const Navbar = ({history}) => {
    return (
        <div>
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1" ><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/employee/list'>List</Link></Menu.Item>
                {!isAutheticated() && <Menu.Item key="3"><Link to='/auth/login'>Log in</Link></Menu.Item>}
                {!isAutheticated() && <Menu.Item key="4"><Link to='/auth/signup'>Sign up</Link></Menu.Item>}
                {isAutheticated() && <Menu.Item key="5" onClick = {()=> {
                    signout()
                }}><Link to = "/">Sign out</Link></Menu.Item>}
            </Menu>
        </div>
    )
}

export default Navbar;
