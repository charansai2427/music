import React from 'react';

import { useState, useEffect } from 'react';

const Music = (userInp) => {

    console.log(userInp);

    const [songs, setSongs] = useState();

    const Play = () => {
        const baseUrl = (`https://saavn.me/albums?id=${userInp.userInp}`)
        console.log(baseUrl);

        fetch(baseUrl, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(setSongs => setSongs.json())
            .then(setsongs => {
                console.log(songs);
                setSongs(setsongs)
            }
            )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        Play()
    }, [userInp]);

    return (
        <div>
            {
                songs && songs.data &&
                <div>
                    < audio className='playbar' src={songs.data.songs[0].downloadUrl[0].link} controls/>
                </div>
            }

        </div>
    )
}

export default Music