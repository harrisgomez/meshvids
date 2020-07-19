import React, { Component } from 'react';
import './App.css';
// import Video from './js/containers/VideoContainer';
import { VideoContainer } from './js/containers/VideoContainer';
import { VideoForm } from './js/components/VideoForm';

class App extends Component {
    state = {
        videoIds: []
    }

    getVideoId = url => {
        console.log('url', url);
        // this.setState({ videoIds: url });
    }

    render() {
        return (
            <div className="App" >
                <h1>Meshvids</h1>
                <h2>Link your videos. Control the order. Customize. Hit Play!</h2>

                <VideoForm onUrlSubmit={this.getVideoId} />

                <VideoContainer videoIds={this.state.videoIds} />
            </div>
        );
    }
}

export default App;

// 1kM0io9DHkFQPuUeW0eSqvjTO-XlXOxNO