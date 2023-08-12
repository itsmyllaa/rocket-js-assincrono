//codigo testado no codesandbox
import axios from 'axios'

Promise.all([
    //erre o repositório para o catch de erro funcionar - cite um repositório que não existe
    axios.get('https://api.github.com/users/itsmyllaa'),
    axios.get('https://api.github.com/users/itsmyllaa/repos'),
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[0].data.length)
})
.catch( err => console.log(err.message))