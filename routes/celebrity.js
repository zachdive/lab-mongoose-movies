const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")


router.get('/celebrities', async (req, res,) => {
 try {
      const celebrities = await Celebrity.find();
      res.render("celebrities/index", {celebrities})
} catch (e) { 
    console.log("couldn't find celebrities", e)
     
}
  });

  router.get("/celebrities/:celebritiesID", async (req, res) => {
try {
    const celebrities = await Celebrity.findById(req.params.celebritiesID)
    // .populate();
    res.render("celebrities/show", {celebrities});
} catch (e) { 
    console.log("couldn't find the deets", e)
     
}
});

router.get("/create-celebrity", async (req, res) => {
try {
    // const authors = await Author.find();
    res.render("celebrities/create");
    // , { authors }
} catch (e) { 
    console.log("can't reach page", e)
     
}
});

router.post("/create-celebrity", async (req,res) => {
    const { name, occupation, catchPhrase } = req.body;
try {
    await Celebrity.create({ name, occupation, catchPhrase })
    res.redirect("/celebrities/");
} catch (e) { 
    console.log("couldn't create celebrities", e)
     
}
});

router.get("/celebrities/:celebritiesID/edit", async (req, res) => {
    const celebrities = await Celebrity.findById(req.params.celebritiesID);
    // .populate("author");
    // const authors = await Author.find();
    res.render("celebrities/edit", celebrities);
    // { book, authors};
});


router.post("/celebrities/:celebritiesID/edit", async (req,res) => {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.findByIdAndUpdate(req.params.celebritiesID, {
        name,
        occupation,
        catchPhrase,
       
    });
    res.redirect("/celebrities");
    });

router.post("/celebrities/:celebritiesID/delete", async (req, res) => {
    const celebrity = await Celebrity.findById(req.params.celebritiesID);
    console.log(celebrity);
    await Celebrity.findByIdAndDelete(req.params.celebritiesID);
    res.redirect("/celebrities");
});


module.exports = router;