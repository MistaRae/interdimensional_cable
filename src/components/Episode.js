import React from 'react'

const Episode = ({episode}) => {

    return (
        <p>{episode.results[0].name}</p>
    )
}

export default Episode;