import AppHeader from '../appHeader'
import './App.css'
import Triangle from '../triangle'
import PostMain from '../post-main'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../home'
function App() {
  
  return (
    <Router>
    <div className="App">
     <AppHeader/>
     <main> 
      <Route path='/triangle' component={Triangle} />
      <Route path='/posts'  component={PostMain}/>
      <Route path='/' exact component={Home}/>
     </main>
    </div>
    </Router>
  );
}

export default App;