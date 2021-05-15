import React from 'react'

const TVScreen = ({isLoading, gif}) => { 

    return (
        <div id = "image-container">
            {isLoading ? <img src="https://media.giphy.com/media/dGoz7Ey9iKrza/giphy.gif" alt="loading-gif" />: <img src= {gif} alt="episode-gif" />}
        </div>
    )
}

export default TVScreen;