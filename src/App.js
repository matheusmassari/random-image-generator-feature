import "./App.css";

async function getExternalImage() {
  const response = await fetch("https://source.unsplash.com/random");

  document.querySelector(".image").innerHTML = `<img src = "${response.url}">`;
}


function App() {
  return (
    <main>
      <button onClick={getExternalImage}>Generate</button>
      <div className="image">
        
      </div>
    </main>
  );
}

export default App;
