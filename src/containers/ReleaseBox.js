import { useState } from 'react';

import './ReleaseBox.css';
import ReleaseList from "../components/ReleaseList";
import MoreReleases from "../components/MoreReleases";
import ReleasesTitle from '../components/ReleasesTitle';

const ukFilms = [
    {
        id: 1,
        name: "Spider-Man: Into the Spider-Verse",
        url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
    },
    {
        id: 2,
        name: "Life Itself",
        url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
    },
    {
        id: 3,
        name: "Mary Queen of Scots",
        url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
    },
    {
        id: 4,
        name: "The Lego Movie 2: The Second Part",
        url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
    },
    {
        id: 5,
        name: "Captain Marvel",
        url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
    }
];
const frFilms = [
    {
        id: 6,
        name: "Annie colère",
        url: "https://www.imdb.com/title/tt14778456/?ref_=rlm"
    },
    {
        id: 7,
        name: "Le torrent",
        url: "https://www.imdb.com/title/tt17912040/?ref_=rlm"
    }
];
const staticData = {
    uk: {
        region: "gb",
        name: "UK",
        films: ukFilms
    },
    fr: {
        region: "fr",
        name: "France",
        films: frFilms
    }
}
/* XXX: URL escaping */
const viewMoreLink = region => `https://www.imdb.com/calendar/?region=${encodeURIComponent(region)}`;

/* Map over the entries() pairs of an Object returning an Object */
const mapEntries = (obj, func) => {
    return Object.fromEntries(Object.entries(obj).map(func))
}

const ReleaseBox = () => {
    // const [releases, setReleases] = useState(ukFilms);
    let [region, setRegion] = useState("uk");

    if (!(region in staticData)) {
        setRegion("uk");
        region = "uk";
    }

    const regionObj = staticData[region];
    const releases = regionObj.films;
    const regionNames = mapEntries(staticData, ([region, data]) => [region, data.name]);

    return <aside className="ReleaseBox">
        <ReleasesTitle currentRegion={region} regionNames={regionNames} onRegionChange={setRegion} />
        <hr />
        {/*<button onClick={ (e) => { if (region === "uk") { setRegion("fr") } else { setRegion("uk")}} }>TEST REGION</button>
        <hr />*/}

        <ReleaseList releases={releases} />

        <hr />
        <MoreReleases href={viewMoreLink(regionObj.region)}/>
    </aside>;
};

// ReleaseBox.displayName = "Hello!"

export default ReleaseBox;