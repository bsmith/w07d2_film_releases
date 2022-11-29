import './ReleaseList.css';
import Release from "./Release";

const ReleaseList = ({releases}) => {
    const releaseNodes = releases.map(release => {
        return <li key={release.id}>
            <Release key={release.id} releaseObj={release} />
        </li>;
    })

    return <ul className="ReleaseList">
        { releaseNodes }
    </ul>
}

export default ReleaseList;