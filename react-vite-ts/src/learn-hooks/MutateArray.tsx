import React, {useState} from "react";
import {useImmer} from "use-immer";

let nextId = 0;

function MutateArray() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState<{ id: number, name: string }[]>([]);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => {
                setName('')
                name && setArtists([
                    {id: nextId++, name: name},
                    ...artists,
                ])
            }}>Add
            </button>
            <ul>
                {
                    artists.map((item) => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </>
    )
}

export default MutateArray;
