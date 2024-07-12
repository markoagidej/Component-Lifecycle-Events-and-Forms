import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = () => {
    const publicKey = '10e6807befd8aeb6f15c4e5356806e98';
    const hashKey = '74068a949a4478d79f2be1e5c96470be';

    const [characterList, setChartacterList] = useState([]);

    useEffect(() => {
        async function fetchCharacterList() {
            try {                
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hashKey}`)
                setChartacterList(response.data.data.results);
                console.log("api call");
            } catch (error) {
                console.error("Error fetchign characters list:", error);
            }
        }

        fetchCharacterList()
        console.log("use effect");
    }, [])

    console.log(characterList);
    return (
        <div style={{display: "flex"}}>
            {characterList &&
            characterList.map((character) => {
                <div>
                    <img src={character.thumbnail.path + character.thumbnail.extension} alt="" />
                    <h3>{character.name}</h3>
                </div>
            })}
        </div>
    )
}

export default CharacterList