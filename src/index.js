import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Row, Col, Layout } from 'antd'
import 'antd/dist/antd.css';
import './assets/scss/index.scss';
import Home from './pages/login/index'

/**
 * mount 挂载
 * update 更新
 * unmount 卸载
 */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * componentWillMount
     * 即将挂载
     */
    componentWillMount() {}
    /**
     * componentDidMount
     * 挂载完成
     */
    componentDidMount() {}
    /**
     * componentWillUpdate
     * @param {*} nextProps 即将要更新的属性
     * @param {*} nextState 即将要更新的状态
     */
    componentWillUpdate(nextProps, nextState) {}
    /**
     * componentDidUpdate
     * 页面更新完毕
     * @param {*} prevProps 更改的属性
     * @param {*} prevState 更改的状态
     */
    componentDidUpdate(prevProps, prevState) {}
    /**
     * shouldComponentUpdate
     * 默认每一次的修改都触发页面更新，此函数用于干预是否要更新，用于性能优化
     */
    shouldComponentUpdate() {}
    /**
     * componentWillUnmount
     * 卸载
     */
    componentWillUnmount() {}
    render() {
        const { Header, Footer, Content } = Layout
        return (
            <div>
                <Layout>
                    <Header className="headerInfo">
                        <h1 className="text-center">Welcome To React</h1>
                    </Header>
                    <Content>
                        <section id="home"></section>
                    </Content>
                    <Footer className="text-center">
                        这是底部信息
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App/>, document.getElementById('root'))
ReactDom.render(<Home></Home>, document.getElementById('home'))
