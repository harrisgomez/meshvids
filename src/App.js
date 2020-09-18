import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {
    doUploadVideo
} from './actions/action-creators';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <h1>Meshvids</h1>
                <h2>Link your videos. Control the order. Customize. Hit Play!</h2>

                {/* EDITOR */}

                <button onClick={() => doUploadVideo()} value={'Upload'}>Upload Episodes</button>

                <video width="320" height="240" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />Your browser does not support the video tag.
                </video>

                {/* PLAY REEL */}


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