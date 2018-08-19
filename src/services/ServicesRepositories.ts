import {ISearchRepositoriesPayload} from '../actions/repositoriesActions'
const URL_GITHUB = 'http://api.github.com'
export const fetchRepositories = (user: ISearchRepositoriesPayload)=>{
    const searchUrl = `${URL_GITHUB}/users/${user.userName}/repos`;

    return fetch(searchUrl)
        .then(response => {
            return response.json();
        });

}