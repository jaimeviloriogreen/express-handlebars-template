import { request, response } from "express";

const home = (req = request, res = response)=>{
    res.render("index");
}

const contact = (req = request, res = response)=>{
    res.render("contact", {author:"Jaime Vilorio Green"});
}

const services = (req = request, res = response)=>{
    res.render("services");
}

const error404 = (req = request, res = response)=>{
    res.render("404");
}

export{home, contact, services, error404}

