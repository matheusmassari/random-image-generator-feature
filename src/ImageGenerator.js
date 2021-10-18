import "./ImageGenerator.css";
import { useState, useEffect } from "react";
import { FavoritesList } from "./FavoritesList.js";

function ImageGenerator() {
  const [response, setResponse] = useState({});
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [classe, setClasse] = useState("fav");

  useEffect(() => {
    getExternalImage();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setClasse("");
    if (favorites.includes(response.url)) {
      setClasse("fav");
    }
  }, [favorites, response.url]);


  async function getExternalImage() {
    const response = await fetch("https://source.unsplash.com/random");
    setResponse(response);
    return response
  }

  function handleFavorites() {
    const imageSource = response.url;
    if (favorites.includes(imageSource)) {
      setFavorites((atual) => atual.filter((ele) => ele !== imageSource));
    } else {
      setFavorites((atual) => [...atual, imageSource]);
    }
  }



  return (
    <>
      <main>
        <div className="btn-container">
          <button onClick={getExternalImage}>Gerar imagem</button>
          {favorites.length > 0 ? (
          <button>Favorites List</button>
          ) : null}
        </div>
        <div className={`image ${classe}`}>
          <img onClick={handleFavorites} src={response.url} alt="imagem" />
        </div>
      </main>
    </>
  );
}

export default ImageGenerator;
