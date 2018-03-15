import React,{Component} from 'react';
import {
    Route,
    Link,
} from 'react-router-dom';
import '../../blog/css/public.css';
class Header extends Component{
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }
    render(){
        return(
                <header>
                    <div className="logo" data-scroll-reveal="enter right over 1s">
                        <h1>空气净化器</h1>
                    </div>
                    <nav className="topNav" data-scroll-reveal="enter bottom over 1s after 1s">
                        <ul className="topUl">
                            <li>
                             <Link to="/index">首页</Link>
                            </li>
                            <li>
                                <Link to="/about">关于我</Link>
                            </li>
                            <li>
                                <Link to="/life">慢生活</Link>
                            </li>
                            <li>
                                <Link to="/learn">学无止境</Link>
                            </li>
                            <li>
                                <Link to="/saying">留言</Link>
                            </li>
                            <li>
                                <Link to="/login">登录</Link>
                            </li>
                        </ul>
                    </nav>

                </header>
        )
    }
}
export default Header;