import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [response, setResponse] = useState({});
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
  const [classe, setClasse] = useState('fav')
  
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
    
    if(favorites.includes(imageSource)) {
      setFavorites((atual) => atual.filter(ele => ele !== imageSource))
      setClasse('')
    } else {
      setFavorites((atual) => [...atual, imageSource])
      console.log(classe)
      setClasse('fav')
    }
    
  }
  
  
  return (
    <>
      <main>
        <button onClick={getExternalImage}>Gerar imagem</button>
        <div className={`image ${classe}`}>
          <img onClick={handleFavorites} src={response.url} alt="imagem" />
        </div>
      </main>
    </>
  );
}

export default App;
