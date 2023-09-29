const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const port = 3000;




app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())



//router
app.get('/logs/new', (req, res)=>{
    res.render('New')
})
app.post('/logs', (req, res) => {
    res.send(req.body);
  });




app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
  });