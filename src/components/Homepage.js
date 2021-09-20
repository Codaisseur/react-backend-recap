import { useState, useEffect } from "react";
import axios from "axios";
const Homepage = props => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/players", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }); // now needs auth
        setPlayers(response.data);
      } catch (e) {
        setPlayers([]);
        console.log(e.message);
      }
    };
    getPlayers();
  }, [props.token]);

  return (
    <div>
      <h1>Player list</h1>

      {!props.token && <div>You have to log in to see the players</div>}

      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - {player.nationality}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
