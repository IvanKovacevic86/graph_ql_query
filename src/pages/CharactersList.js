import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

import "./CharacterList.css";

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <Link to={character.id}>
              <img src={character.image} alt="slika" />
              <h2>{character.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
