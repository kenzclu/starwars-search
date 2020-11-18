import React from 'react'
import Home from './components/organisms/Home'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Navbar from './components/molecule/Navbar'
import Character from './components/organisms/Character'

const paths = [
  {
    path: '/',
    exact: true,
    component: Home
  }, {
    path: '/sw/:id/',
    exact: true,
    component: Character
  }
]

function Router () {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Navbar />
        <Switch>
          {paths.map((path, i) => {
            return (
              <Route
                key={`path-${i}`}
                exact={path.exact || false}
                path={path.path}
                component={path.component}
              />
            )
          })}
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
