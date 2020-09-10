import { Reducer } from 'redux';
import { SearchGitHubUsersState } from '../states/SearchGitHubUsersState';
import { SearchGitHubUsersType } from '../types/type';
import { SearchGutHubUsersAction } from '../actions/SearchGitHubUsersAction';



const initialState: SearchGitHubUsersState = {
    searchForm: {
        searchQuery: ''
    },
    loading: false,
    error: [],
    gitHubRepos: []
};
const searchGitHubUsersReducer: Reducer<SearchGitHubUsersState, SearchGutHubUsersAction> =
    (state: SearchGitHubUsersState = initialState, action: SearchGutHubUsersAction) => {

        switch (action.type) {
            case SearchGitHubUsersType.ON_CHANGE_SEARCH_INPUT: {
                return {
                    ...state,
                    searchForm: action.searchForm,
                }

            }
            case SearchGitHubUsersType.ON_FETCH_GIT_HUB_USERS: {
                return {
                    ...state,
                    loading: true,
                }
            }
            case SearchGitHubUsersType.ON_FETCH_GIT_HUB_USERS: {
                return {
                    ...state,
                    loading: true,
                }
            }
            case SearchGitHubUsersType.ON_FETCH_SUCCESS_GIT_HUB_USERS: {
                return {
                    ...state,
                    gitHubRepos: action.gitHubRepos,
                    loading: false
                }
            }
            case SearchGitHubUsersType.ON_FETCH_ERROR_GIT_HUB_USERS: {
                return {
                    ...state,
                    loading: false
                }
            }
            default: return state;
        }
    };

export default searchGitHubUsersReducer;
