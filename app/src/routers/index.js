import '../App.css';
import Home from '../containers/home/index'
import {Router, Route, Switch} from 'react-router-dom'
import {createHashHistory} from 'history'
function App() {
  return (
    <Router history={createHashHistory()}>
      <Switch>
        <Route  path='/' component={Home}/>
      </Switch>
    </Router>
  )
}

export default App;
