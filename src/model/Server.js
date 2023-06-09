import express from "express";
import route from "../router/mainRouter.js";
import { create } from "express-handlebars";

export default class Server{
    constructor(){
        this.app = express();
        this.hbs = create({extname:".hbs"});

        this.port = 4500 || process.env.PORT;

        this.middleware();
        
        this.routes();
    }

    middleware(){
        this.app.use(express.static("src/public"));
        this.app.engine(".hbs", this.hbs.engine);
        this.app.set("view engine", ".hbs");
        this.app.set("views", "./src/views");
    }

    routes(){
        this.app.use(route);
    }

    listen(){
        this.app.listen(this.port, ()=> console.log(`Running on port ${this.port}`) );
    }
}

