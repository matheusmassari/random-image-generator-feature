import { useState, useEffect } from "react";
import "./App2.css";

function App2() {
  const [resposta, setResposta] = useState({});

  async function getInfoGithub(username = `matheusmassari`) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    response.json().then((body) => setResposta(body));
  }
  useEffect(() => {
    getInfoGithub();
  }, []);
  
  console.log(resposta)
  return <div className="userInfo">
     {''}
  </div>
}

export default App2;
