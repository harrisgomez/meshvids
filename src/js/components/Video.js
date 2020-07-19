import React from 'react';

export const Video = ({ id }) => {
    return (
        <div>
            {/* <button id="play" style={{marginTop: '300px'}}>Play</button> */}
            {/* <iframe title='video1' src={`https://drive.google.com/file/d/1kM0io9DHkFQPuUeW0eSqvjTO-XlXOxNO/preview`} width="640" height="480"></iframe> */}
            <video id="video" width="320" height="240" controls>
                <source src={`https://drive.google.com/uc?export=download&id=0B8-1kM0io9DHkFQPuUeW0eSqvjTO-XlXOxNO`} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};