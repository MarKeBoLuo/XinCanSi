import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Row, Col, Layout } from 'antd'
import 'antd/dist/antd.css';
import './assets/scss/index.scss';
import Home from './pages/login/index'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
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
