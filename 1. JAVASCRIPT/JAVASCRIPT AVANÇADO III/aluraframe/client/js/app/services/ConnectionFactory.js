(function (){
const stores = ['negociacoes'];
const version = 4;
const dbName = 'aluraframe';

var connection = null;
var close= null;

return class ConnectionFactory {
    
    constructor(){
        throw new Error('Não é posível instanciar a classe ConnectionFactory');

    }

    static getConnection(){

        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e =>{
               ConnectionFactory._createStores(e.target.result);
            }

            openRequest.onsuccess = e =>{
                if(!connection){
                    connection = e.target.result;
                    close = connection.close.bind(connection);
                    connection.close = function (){
                        throw new Error('**gambiarra detected** VOCE NAO PODE FECHAR A CONNECTION DIRETAMENTE');
                    }
                }
                resolve(connection);
            }
            
            openRequest.onerror = e =>{
                console.log(e.target.error.name);
                reject(e.target.error.name);
            }
        });

    }

    static _createStores(connection){
        stores.forEach(store =>{
                    
            if(connection.objectStoreNames.contains(store))
            connection.deleteObjectStore(store);

            connection.createObjectStore(store, {autoIncremente: true});

        });

    }

    static closeConnection(){
        if(connection){
            connection.close();
            connection = null;
        }
    }

}
})();