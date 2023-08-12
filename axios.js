//codigo testado no codesandbox
import axios from "axios";

axios.get('https://api.github.com/users/itsmyllaa')
  .then(res => {
    console.log(res.data);
  });

//new code - next class - this way is a mess
import axios from 'axios'

axios
.get('https://api.github.com/users/itsmyllaa')
.then( response => {
    console.log(response.data)

    axios.get(user.repos_url)
    .then( repos => console.log(repos.data))
})
.catch( error => console.log(error))

//new code - the right way - betten than old way
import axios from 'axios'

axios
.get('https://api.github.com/users/itsmyllaa')
.then( response => axios.get(response.data.repos_url))
.then( repos => console.log(repos.data))
.catch( error => console.log(error))