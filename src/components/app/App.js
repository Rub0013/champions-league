import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        );
    }
}

export default App;
