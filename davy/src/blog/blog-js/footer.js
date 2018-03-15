import React,{Component} from 'react';
import '../../blog/css/public.css';
import {Link} from 'react-router-dom'
class Footer extends Component{
    render(){
        return(
                <footer>
                    < p className="footer_nav">
                        <Link to="/index">首页</Link>
                        <Link to="/about">关于我</Link>
                        <Link to="/life">慢生活</Link>
                        <Link to="/learn">学无止境</Link>
                        <Link to="/saying">留言</Link>
                        <Link to="login">登录</Link>
                    </p>
                    <br />
                </footer>
        )
    }
}
export default Footer;