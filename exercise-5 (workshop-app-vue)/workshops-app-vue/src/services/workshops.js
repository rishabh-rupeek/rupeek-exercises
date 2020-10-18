import axios from 'axios';

export const fetchWorkshops = () => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops` )
                .then(response => {
                    console.log( response.data );
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });

}

export const fetchWorkshopById = ( id ) => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${id}?_embed=sessions` )
                .then(response => {
                    console.log( response.data );
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });

}

export const upvoteSession = (sessionId) => {
    return axios.put( `https://workshops-server.herokuapp.com/sessions/${sessionId}/upvote` )
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log( error.message );
        })
}


export const downvoteSession = (sessionId) => {
    return axios.put( `https://workshops-server.herokuapp.com/sessions/${sessionId}/downvote` )
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log( error.message );
        })
}