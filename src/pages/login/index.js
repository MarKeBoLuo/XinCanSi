import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import DropMenu from '../main/dropMenu'
import NavMenu from '../main/navMenu'
import FormArea from '../main/formArea'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.data = [
            { name: '数组第一项', id: 333, },
            { name: '数组第二项', id: 111, }
        ]
    }
    output(obj, index) {
        console.log(obj, index)
    }
    render() {
        let menuList = this.data.map((o ,i) => 
            <section className="cusList" key={o.id}>
                <span>{o.name}</span>
                <Button type="primary" size="small" onClick={this.output.bind(this, o, i)}>
                    <Icon type="eye" />
                    点击输出
                </Button>
            </section>
        )
        return (
            <section>
                <h2 className="text-i-10">React world</h2>
                <section className="content">
                    { menuList }
                    <h2>Antd World</h2>
                    <section>{ DropMenu }</section>
                    <h2>导航菜单</h2>
                    <section>{ NavMenu }</section>
                    <h2>表单</h2>
                    <section>{FormArea}</section>
                </section>
            </section>
        )
    }
}