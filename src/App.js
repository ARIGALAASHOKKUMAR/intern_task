import {Route, Switch} from 'react-router-dom'
import login from './components/login'
import Home from './components/Home'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
