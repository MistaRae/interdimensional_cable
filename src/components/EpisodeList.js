import React from 'react';
import Episode from './Episode'

const EpisodeList = ({allEpisodes}) => {

    const allEpisodesArray = [];
    allEpisodesArray.push(allEpisodes)

    const episodeNodes = allEpisodesArray.map((episode, index) => {
        return <Episode 
        episode = {episode}
        key = {index}/>
    })
        

    return (
        <ul>
        {episodeNodes}
        </ul>
    )

}

export default EpisodeList;