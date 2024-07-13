import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetail = ({ selectedID }) => {
    const publicKey = '10e6807befd8aeb6f15c4e5356806e98';
    const hashKey = '74068a949a4478d79f2be1e5c96470be';

    // const [selectedCharacterID, setSelectedCharacterID] = useState(null)
    const [characterData, setCharacterData] = useState({})

    useEffect(() => {
        console.log(selectedID)
        if (selectedID) {
            async function fetchCharacterById() {
                try {                
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${selectedID}?ts=1&apikey=${publicKey}&hash=${hashKey}`)
                    setCharacterData(response.data.data.results);
                } catch (error) {
                    console.error("Error fetching character data:", error);
                }
            }
            fetchCharacterById()
        }
    }, [selectedID])
    // name
    // description
    // comics

    return (
        <div>
            
        </div>
    )
}

export default CharacterDetail