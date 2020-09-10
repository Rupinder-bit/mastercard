

export interface SearchGitHubUsersState {
    searchForm: IsearchForm;
    loading: boolean;
    error: IError[];
    gitHubRepos: IGitHubRepos[]
}


export interface IsearchForm {
    searchQuery: string
}


export interface IGitHubRepos {
    name: string,
    url: string;
    description: string;
    id: string;
    updatedAt: string;
    owner: IOwner;
}

export interface IOwner{
    avatarUrl: string;
    id: string; 
}


export interface IError{
    message: string;
    type: string;
}