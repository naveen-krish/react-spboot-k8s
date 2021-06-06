import axios from 'axios'

const rest_url = "http://192.168.64.4:32322/api/users";

class UserService{

    getUsers(){
        return axios.get(rest_url);
        
    }
}
export default new UserService();