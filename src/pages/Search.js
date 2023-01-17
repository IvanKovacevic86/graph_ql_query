import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return (
              <li key={character.location.name}> {character.location.name}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
