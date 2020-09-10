import React from 'react';
import { IGitHubRepos } from '../states/SearchGitHubUsersState';
import { Repo } from './Repo';

interface Props {
    gitHubRepos: IGitHubRepos[]
}

export const ReposList: React.FC<Props> = (props) => {
    const { gitHubRepos } = props;
    const repos = gitHubRepos.map(repo => <Repo key={repo.id} repo={repo} />)
    return (
        <div className="repo-container">
            <div className="repos">
            {repos}
            </div>
        </div >
    );
}



