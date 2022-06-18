import axios from 'axios';

class RestClient {


    static GetRequest=(GetUrl)=>{
       return  axios.get(GetUrl).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        })
    }

    static PostRequest=(PostUrl,PostJson)=>{
          let config = {
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded',
              }
          }



        return axios.post(PostUrl,PostJson,config).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        });
    }

}

export default RestClient;