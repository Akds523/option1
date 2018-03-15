import React,{Component} from 'react';
import '../../blog/css/public.css';
import '../../blog/css/life.css';
import Header from '../../blog/blog-js/header';
import Footer from "./footer";
class Life extends Component{
    render(){
        return(
            <div>
               <Header />
                <article>
                    <div className="container">
                        <h2 className="ctitle">
                            <b>慢生活</b>
                            <span>"慢生活"不是懒惰，放慢速度不是拖延时间，而是让我们在生活中寻找平衡</span>
                        </h2>
                        <div className="photo_wall">
                            <ul className="wall_a">
                                <li><a href="/"><img src={require("../images/q1.jpg")}/>
                                    <figcaption>
                                        <h2>不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏 </h2>
                                    </figcaption>
                                </a></li>
                                <li><a href="/"><img src={require("../images/q2.png")}/>
                                    <figcaption>
                                        <h2>不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏 </h2>
                                    </figcaption>
                                </a></li>
                                <li><a href="/"><img src={require("../images/q3.jpg")}/>
                                    <figcaption>
                                        <h2>不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏 </h2>
                                    </figcaption>
                                </a></li>
                                <li>
                                    <p className="text_a"><a href="/">一个人最好的模样大概是平静一点，坦然接受自己所有的弱点，不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏......</a></p>
                                </li>
                                <li><a href="/"><img src={require("../images/q4.jpg")}/>
                                    <figcaption>
                                        <h2>不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏 </h2>
                                    </figcaption>
                                </a></li>
                                <li>
                                    <p className="text_b"><a href="/">逃避自己的人，最终只能导致自己世界的崩塌，而变得越来越没有安全感。</a></p>
                                </li>
                                <li><a href="/"><img src={require("../images/q5.jpg")}/>
                                    <figcaption>
                                        <h2>不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏 </h2>
                                    </figcaption>
                                </a></li>
                                <li><a href="/"><img src={require("../images/q.jpg")}/>
                                    <figcaption>
                                        <h2>不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏 </h2>
                                    </figcaption>
                                </a></li>
                            </ul>
                        </div>
                        <ul className="time_line">
                            <li>
                                <time className="tm_time"><span>08-08</span> <span>2017</span></time>
                                <div className="tm_icon">
                                </div>
                                <div className="tm_label" data-scroll-reveal="enter right over 1s" >
                                    <h2>linux</h2>
                                    <p><span className="blog_pic"><a href="/"><img src={require("../images/linux.png")}/></a></span>Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定....</p>
                                    <a href="/" target="_blank" className="readmore">阅读全文&gt;&gt;</a> </div>
                            </li>
                            <li>
                                <time className="tm_time"><span>08-08</span> <span>2017</span></time>
                                <div className="tm_icon">
                                </div>
                                <div className="tm_label" data-scroll-reveal="enter right over 1s" >
                                    <h2>linux</h2>
                                    <p><span className="blog_pic"><a href="/"><img src={require("../images/linux.png")}/></a></span>Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定...</p>
                                    <a href="/" target="_blank" className="readmore">阅读全文&gt;&gt;</a> </div>
                            </li>
                            <li>
                                <time className="tm_time"><span>08-08</span> <span>2017</span></time>
                                <div className="tm_icon">
                                </div>
                                <div className="tm_label" data-scroll-reveal="enter right over 1s" >
                                    <h2>linux</h2>
                                    <p><span className="blog_pic"><a href="/"><img src={require("../images/linux.png")}/></a></span>Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定...</p>
                                    <a href="/" target="_blank" className="readmore">阅读全文&gt;&gt;</a> </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <Footer />
            </div>
        )
    }
}
export default Life;
