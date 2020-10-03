import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VideoList } from './js/containers/VideoList';
import './App.css';
import 'tachyons';

// TODO Arrange videos horizontally

import {
    doUploadVideo
} from './actions/action-creators';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <h1>Meshvids</h1>
                <h2>Link your videos. Customize the order. Hit Play!</h2>

                <VideoList />

            </div>
        );
    }
}

const mapState = state => ({
    video: state.video.videoInfo
});

const mapDispatch = dispatch => ({
    handleUploadVideo: () => dispatch(doUploadVideo())
});

export default connect(mapState, mapDispatch)(App);