import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store';
import { SearchGitHubUsers } from './components/SearchGitHubUsers';


const store = configureStore();
export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Provider store={store}>
                    <Router >
                        <main className="main">
                            <Switch>
                                <Route path="/">
                                    <SearchGitHubUsers />
                                </Route>
                            </Switch>

                        </main>
                    </Router>

                </Provider >
            </div>

        );
    }
}

export default App;
