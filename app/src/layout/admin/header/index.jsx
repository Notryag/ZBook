import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginout } from '@/redux/user/actions'

import { Button, Dropdown, Menu, Avatar } from 'antd'
import logo from '@/assets/images/avatar.jpg'

function AdminHeader(props) {
  const dispatch = useDispatch()
  const history = useNavigate()

  const userInfo = useSelector(state => state.user)

  const menu = (
    <Menu className='menu'>
      <Menu.Item>
        <span onClick={e => history('/')}>
          返回主页
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={e => {
            dispatch(loginout())
              history('/')
          }}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <div>
        {/* <img src={logo} alt='pvmed' /> */}
        <span className='header-title'>Blog Manager</span>
        <Dropdown overlay={menu} className='header-dropdown'>
          <a className='ant-dropdown-link'>
            {/*{userInfo.username} <Icon type='down' />*/}
          </a>
        </Dropdown>
      </div>
    </>
  )
}

export default AdminHeader
