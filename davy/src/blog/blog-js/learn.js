import React,{Component} from 'react';
import '../../blog/css/public.css';
import '../../blog/css/learn.css';
import Header from '../../blog/blog-js/header';
import Footer from "./footer";
class Learn extends Component{
    render(){
        return(
            <div>
                <Header />
                <article>
                    <div className="container">
                        <h2 className="ctitle"><b>学无止境</b> <span>不要轻易放弃。学习成长的路上，我们长路漫漫，只因学无止境。</span></h2>
                        <div className="rnav">
                            <ul>
                                <li><a href="">linux</a></li>
                                <li><a href="http://www.ip3q.com/">IP查询</a></li>
                                <li><a href="">Mysql</a></li>
                                <li><a href="">linux</a></li>
                                <li><a href="">linux</a></li>
                                <li><a href="">linux</a></li>
                            </ul>
                        </div>
                        <ul className="time_line">
                            <li>
                                <time className="tm_time" ><span>08-08</span> <span>2017</span></time>
                                <div className="tm_icon">
                                </div>
                                <div className="tm_label" data-scroll-reveal="enter right over 1s" >
                                    <h2>linux</h2>
                                    <p><span className="blog_pic"><a href="/"><img src={require("../images/linux.png")}/></a></span>注意事项：保证ES集群不再接受新的数据(如果是备份的话，这一点可以不考虑，但是做数据迁移的话，建议这样做）如果是ES集群，建议有一个共享文件夹位置是所有节点都能访问的。注册快照仓库：ES是通过快</p>
                                    <a href="/" target="_blank" className="readmore">阅读全文&gt;&gt;</a> </div>
                            </li>
                            <li>
                                <time className="tm_time" ><span>08-08</span> <span>2017</span></time>
                                <div className="tm_icon">
                                </div>
                                <div className="tm_label" data-scroll-reveal="enter right over 1s" >
                                    <h2>linux</h2>
                                    <p><span className="blog_pic"><a href="/"><img src={require("../images/linux.png")}/></a></span>注意事项：保证ES集群不再接受新的数据(如果是备份的话，这一点可以不考虑，但是做数据迁移的话，建议这样做）如果是ES集群，建议有一个共享文件夹位置是所有节点都能访问的。注册快照仓库：ES是通过快</p>
                                    <a href="/" target="_blank" className="readmore">阅读全文&gt;&gt;</a> </div>
                            </li>
                            <li>
                                <time className="tm_time" ><span>08-08</span> <span>2017</span></time>
                                <div className="tm_icon">
                                </div>
                                <div className="tm_label" data-scroll-reveal="enter right over 1s" >
                                    <h2>linux</h2>
                                    <p><span className="blog_pic"><a href="/"><img src={require("../images/linux.png")}/></a></span>注意事项：保证ES集群不再接受新的数据(如果是备份的话，这一点可以不考虑，但是做数据迁移的话，建议这样做）如果是ES集群，建议有一个共享文件夹位置是所有节点都能访问的。注册快照仓库：ES是通过快</p>
                                    <a href="/" target="_blank" className="readmore">阅读全文&gt;&gt;</a> </div>
                            </li>
                        </ul>
                        <div className="page"><a title="Total record"><b>107</b> </a><b>1</b><a href="/news/index_2.html">2</a>
                            <a href="/news/index_3.html">3</a><a href="/news/index_4.html">4</a><a href="/news/index_5.html">5</a>
                            <a href="/news/index_2.html">&gt;</a><a href="/news/index_5.html">&gt;&gt;</a></div>
                    </div>
                </article>
               <Footer />
            </div>
        )
    }
}
export default Learn;