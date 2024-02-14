
import Card from './component/Card'
import {animals,birds,insects,fish} from './AnimalList'
import './App.css'

function App() {
  

  return (
    <>
      {animals.map(animal => { 
        return(
          <Card key={animal.name} animal={animal}/>
        
        )
       })}
       
    </>
  )
}

export default App
