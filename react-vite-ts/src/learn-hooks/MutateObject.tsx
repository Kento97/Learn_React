import React, {useState} from 'react';
import {useImmer} from "use-immer";


const MutateObject = () => {
    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg'
        }
    });

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        updatePerson(draft => {
            draft.name = e.target.value;
        });
    }

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        updatePerson(draft => {
            draft.artwork.title = e.target.value;
        });
    }

    function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
        updatePerson(draft => {
            draft.artwork.city = e.target.value;
        });
    }

    return (
        <>
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br/>
                (located in {person.artwork.city})
            </p>
        </>
    );

}

export default MutateObject;
