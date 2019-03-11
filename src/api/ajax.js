import axios from 'axios';

export default function ajax(url, data={}, type='GET'){
    return new Promise(function(resolve, reject){
          
        let Promise

    if(type === 'GET'){
        let datastr = '';
        Object.keys(data).forEach(key => {
            datastr += key + '=' + data[key] + '&';
        });
        if(datastr !== ''){
            datastr = datastr.substring(0, datastr.lastIndexOf('&'));
            url = url + '?' + datastr;
        };

        Promise = axios.get(url);
    }else{
        Promise = axios.post(url, data);
    }

       Promise.then(function(response){
           resolve(response.data);
       })
       .catch(function(error){
           reject(error);
       });
    });

}