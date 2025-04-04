import express from 'express';
const app = express();

app.post('/usuarios', (req,res)=>{
    console.log(req.body)
    res.json({nome:'Diego',email:'d@d.com'})
})

app.listen(3000);