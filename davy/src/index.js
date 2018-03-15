import React from 'react';
import ReactDOM from 'react-dom';
import App from './blog/blog-js/App';
import Login from './blog/blog-js/login'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import About from './blog/blog-js/about_me';
import Life from './blog/blog-js/life';
import Learn from './blog/blog-js/learn';
import Saying from './blog/blog-js/saying';
// import Writing from './blog/blog-js/writing';
let arr = [
    {
        path:'/index',
        component:App
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/life',
        component:Life
    },
    {
        path:'/learn',
        component:Learn
    },
    {
        path:'/saying',
        component:Saying

    },
    {
        path:'/login',
        component:Login
    },
    // {
    //     path:'/writing',
    //     component:Writing
    // }
];

let routers = arr.map((e,i)=>{
    return <Route exact key="{i}" path={e.path} component={e.component}/>
});
ReactDOM.render(
    <Router>
        <Switch>
            <Route  exact path="/" component={App}/>
            {routers}
        </Switch>
    </Router>
    ,document.getElementById('root'));
