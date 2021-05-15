import React, { useEffect, useState} from 'react'
// import EpisodeList from '../components/EpisodeList.js'
import NextButton from '../components/NextButton'
import TVScreen from '../components/TVScreen'
import './TvContainer.css'

const TvContainer = function () {

    const [allEpisodes, setAllEpisodes] = useState([])
    // const [allEpisodeGifs, setAllEpisodeGifs] = useState([])
    // const [selectedEpisode, setSelectedEpisode] = useState(null)
    const [episodeGif, setEpisodeGif] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getAllEpisodes()
    },[])

    // useEffect(() => {
    //     getEpisodeGifs()
    // }, [selectedEpisode])

    useEffect(() => {
        console.log("SETTING LOADING TO FALSE")
        setLoading(false)
    }, [episodeGif])

    const getAllEpisodes = function () {
        fetch('https://rickandmortyapi.com/api/episode')
        .then(Response => Response.json())
        .then(data => setAllEpisodes(data.results))
    } 

    const getNextGif = () => {
        const nextEpisode = allEpisodes[Math.floor(Math.random() * allEpisodes.length)]
        // const episodeNumber = nextEpisode.episode
        const name = nextEpisode.name
        // const season = episodeNumber.slice(1,3)
        // const episode = episodeNumber.slice(4,6)
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=rick%20and%20morty%20${name}&limit=1`)
        // fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
        .then(Response => Response.json())
        .then(data => setEpisodeGif(data.data[0].images.original.url));
        // .then(data => setEpisodeGif(data.data.image_url));
    }

    const handleClick = () => {
        console.log("SETTING LOADING TO TRUE")
        setLoading(true);
        getNextGif();
    }

    return (
        <div>
       <img src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt="Rick and morty logo" />
        <TVScreen isLoading={isLoading} gif={episodeGif} />
        <NextButton onNextClick={handleClick} />
        {/* <EpisodeList allEpisodes = {allEpisodes}/> */}
        </div>
       
    )

}

export default TvContainer;