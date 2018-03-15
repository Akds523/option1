import React,{Component} from 'react';
import '../../blog/css/public.css';
import '../../blog/css/login.css';
import {Link} from 'react-router-dom';
class Login extends Component{
    constructor(){
        super();
        this.state = {
            arr:[]
        }
    }
    writing = () => {
      alert(1);
    };
    render(){
        return(
            <div>
                <div className="login_wrap">
                    <div className="login">
                        <h1>空气净化器</h1>
                        <form>
                            <p>
                                <input type="text" id="name" name="name"  placeholder="用户名" className="user_pass w-100" />
                            </p>
                            <p>
                                <input type="password" id="password" name="password"  placeholder="密码" className="user_pass w-100" />
                            </p>
                            <p>
                                <button type="submit" className="btn-l w-100 primary" onClick={this.writing}>登录</button>
                            </p>
                            <p>
                                <label >
                                    <input type="checkbox" name="remember" className="checkbox" value="1" id="remember"/>
                                    下次自动登录
                                </label>
                            </p>
                        </form>
                        <p className="link"><Link to="/index">返回首页</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;