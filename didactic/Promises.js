/* Promises */


/*
estados da promise
    resolved
    rejected
    pending
*/

function getDataFromServer(url) {
    console.log('getDataFromServer está sendo executado...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('dados da' + url);
            /*resolve({
                data: 'dados que queremos'
            });*/
            console.log('Ops... algo deu errado na api. Não conseguimos buscar os dados.');
            reject({
                error: true,
                errorMessage: 'API não nos respondeu.'
            });
        }, 1500)
    })
}

getDataFromServer('www.api.com')
    .then(data => {
        console.log('Then sendo executado. Data', data);
    })
    .catch(error => {
        console.log('Catch sendo executado. Error: ' . error);
    })