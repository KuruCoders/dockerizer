const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.json({
        msg:"working"
    })
})

app.get('/user', (req, res) => {
    res.json({
        name:"sdadsad"
    })
})

app.listen(4000, () => {
    console.log("running server")
})