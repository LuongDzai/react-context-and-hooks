import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name:</label>
            <input value={title} required type="text" onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="add song" />
        </form>
    );
}

export default NewSongForm;