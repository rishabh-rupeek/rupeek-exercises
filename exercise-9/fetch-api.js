const axios = require ('axios');

function getCommentersEmailIds( username ) {
    return axios.get( `https://jsonplaceholder.typicode.com/users?username=${username}` )
            .then( (response) => {
                return response.data[0].id;
            })
            .then( (id) => {
                return axios.get( `https://jsonplaceholder.typicode.com/users/${id}/posts` );
            })
            .then( (response) => {
                return response.data[0].id;
            })
            .then( (postId) => {
                return axios.get( `https://jsonplaceholder.typicode.com/comments?postId=${postId}` );
            })
            .then( (response) => {
                const arr = response.data;
                const result = [];
                for(let i=0; i<arr.length; i++){
                    result.push(arr[i].email);
                }
                return result;
            })
            .catch( error => {
                console.log( error );
            })
}

async function foo(){
    const result = await getCommentersEmailIds('Bret');
    console.log(result);
}

foo();
