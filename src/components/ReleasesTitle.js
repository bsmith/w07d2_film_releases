const compare = (a, b) => {
    if (a < b)
        return -1;
    if (b > a)
        return 1;
    return 0;
};

const betterSorted = (oldArray, keyFunc) => {
    const array = oldArray.map(elem => [keyFunc(elem), elem]);
    array.sort(([a, _1], [b, _2]) => compare(a, b));
    return array.map(([_, elem]) => elem);
}

const ReleasesTitle = ({currentRegion, regionNames, onRegionChange}) => {
    const sortedRegions = betterSorted(Object.entries(regionNames), ([_, name]) => name);

    const handleChange = (e) => {
        onRegionChange(e.target.value);
    }

    const optionNodes = sortedRegions.map(([key, name]) => {
        return <option key={key} value={key}>{name}</option>
    });
    const selectNode = <select onChange={handleChange} value={currentRegion}>{optionNodes}</select>

    return <>
        <h2>Upcoming Film Releases for {selectNode}</h2>
    </>;
}

export default ReleasesTitle;