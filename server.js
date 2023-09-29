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



//update
app.put("/logs/:id", async (req, res) => {
    try {
      if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
      } else {
        req.body.shipIsBroken = false;
      }
  
      await Log.findByIdAndUpdate(req.params.id, req.body);
  
      res.redirect('/logs/');
  
    } catch(error) {
      console.log(error);
    }
  });



  // show one particular 
  app.get("/logs/:id", async (req, res) => {
    try {
 const log= await Log.findById(req.params.id);
  
      res.render("Show", { log: log });
  
    } catch(error) {
      console.log(error);
 
    }
  });


  //delete
  app.delete('/logs/:id', async (req, res) => {
    try {
   await Log.findByIdAndRemove(req.params.id);
  
    
res.redirect('/logs')
  
    } catch(error) {
      console.error(error);
   
    }
  });


  //edit
  app.get('/logs/:id/edit', async (req, res) => {
    try {
        const foundlog = await Log.findById(req.params.id);

        res.render('Edit', { log: foundlog });

    } catch(error) {
        console.log(error);
    }
});


  


app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
  });