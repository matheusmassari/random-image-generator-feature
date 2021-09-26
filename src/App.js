import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [response, setResponse] = useState({});
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
  
  useEffect(() => {
    getExternalImage()
  },[])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites])

  async function getExternalImage() {
    const response = await fetch("https://source.unsplash.com/random");
    setResponse(response)
  }

  function handleFavorites() {
    const imageSource = response.url
    setFavorites((atual) => [...atual, imageSource])
  }
  console.log(favorites)
  
  return (
    <>
    <main>
      <button onClick={getExternalImage}>Gerar imagem</button>
      <div className="image">
        <img onClick={handleFavorites} src={response.url} alt="imagem" />
      </div>
    </main>
    <button>Ver favoritos</button>
    </>
  );
}

export default App;
