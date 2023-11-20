//API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES={
    loading:{
        tittle: 'Loading.....',
        message:'Data is being loaded, please wait'
    },
    success:{
        tittle: 'Success',
        message:'Data successfully loaded'
    },
    responseFailure: {
        tittle:'Error',
        message:'An error occured while fetching response from the server. Please try again'
    },
    requestFailure: {
        tittle: 'Error',
        message:'An error occured while parsing request data'
    },
    networkError: {
        tittle: 'Error',
        message:'Unable to connect withe the server. Please check connectivity & try again later'
    }
}


//API SERVICE CALL
//SAMPLE REQUEST
//NEED SERVICE CALL: {url : '/', method:'POST/GET/DELETE' params: true/false, query: true/false }

export const SERVICE_URLS ={
    userSignup : {url:'/signup', method:'POST'}
}
