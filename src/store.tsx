import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppState from './states/AppState';
import searchGitHubUsersReducer from './reducers/SearchGitHubUsersReducer';


const rootReducer = combineReducers<AppState>({
    searchGitHubUsersState: searchGitHubUsersReducer,
});

export default function configureStore(): Store<AppState, AnyAction> {
    return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}