
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


  