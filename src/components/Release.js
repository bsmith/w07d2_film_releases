import './Release.css';
import React from 'react';

const Release = ({releaseObj}) => {
    // console.log(releaseObj)

    // return <p>{ JSON.stringify(releaseObj) }</p>
    return <>
        <span style={{display: "none"}}>{releaseObj.id}</span>
        <a href={releaseObj.url}>{releaseObj.name}</a>
    </>
}

export default Release;