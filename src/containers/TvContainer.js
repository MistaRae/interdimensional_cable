import React, { useEffect, useState} from 'react'
import EpisodeList from '../components/EpisodeList.js'
import './TvContainer.css'

const TvContainer = function () {

    const [allEpisodes, setAllEpisodes] = useState([])
    // const [allEpisodeGifs, setAllEpisodeGifs] = useState([])

    useEffect(() => {
        getAllEpisodes()
    },[])

    // useEffect(() => {
    //     getEpisodeGifs()
    // }, [])

    const getAllEpisodes = function () {
        fetch('https://rickandmortyapi.com/api/episode')
        .then(Response => Response.json())
        .then(data => setAllEpisodes(data))
    } 

    // const episodeSeasonRef = allEpisodes.map((episode) => {return episode.results.episode})
    // const season = episodeSeasonRef.slice(1,2)
    // const episode = episodeSeasonRef.slice(4,5)

    // const getEpisodeGifs = () => {
    //     fetch(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=rick%20and%20morty%20season%20${season}%20episode%20${episode}&limit=1`)
    //     .then(Response => Response.json())
    //     .then(data => setAllEpisodeGifs(data));
    // }

    return (
        <div>
        <h1>
        Welcome to inter-dimensional cable!
        </h1>
        <EpisodeList allEpisodes = {allEpisodes}/>
        </div>
       
    )

}

export default TvContainer;