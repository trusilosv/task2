import AppHeader from '../appHeader'
import './App.css'
import{ useState } from 'react'
import Triangle from '../triangle'
import ParametersPanel from '../parametersPanel'

function App() {
  const [count, setCount] = useState(16)
  return (
    <div className="App">
     <AppHeader/>
     <main>  
     <ParametersPanel 
     changeLines={(count)=>setCount(count)}
      />
     <Triangle n={count}/>
     </main>
    </div>
  );
}

export default App;