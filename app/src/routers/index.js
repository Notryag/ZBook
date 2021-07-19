import '../App.css';
import Home from '../containers/home/index'
import ArticleAdd from '../containers/articleAdd'
import Detail from '../containers/detail'

import {Router, Route, Switch} from 'react-router-dom'
import {createHashHistory} from 'history'



function App() {
  return (
    <Router history={createHashHistory()}>
      <Switch>
        <Route exact  path='/' component={Home}/>
        <Route  path='/add' component={ArticleAdd}/>
        <Route  path='/detail/:uid' component={Detail}/>
      </Switch>
    </Router>
  )
}

export default App;
