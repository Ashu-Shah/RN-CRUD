import React, { Component } from 'react';
import {YellowBox} from 'react-native';
import Home from './screens/Home/Home';
import Navigator from './config/routes';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    "Module RCTImageLoader",
    'Remote debugger is in a background tab'
]);

export default class App extends Component<Props> {
    render() {
        return (
            <Navigator/>
        );
    }
}
