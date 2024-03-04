import './App.css';
import React, {useState} from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'
  ])
  
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })

  const validColor = (color) => {
    const style = new Option().style
    style.color = color

    return(style.color == color)
  }

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  
  return (
    <div className="App row row-cols-4">
      {colorMap}
      <ColorForm addColor={addColor} validColor={validColor} />
    </div>
  );
}

export default App;
