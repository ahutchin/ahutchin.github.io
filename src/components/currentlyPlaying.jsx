import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrentlyPlaying = () => {
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        setError(null);
        // const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/currently-playing`);
        const response = await axios.get(`http://localhost:3000/currently-playing`);
        if (response.data) {
          setSong(response.data);
        } else {
          setSong({ message: "No song currently playing." });
        }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch currently playing song.");
        setSong(null);
      }
    };

    fetchCurrentlyPlaying();
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!song) {
    return <div>Loading...</div>;
  }

  if (song.message) {
    return <div>{song.message}</div>;
  }

  return (
    <div>
      <h2>Currently Playing</h2>
      <p>
        <strong>Song:</strong> {song.item.name}
      </p>
      <p>
        <strong>Artist:</strong> {song.item.artists.map((artist) => artist.name).join(", ")}
      </p>
      <p>
        <strong>Album:</strong> {song.item.album.name}
      </p>
      <img src={song.item.album.images[0]?.url} alt={song.item.album.name} style={{ width: "300px" }} />
    </div>
  );
};

export default CurrentlyPlaying;
