import React, { useEffect, useState } from 'react';

export default function Poetry() {
  const [poetName, setPoetName] = useState('');
  const [authors, setAuthors] = useState([]);
  const [poemLines, setPoemLines] = useState([]);

  const fetchAuthors = () => {
    fetch('https://poetrydb.org/author', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => setAuthors(response.authors));
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  // Hint - Below lines will get you poem lines
  // const fetchPoems = () => {
  //   fetch(`https://poetrydb.org/title/${poetName}/lines`, {
  //     method: 'GET'
  //   })
  //     .then((response) => response.json())
  //     .then((response) => setPoemLines(response[0].lines))
  // }

  return (
    <>
      {authors.length > 0 && (
        <select onChange={(event) => setPoetName(event.target.value)}>
          {authors.map((author) => (
            <option value={author}>{author}</option>
          ))}
        </select>
      )}
      {poemLines.length > 0 && <div>{poemLines}</div>}
    </>
  );
}
