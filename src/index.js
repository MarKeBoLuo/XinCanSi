import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import './assets/scss/index.scss';
import Home from './pages/login/index'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <p>welcome to React</p>
                <section id="home"></section>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App/>, document.getElementById('root'))
ReactDom.render(<Home></Home>, document.getElementById('home'))
