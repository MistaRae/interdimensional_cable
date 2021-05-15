import React from 'react';
import Episode from './Episode'

const EpisodeList = ({allEpisodes}) => {

    // const allEpisodesArray = [];
    // allEpisodesArray.push(allEpisodes)

    // const clickHandler = () => {
    //     setSelectedEpisode()
    // }

    const episodeNodes = allEpisodes.map((episode, index) => {
        return <Episode
        episode = {episode}
        key = {index}/>
    })
    //map is itemising each element of the array - no need for [] notation
        

    return (
        <ul>
        {episodeNodes}
        </ul>
    )

}

export default EpisodeList;