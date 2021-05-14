import React from 'react';
import Episode from './Episode'

const EpisodeList = ({allEpisodes}) => {
    
  const episodeNodes = allEpisodes.map((episode, index) => {
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