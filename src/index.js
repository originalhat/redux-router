import {applyMiddleware, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import {ConnectedRouter, connectRouter, routerMiddleware} from "connected-react-router";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {Route, Switch} from "react-router";
import Home from "./components/Home";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  ),
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/:fetchType" render={(props) => <Home fetchType={props.match.params.fetchType}/>}/>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById("react-root")
  )
};

store.subscribe(render);
render();