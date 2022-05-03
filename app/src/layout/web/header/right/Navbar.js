import React from 'react'
import PropTypes from 'prop-types'

import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

const navList = [
    {
        key: 'home',
        label: '首页',
        link: '/'
    },
    {
        key: 'edit',
        label: '归档',
        link: '/archives'
    },
    {
        key: 'folder',
        label: '分类',
        link: '/categories'
    },
    {
        key: 'user',
        label: '关于',
        link: '/about'
    }
]
const NavBar = (props) => {
    const location = useLocation()
    const { mode = 'horizontal' } = props
    const [ current, setCurrent ] = React.useState('home');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Menu className='header-nav' mode={mode} onClick={onClick} selectedKeys={[ current ]} items={navList}/>
        </>
        // <Menu mode={mode} selectedKeys={[location.pathname]} className='header-nav'>
        //     {navList.map(nav => (
        //         <Menu.Item key={nav.link}>
        //             <Link to={nav.link}>
        //                 <span className='nav-text'>{nav.title}</span>
        //             </Link>
        //         </Menu.Item>
        //     ))}
        // </Menu>
    )
}

export default NavBar
