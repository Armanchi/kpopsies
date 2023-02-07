import React, {useState, useEffect} from "react";
import "./home.css"
import searchIcon from '../../components/search.svg'
import SongCard from "../../components/songCard/songCard";

//TODO: Fix api call.



  
  // const songs = [
  //   {
  //     songName: 'Spring Day',
  //     artist: 'BTS',
  //     date: '2017-02-13',
  //     video: 'https://youtu.be/_7EyhXyeA8A',
  //     release: "Major",
  //     objectID: 0,
  //   },
  //   {
  //     songName: 'One Spring Day',
  //     artist: '2AM',
  //     date: '2013-03-04',
  //     video: 'https://youtu.be/UKgK5LqT6BY',
  //     release: "Major",
  //     objectID: 1,
  //   },
  // ];
  const Home = () => {
    const [songs, setSongs] = useState([]);
    const [searchTerm, setSearchTerm] = React.useState('')


  const searchSongs = async (title) => {
    const response = await fetch(`${options}&s=${title}`);
    const data = await response.json();
    setSongs(data.Search);
}
useEffect(()=> {
    searchSongs('Spring Day');
}, []);


return (
    <div className="app">
        <h1>Kpopsies</h1>

        <div className="search">
            <input
            placeholder="Search for songs" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
                src={searchIcon}
                alt="search"
                onClick={() => searchSongs(searchTerm)}
            />
        </div>

        {songs?.length > 0 
            ? (
                <div className="container">
                    {songs.map((song) => (
                        <SongCard song={song}/>
                    ))}
                </div>
            ) : 
            (
                <div className="empty">
                    <h2>No Songs Found</h2>
                </div>
            )
        }

    
    </div>
);
}

export default Home;