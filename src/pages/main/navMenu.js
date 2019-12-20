import React from 'react'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

let handleClick = (e) => {
    console.log(e, '导航点击')
}

let menuData = [
    { name: '首页', key: 'main', icon: 'global' },
    { name: '工作台', key: 'working', icon: 'table' },
    { name: '中心平台', key: 'center', icon: 'qrcode' },
    { name: '个人信息', key: 'person', icon: 'team', children: [
        {
            name: '个人集合',
            key: 'personCount',
            icon: 'item',
            children: [
                { name: '个人基本信息', key: 'personBase', icon: 'qrcode' },
                { name: '密码修改', key: 'personPassword', icon: 'qrcode' },
            ]
        },
        {
            name: '个人主页',
            key: 'personMain',
            icon: 'item',
            children: [
                { name: '个人基本信息', key: 'personBase', icon: 'qrcode' },
                { name: '密码修改', key: 'personPassword', icon: 'qrcode' },
            ]
        }
    ] },
]

let menuArr = menuData.map((o, i) => {
    if (o.children) {
        return (
            <SubMenu title={
                <span>
                    <Icon type={o.icon} />
                    {o.name}
                </span>
            } key={o.key}>
                {o.children.map(k => {
                    return (
                        <Menu.ItemGroup title={
                            <span>
                                <Icon type={k.icon} />
                                {k.name}
                            </span>
                        } key={k.key}>
                            {k.children.map(i => <Menu.Item key={i.key}><Icon type={i.icon} />{i.name}</Menu.Item>)}
                        </Menu.ItemGroup>
                    )
                })}
            </SubMenu>
        )
    } else {
        return (<Menu.Item key={o.key}><Icon type={o.icon} />{o.name}</Menu.Item>)
    }
})

export default (
    <Menu onClick={handleClick} mode="horizontal">
        { menuArr }
    </Menu>
)
