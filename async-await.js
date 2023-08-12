//código testado no codesandbox
const promessa = new Promise(function(resolve, reject){
    return resolve('Ok')
})
//better way
async function start(){
    try { 
        const result = await promessa
    console.log(result)
    } catch(e){
        console.log(e)
    } finally {
        console.log('rodar sempre!')
    }
}
start()
//old way
promessa
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('sempre irei executa')
    })