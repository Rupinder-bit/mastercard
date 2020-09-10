const GET_REPOS_QUERY = `
query ($userName: String!){
    user(login: $userName) {
      repositories(first: 50, isFork: false) {
        nodes {
            name
            url
            description
            id
            updatedAt
            owner{
                avatarUrl
                id
              }
        }
      }
    }
  }`;

export default GET_REPOS_QUERY;