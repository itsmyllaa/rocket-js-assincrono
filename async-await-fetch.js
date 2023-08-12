//código testado no codesandbox
//somente com async await e fetch
fetch('https://api.github.com/users/itsmyllaa')
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))

//async await fetch e promise
async function start(){
    const response = await fetch('https://api.github.com/users/itsmyllaa')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}
start()

//exemplo com try catch
async function start(){
    try {
        const response = await fetch('https://api.github.com/users/itsmyllaa')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos)
    } catch(e) {
        console.log(e);
    }
}
start();

//outro exemplo, somente com o catch
async function start(){
    const response = await fetch('https://api.github.com/users/itsmyllaa')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}
start().catch(e => console.log(e))

//outro exemplo com menos linhas
async function start(){
    const user = await fetch('https://api.github.com/users/itsmyllaa').then(r => r.json())
    const repos = await fetch(user.repos_url).then(r => r.json())
    console.log(repos)
}
start().catch(e => console.log(e))

//outro exemplo com mais clareza e menos linhas
async function start(){
    const url = await fetch('https://api.github.com/users/itsmyllaa').then(r => r.json())
    const user = await fetch(url).then(r => r.json())
    const userRepos = await fetch(user.repos_url).then(r => r.json())
    console.log(userRepos)
}
start().catch(e => console.log(e))