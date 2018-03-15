import React,{Component} from 'react';
import Header from '../../blog/blog-js/header';
import Footer from "./footer";
import  '../../blog/css/public.css';
import  '../../blog/css/about.css';
class About extends Component  {
    render(){
        return(
            <div>
              <Header />
                <article>
                    <div className="container">
                        <div className="banner">
                            <p data-scroll-reveal="enter top over 2s">技术改变生活</p>
                            <p data-scroll-reveal="enter left over 2s after 1s">所有命运馈赠的礼物，早已在暗中标好价格</p>
                            <p data-scroll-reveal="enter bottom over 2s after 2s">没有努力做事情的生活，会源源不断的产生空虚感。渐渐以至于没有存在感，终至行尸走肉</p>
                        </div>
                        <div className="davy_road">
                            <div className="time_road">
                            </div>
                            <ul>
                                <li className="time1">
                                    <a href="">linux入行</a>
                                    <div className="data_view">2012</div>
                                </li>
                                <li className="time2">
                                    <a href="">linux入行</a>
                                    <div className="data_view">2012</div>
                                </li>
                                <li className="time3">
                                    <a href="">linux入行</a>
                                    <div className="data_view">2012</div>
                                </li>
                                <li className="time4">
                                    <a href="">linux入行</a>
                                    <div className="data_view">2012</div>
                                </li>
                                <li className="time5">
                                    <a href="">linux入行</a>
                                    <div className="data_view">2012</div>
                                </li>
                            </ul>
                        </div>
                        <div className="about_life">
                            <h2>Just about me</h2>
                            <ul>
                                <p>
                                    Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。
                                    Linux操作系统诞生于1991 年10 月5 日（这是第一次正式向外公布时间）。Linux存在着许多不同的Linux版本，但它们都使用了Linux内核。Linux可安装在各种计算机硬件设备中，比如手机、平板电脑、路由器、视频游戏控制台、台式计算机、大型机和超级计算机。
                                    严格来讲，Linux这个词本身只表示Linux内核，但实际上人们已经习惯了用Linux来形容整个基于Linux内核，并且使用GNU 工程各种工具和数据库的操作系统。发展和成长过程始终依赖着五个重要支柱：UNIX 操作系统、MINIX 操作系统、GNU计划、POSIX 标准和Internet 网络。
                                </p>
                            </ul>
                            <h2>About my blog</h2>
                            <p>域  名：http://localhost:3000 创建于2011年01月12日 </p>
                            <p>服务器：阿里云服务器<a href="https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=8smrzoqa&amp;productCode=vm" target="_blank" className="blog_link">购买空间</a><a href="/jstt/web/2014-01-18/644.html" target="_blank" className="blog_link">参考我的空间配置</a></p>
                        </div>
                    </div>
                </article>
               <Footer />
            </div>
        )
    }
}
export default About;