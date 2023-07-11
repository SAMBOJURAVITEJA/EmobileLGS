import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Bank from './components/Bank'

import Logo from './components/Logo'

import Navbar from './components/Navbar'

import LandingSection from './components/LandingSection'

import './App.css'

const App = () => (
  <div className="totalAppContainer">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/landing" component={LandingSection} />
        <Route exact path="/logo" component={Logo} />
        <Route exact path="/bank" component={Bank} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
