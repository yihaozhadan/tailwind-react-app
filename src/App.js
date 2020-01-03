import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li className="mr-3 flex-1">
                <Link to="/alerts" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Alerts</span>
                </Link>
              </li>
              <li className="mr-3 flex-1">
                <Link to="/buttons" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Buttons</span>
                </Link>
              </li>
              <li className="mr-3 flex-1">
                <Link to="/cards" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-600">
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Cards</span>
                </Link>
              </li>
              <li className="mr-3 flex-1">
                <Link to="/forms" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Forms</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
        <Switch>
          <Route path="/alerts">
            <Alerts />
          </Route>
          <Route path="/buttons">
            <Buttons />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Alerts() {
  return <h2>Alerts</h2>;
}

function Cards() {
  return <h2>Cards</h2>;
}

function Forms() {
  return <h2>Forms</h2>;
}

function Buttons() {
  let match = useRouteMatch();
  
  return (
    <div>
      <h2>Buttons</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:buttonId`}>
          <Button />
        </Route>
        <Route path={match.path}>
          <h3>Please select a button.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Button() {
  let { buttonId } = useParams();
  return <h3>Requested button ID: {buttonId}</h3>;
}

export default App;
