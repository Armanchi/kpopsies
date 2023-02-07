import React from "react";

const SongCard = ({song}) => {
    return(
        <div className="song">
        <div>
            <p>{song.date}</p>
        </div>
        <div>
            <a src={song.video !== 'N/A' ? song.video : 'https://via.placeholder.com/400'} />
        </div>
        <div>
            <span>{song.title}</span>
            {/* <h3>{song.}</h3> */}
        </div>
    </div>
    )
}

export default SongCard;