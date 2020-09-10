import { Dispatch } from 'redux';
import { ApiService } from '../api/ApiService';
import { SearchGitHubUsersType } from '../types/type';
import { IsearchForm, IGitHubRepos } from '../states/SearchGitHubUsersState';


export interface SearchGutHubUsersAction {
    type: SearchGitHubUsersType.ON_CHANGE_SEARCH_INPUT | SearchGitHubUsersType.ON_FETCH_ERROR_GIT_HUB_USERS |
    SearchGitHubUsersType.ON_CLEAR_SEARCH_INPUT | SearchGitHubUsersType.ON_FETCH_SUCCESS_GIT_HUB_USERS |
    SearchGitHubUsersType.ON_FETCH_GIT_HUB_USERS;
    searchForm: IsearchForm,
    loading: boolean,
    error: string,
    gitHubRepos: IGitHubRepos[]
}



export const onSuccessSearchGitHubUsers = (response: any): SearchGutHubUsersAction => {
    return {
        type: SearchGitHubUsersType.ON_FETCH_SUCCESS_GIT_HUB_USERS,
        gitHubRepos: [...response],
        loading: false,
    } as SearchGutHubUsersAction;
}

export const onFetchSearchGitHubUsers = (): SearchGutHubUsersAction => {
    return {
        type: SearchGitHubUsersType.ON_FETCH_GIT_HUB_USERS,
        loading: true
    } as SearchGutHubUsersAction;
}

export const onFailSearchGitHubUsers = (error: any): SearchGutHubUsersAction => {
    return {
        type: SearchGitHubUsersType.ON_FETCH_ERROR_GIT_HUB_USERS,
        error: error,
        loading: false,
    } as SearchGutHubUsersAction;
}

export const onHandleInputChange = (form: IsearchForm): SearchGutHubUsersAction => {
    return {
        type: SearchGitHubUsersType.ON_CHANGE_SEARCH_INPUT,
        searchForm: form
    } as SearchGutHubUsersAction;
}


export const onSearchGitHubUsers = (searchQuery: string, dispatch: Dispatch) => {
    return new ApiService().onFetchGetRepos(searchQuery)
        .then((response) => {
            if (response.data.data.user) {
                if (response.data.data.user.repositories) {
                    return dispatch(onSuccessSearchGitHubUsers(response.data.data.user.repositories.nodes));
                }
            } else if (response.data.errors) {
                return dispatch(onFailSearchGitHubUsers(response.data.errors))
            }
        })
        .catch(error => dispatch(onFailSearchGitHubUsers(error)));
}



export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return (dispatch: Dispatch, getState: any) => {
        const { searchForm } = getState().searchGitHubUsersState;
        searchForm[e.target.name] = e.target.value;
        dispatch(onHandleInputChange({ ...searchForm }));
        switch (e.target.name) {
            case 'searchQuery':
                if (e.target.value.length >= 3) {
                    onFetchSearchGitHubUsers();
                    onSearchGitHubUsers(e.target.value, dispatch);
                }
                break;
        }
    };
}