import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import 'mimic'
// import {deprecated} from 'core-decorators'

import './app.css'
const msg = 'Hello World!';

import moment from 'moment'

// @deprecated
class A extends React.Component {

}

class TimeAgo extends React.Component {
    constructor(props) {
        super(props)
        this.startedAt = new Date
        this.state = {fromStart: '-'}
    }
    componentWillMount() {
        setInterval(
            this.updateFromStart
        ,5000)
    }

    updateFromStart = () => {
        const fromNow = moment(this.startedAt).fromNow()
        this.setState({
            fromStart: fromNow
        })
    }
    render() {
        return(<span>this all started...{this.state.fromStart}</span>)
    }
}
var app = (
    <div>
        <h1><TimeAgo /></h1>
        <h2>Random number from _lodash_ is {_.random(0,100)}</h2>
    </div>
)
ReactDOM.render(app, document.getElementById('app'));
