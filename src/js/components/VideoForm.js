import React, { Component } from 'react';

export class VideoForm extends Component {
    state = {
        url: ''
    }

    handleUrlChange = e => {
        this.setState({ url: e.target.value });
    }

    handleUrlSubmit = e => {
        this.props.onUrlSubmit(this.state.url);
        e.preventDefault();
    }

    render() {
        console.log(this.state.url);
        return (
            <div>
                <form onSubmit={this.handleUrlSubmit}>
                    <label htmlFor="videoUrl">
                        {"Url: "}
                        <input name='videoUrl' type="text" onChange={this.handleUrlChange} value={this.state.url} />
                    </label>
                    <input type="submit" value="Submit" onSubmit={this.handleUrlSubmit} />
                </form>
            </div>
        );
    }
};