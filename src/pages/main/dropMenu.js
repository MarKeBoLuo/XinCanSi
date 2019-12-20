import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
const menu = [
    { name: '一级A', id: 11 },
    { name: '一级B', id: 22, children: [
        { name: '二级BA', id: 21 },
        { name: '二级BB', id: 22 },
        { name: '二级BC', id: 23 },
    ] },
    { name: '一级C', id: 33, children: [
        { name: '二级CA', id: 31 },
        { name: '二级CB', id: 32 },
        { name: '二级CC', id: 33 },
    ] },
]
const { SubMenu } = Menu
let menuArr = menu.map((o, i) => {
    if (o.children) {
        return (
            <SubMenu title={o.name} key={o.id}>
                {o.children.map(k => <Menu.Item key={k.id}>{k.name}</Menu.Item>)}
            </SubMenu>
        )
    } else {
        return (<Menu.Item key={o.id}>{o.name}</Menu.Item>)
    }
})
let dropMenuCick = (obj) => {
    console.log(obj, '当前点击的对象')
}
const menuRes = <Menu onClick={dropMenuCick}>{menuArr}</Menu>
const resDom = (
    <Dropdown overlay={menuRes}>
        <a className="ant-dropdown-link" href="#">
            下拉菜单 <Icon type="down" />
        </a>
    </Dropdown>
)
export default resDom
