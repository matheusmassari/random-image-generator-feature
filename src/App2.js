import { useState, useEffect } from "react";
import "./App2.css";

function App2() {
  const [resposta, setResposta] = useState([]);
  const [username, setUsername] = useState("matheusmassari");
  const [loading, setLoading] = useState(false);

  async function getInfoGithub(username) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      setLoading(false);
      response.json().then((body) => setResposta(body));
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  function handleUsername(event) {
    event.preventDefault();
    const userInput = event.target.value;
    setUsername(userInput);
    console.dir(userInput);
  }

  useEffect(() => {
    getInfoGithub(username);
  }, []);

  console.log(resposta);
  return (
    <>
      <div className="container">
        <div className="label-input-container">
          <label htmlFor="username">Usuario: </label>
          <input
            placeholder="userid"
            id="username"
            onChange={handleUsername}
            type="text"
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className='image-container'>
            <img src={resposta[0]?.owner?.avatar_url} alt="" />
            </div>
            <ul>
              {resposta.map((elemento) => (
                <li className="list-element" key={elemento.id}>
                  {elemento.name}
                </li>
              ))}
            </ul>
          </>
        )}
        <button onClick={() => getInfoGithub(username)} type="submit">
          Buscar
        </button>
      </div>
    </>
  );
}

export default App2;
