import axios from 'axios';
import { resolve } from '../resolver';
import { backend_password, backend_username } from '../config';

/* You can send both Basic Auth and Bearer token in the headers of your request by adding them as separate properties. Here's how you can do it:

```javascript import axios from 'axios'; import { resolve } from '../resolver';

const username = 'ppis_backend_username'; const password = 'ppis_backend_password';

export async function addFileToFavourites(fileId) { return await resolve( axios({ method: 'post', url: 'http://localhost:3001/api/v1/favouriteFiles/addFileToFavourites', data: { fileId }, headers: { 'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64'), 'Bearer': window.localStorage.token } })); }

export async function getRequests(options) { return await resolve( axios({ method: 'get', url: 'http://localhost:8080/api/zahtjevi', params: options,

headers: { 'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64'), 'Bearer': window.localStorage.token } })); }

```

In this code, 'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64') and 'Bearer': window.localStorage.token are added as separate properties in the headers of the request. This sends both Basic Auth and Bearer token in the headers of the request. */


export async function addFileToFavourites(fileId) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/v1/favouriteFiles/addFileToFavourites',
            data: { fileId },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}

export async function getRequests(options) {
    return await resolve(
        axios({
            method: 'get',
            url: 'http://localhost:8080/api/zahtjevi',
            params: options,
            headers: { 'Authorization': 'Basic ' + Buffer.from(backend_username + ":" + backend_password).toString('base64') }
        }));
}

export async function deleteFavouriteFile(fileId) {
    return await resolve(
        axios({
            method: 'delete',
            url: 'http://localhost:3001/api/v1/favouriteFiles/deleteFavouriteFile',
            data: { fileId },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}


