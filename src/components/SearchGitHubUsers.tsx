import React from 'react';
import { connect } from 'react-redux';
import AppState from '../states/AppState';
import SearchForm from './Forms/SearchForm';
import { handleInputChange } from '../actions/SearchGitHubUsersAction';
import { ReposList } from './ReposList';
import LoadingSpinner from './LoadingSpinner';



const mapStateToProps = (state: AppState) => {
    console.log(state);
    return {
        searchForm: state.searchGitHubUsersState.searchForm,
        gitHubRepos: state.searchGitHubUsersState.gitHubRepos,
        loading: state.searchGitHubUsersState.loading,
    };
};


const mapDispatchToProps = (dispatch: Function) => {
    return {
        handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(handleInputChange(e)),
    }
}



type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const UnconnectedSearchGitHubUsers: React.FC<Props> = (props) => {
    const { handleInputChange, searchForm, gitHubRepos, loading } = props;
    return (
        <div className="">
            <SearchForm searchForm={searchForm} handleChange={handleInputChange} />
            {loading ? <LoadingSpinner /> : null}
            {gitHubRepos.length ? <ReposList gitHubRepos={gitHubRepos} /> : null}
            {searchForm.searchQuery.length >= 3 && gitHubRepos.length == 0 ? <p>Try Another Search</p> : null}
        </div >
    );
}



export const SearchGitHubUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedSearchGitHubUsers);

