import React, { Component } from 'react'
import { Button } from 'antd'
let data = [
    { name: '数组第一项', id: 333, },
    { name: '数组第二项', id: 111, }
]
export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    output(obj, index) {
        console.log(obj, index)
    }
    render() {
        let menu = data.map((o ,i) => 
            <section className="cusList" key={i}>
                <span>{o.name}</span>
                <Button type="primary" onClick={this.output.bind(this, o, i)}>
                    点击输出
                </Button>
            </section>
        )
        return (
            <section>
                <h1>React world</h1>
                <address>四川省成都市高新区孵化园</address>
                <p>Welcome to react world.</p>
                <section>{ menu }</section>
            </section>
        )
    }
}