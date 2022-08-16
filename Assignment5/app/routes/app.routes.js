module.exports = (app) => {
    const App = require("../controller/app.controller.js");
  
    app.post("/create", App.create);
  
    app.get("/get-all", App.findAll);
  
    app.get("/message/:id", App.findOne);
  
    app.put("/message/:id", App.update);
  
    app.delete("/message/:id", App.delete);
  };