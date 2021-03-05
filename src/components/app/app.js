import AppHeader from '../appHeader'
import './App.css'
import Triangle from '../triangle'
import PostMain from '../post-main'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../home'
import AppFooter from '../appFooter'
import FormLikePanel from '../formLikePanel'
function App() {
  
  return (
    <Router>
      <div className='body'>
     <AppHeader/>
     <main> 
      <Route path='/triangle' component={Triangle} />
      <Route path='/posts'  component={PostMain}/>
      <Route path='/' exact component={Home}/>
      <Route path='/chess'component={FormLikePanel}/>
     </main>
     <AppFooter/>
     </div>
    </Router>
  );
}

export default App;