//código testado no codesandbox
//vendo o fetch, encadeamento de promessas e catch pegando todos os erros
fetch('https://api.github.com/users/maykbrito')
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))
