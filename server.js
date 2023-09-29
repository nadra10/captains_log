require('dotenv').config()
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const port = 3000;
const mongoose = require('mongoose');

const methodOverride = require('method-override')




app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

app.use(methodOverride('_method'))


app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

// connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })


//data
const Log = require('./models/logs')




//router
//index router
app.get('/logs', async (req, res) => {
    try {
        const logs = await Log.find({});
        res.render('Index', { logs });
    } catch (error) {
        console.error(error);
    }
});

app.get('/logs/new', (req, res)=>{
    res.render('New')
})



app.post('/logs', async (req, res) => {
    try {
        const newLog = await Log.create(req.body);
        res.redirect(`/logs/${newLog._id}`);
    } catch (error) {
        console.log(error);
    }
});








app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
  });