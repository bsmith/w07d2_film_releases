import { useState } from 'react';

import './ReleaseBox.css';
import ReleaseList from "../components/ReleaseList";
import MoreReleases from "../components/MoreReleases";

const staticData = [
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
        name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
    },
    {
        id: 5,
        name: "Captain Marvel",
        url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
    }
];
const viewMoreLink = "https://www.imdb.com/calendar/?region=gb";

const ReleaseBox = () => {
    const [releases, setReleases] = useState(staticData);

    return <aside className="ReleaseBox">
        {/* TODO: ADD SEPARATE COMPONENT */}
        <h2>Upcoming Film Releases for UK</h2>

        <ReleaseList releases={releases} />

        <MoreReleases href={viewMoreLink}/>
    </aside>;
};

export default ReleaseBox;