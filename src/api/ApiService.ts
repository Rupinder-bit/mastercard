import axios, { AxiosResponse } from 'axios';
import GET_REPOS_QUERY from './getReposQuery';


export class ApiService {
    axiosGitHubGraphQL: any;
    GITHUB_PERSONAL_ACCESS_TOKEN = 'f09e26fd7791e35b252bc274988d883a72246911';


    constructor() {
        this.axiosGitHubGraphQL = axios.create({
            baseURL: 'https://api.github.com/graphql',
            headers: {
                Authorization: `bearer ${
                    this.GITHUB_PERSONAL_ACCESS_TOKEN
                    }`,
            },
        });
    }


    onFetchGetRepos(userName: any): Promise<AxiosResponse<any>> {
        // f09e26fd7791e35b252bc274988d883a72246911
        return this.axiosGitHubGraphQL.post('', {
            query: GET_REPOS_QUERY,
            variables: { userName },
        });
    }

}