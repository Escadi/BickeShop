module.exports = app => {
    const bicycles = require("../controllers/bicycle.controller.js");


    var router = require("express").Router();

    //CREATE A NEW BICYCLE
    router.post("/", bicycles.create);

    //RETRIEVE ALL BICYCLES
    router.get("/", bicycles.findAll);

    //RETIEVE A SINGLE BICYCLE WITH ID
    router.get("/:id", bicycles.findOne);

    //UPTADE A SINGLE BICYCLE WITH ID
    router.put("/:id", bicycles.update);

    //DELETE A BICYCLE WITH ID
    router.delete("/:id", bicycles.delete);

    app.use("/api/bicycles", router);


}