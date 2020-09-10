import React from 'react';
import { IGitHubRepos } from '../states/SearchGitHubUsersState';

interface Props {
    repo: IGitHubRepos
}

export const Repo: React.FC<Props> = (props) => {
    const { repo } = props;
    const { name, url, owner, updatedAt, description } = repo;
    return (
        <div className="repo">
            <div className="repo-avatar">
                <img src={owner.avatarUrl} alt={name} />
            </div>
            <div className="repo-details">
                <span>
                    <strong>Repo Name:</strong>
                    <span>{name}</span>
                </span>
                <span>
                    <strong>Url:</strong>
                    <span>{url}</span>
                </span>
                <span>
                    <strong>updatedAt:</strong>
                    <span>{updatedAt}</span>
                </span>
                <span>
                    <strong>Description:</strong>
                    <span>{description}</span>
                </span>
            </div>
        </div >
    );
}


