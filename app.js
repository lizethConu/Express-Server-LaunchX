//usando objeto de express
const express = require('express')
//app de express
const app= express()
//puerto en que vamos a ver nuestra app localhost:3000
const port = 3000

//path inicial, respondera a la url localhost:3000
app.get('/', (req,res) => {
    res.send('hello World')
})

//respondiendo texto
//localhost:3000/launch
app.get('/launchx', (req,res) => {
    res.send('bienvenidos a launch')
})

//regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req,res) => {
    const explorer = {name:"Liz", msg:"Hi!"}
    res.send(explorer)
})

//Query Params: Recibir parametros por la url
//html:// localhost:3000/explorers/carlo
//req.params = {"explorerName":"carlo"}
app.get('/explorers/:explorerName',(req,res) =>{
    res.send(req.params)
})

//con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})