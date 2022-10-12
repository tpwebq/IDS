import About from "./views/about";
import Basket from "./views/basket";
import Blog from "./views/blog";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Index from "./views/index";
import Privacy from "./views/privacy";
import Services from "./views/services";

const ROUTES = [
    {navbarItem:true, name:"Home", path: "/",component:<Index/>}, 
    {navbarItem:true, name:"About", path: "/about",component:<About/>},
    {navbarItem:true, name:"Services", path: "/services",component:<Services/>},
    {navbarItem:true, name:"Blog", path: "/blog",component:<Blog/>},
    {navbarItem:true, name:"Contact", path: "/contact",component:<Contact/>},
    {navbarItem:true, name:"Basket", path: "/basket",component:<Basket/>},
    {navbarItem:false, name:"Comingsoon", path: "/comingsoon",component:<Comingsoon/>},
    {navbarItem:false, name:"Privacy", path: "/privacy",component:<Privacy/>},
    {navbarItem:false, path:"*",component:<Error/>}
];

export {
    ROUTES
};