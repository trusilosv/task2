import AppHeader from '../appHeader';
import './App.css';
import Triangle from '../triangle';

function App() {
  return (
    <div className="App">
     <AppHeader/>
     <main> 
     <Triangle n='16'/>
     </main>
    </div>
  );
}

export default App;