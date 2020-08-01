// // * Let's ESLint know gapi is global variable
// /* global gapi */

// import React, { Component } from 'react';
// import './App.css';
// // import Video from './js/containers/VideoContainer';
// import { VideoContainer } from './js/containers/VideoContainer';
// import { VideoForm } from './js/components/VideoForm';

// class App extends Component {
//     state = {
//         loginComponent: true,
//         apiLoaded: false,
//         videoIds: []
//     }

//     componentDidMount() {
//         console.log('client_id', process.env.REACT_APP_CLIENT_ID);
//         console.log(process.env);
//         window.gapi.load("client:auth2", () => {
//             gapi.auth2.init({ client_id: process.env.REACT_APP_CLIENT_ID });
//         });
//     }

//     authenticate() {
//         console.log('Authenticating...');
//         // const gapi = window.$gapi;

//         return window.gapi.auth2
//             .getAuthInstance()
//             .signIn({ scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly" })
//             .then(
//                 () => {
//                     console.log("Sign-in successful");
//                     this.loadClient();
//                 },
//                 err => console.error("Error signing in", err));
//             // .finally(this.loadClient);
//     }

//     loadClient() {
//         console.log('Loading client...');
//         // const gapi = window.$gapi;

//         window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);

//         return window.gapi.client
//             .load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
//             .then(
//                 () => {
//                     this.setState({
//                         apiLoaded: true
//                     })
//                     console.log("GAPI client loaded for API");
//                 },
//                 err => console.error("Error loading GAPI client for API", err)
//             );
//     }

//     execute() {
//         console.log('Executing...');

//         return window.gapi.client.drive.about
//             .get({})
//             .then(
//                 // Handle the results here (response.result has the parsed body).
//                 response => console.log("Response", response),
//                 err => console.error("Execute error", err)
//             );
//     }

//     getVideoId = url => {
//         console.log('url', url);
//         // this.setState({ videoIds: url });
//     }

//     render() {
//         return (
//             <div className="App" >
//                 <h1>Meshvids</h1>
//                 <h2>Link your videos. Control the order. Customize. Hit Play!</h2>

//                 {
//                     this.state.loginComponent ? (
//                         <div>
//                             <button onClick={() => this.authenticate()}>Authenticate</button>
//                             <button onClick={() => this.execute()}>Execute</button>
//                         </div>
//                     ) : (
//                         <div>
//                             <VideoForm onUrlSubmit={this.getVideoId} />
//                             <VideoContainer videoIds={this.state.videoIds} />
//                         </div>
//                     )
//                 }

//             </div>
//         );
//     }
// }

// export default App;