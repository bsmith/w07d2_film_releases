import './Release.css';
import React from 'react';

const Release = ({releaseObj}) => {
    console.log(releaseObj)

    return <p>{ JSON.stringify(releaseObj) }</p>
}

export default Release;