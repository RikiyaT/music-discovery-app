import React, { useState } from 'react';
import { Container, SearchBar, Results, SongCard } from './styles';

/*
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

// Set your Spotify API credentials (you can find them in the Spotify Developer Dashboard)
const clientId = 'spotifyif';
const clientSecret = 'spotifysecret';
const redirectUri = 'http://localhost:8080/callback';

spotifyApi.setClientId(clientId);
spotifyApi.setClientSecret(clientSecret);
spotifyApi.setRedirectURI(redirectUri);
*/

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSearch = async (e) => {
    /*
    e.preventDefault();
  
    try {
      // Authenticate and get an access token
      const response = await spotifyApi.clientCredentialsGrant();
      const { access_token } = response;
      spotifyApi.setAccessToken(access_token);
  
      // Search for tracks
      const searchResults = await spotifyApi.searchTracks(searchTerm, { limit: 10 });
  
      // You can further filter or process the search results if needed
      const tracks = searchResults.tracks.items.map((track) => ({
        id: track.id,
        title: track.name,
        artist: track.artists[0].name,
        image: track.album.images[0].url,
      }));
  
      setSongs(tracks);
    } catch (error) {
      console.error('Failed to search tracks:', error);
    }
    */
  };
  

  return (
    <Container>
      <SearchBar>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for songs..."
        />
        <button onClick={handleSearch}>Search</button>
      </SearchBar>
      <Results>
        {songs.map((song) => (
          <SongCard key={song.id}>
            <img src={song.image} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </SongCard>
        ))}
      </Results>
    </Container>
  );
};

export default Discover;
