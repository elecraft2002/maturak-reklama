import { firmy } from "./firmy"
import Reklama from "./Reklama";
import app from "./css/app.css"
import normalize from "normalize.css"
import { useState, useEffect } from "react";

function App() {

  const [selected, setSelected] = useState(0);
  const timeout = 1000


  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }



  useEffect(() => {
    setInterval(() => {
      console.log(selected)
      setSelected((index) => {
        return index + 1
      });
    }, timeout);
  }, [])


  return (
    <div className="App">
      <div className="gallery">
        {firmy.map((firma, index) => (
          <Reklama selected={selected % firmy.length == index} firma={firma} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;