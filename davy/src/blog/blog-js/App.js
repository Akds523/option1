import React, { Component } from 'react';
import '../../blog/css/index.css';
import '../../blog/css/public.css';
import Header from '../../blog/blog-js/header';
import Footer from "./footer";
class App extends Component {
    render() {
    return (
      <div>
         <Header />
          <article>
              <div className="container">
                  <div className="share" data-scroll-reveal="enter top">
                      <figure>
                          <ul>
                              <a href="">
                                  <img src={require('../images/linux.png')} alt="linux"/>
                                      <span>linux</span>
                              </a>
                          </ul>
                          <p><a href="">linux</a></p>
                          <figcaption>Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定...</figcaption>
                      </figure>
                      <figure>
                          <ul>
                              <a href="">
                                  <img src={require("../images/mysql.png")} alt="mySql"/>
                                      <span>mysql</span>
                              </a>
                          </ul>
                          <p><a href="">mysql</a></p>
                          <figcaption>MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，目前属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件...</figcaption>
                      </figure>
                      <figure>
                          <ul>
                              <a href="">
                                  <img src={require("../images/c.png")} alt="c"/>
                                      <span>c</span>
                              </a>
                          </ul>
                          <p><a href="">mysql</a></p>
                          <figcaption>C语言是一门通用计算机编程语言，应用广泛。C语言的设计目标是提供一种能以简易的方式编译、处理低级存储器、产生少量的机器码以及不需要任何运行环境支持便能运行的编程语言...</figcaption>
                      </figure>
                  </div>
                  <ul className="tm_timeLine">
                      <li>
                          <time className="tm_time">
                              <span>08-08</span>
                              <span>2017</span>
                          </time>
                          <div className="tm_timeIcon">

                          </div>
                          <div className="tm_timeLabel">
                              <h2>使用elastichsearch的snapshot功能备份恢复数据</h2>
                              <p>
                        <span className="blogPic">
                            <img src={require('../images/linux.png')} alt=""/>
                        </span>
                                  注意事项：保证ES集群不再接受新的数据(如果是备份的话，这一点可以不考虑，但是做数据迁移的话，建议这样做）如果是ES集群，建议有一个共享文件夹位置是所有节点都能访问的。注册快照仓库：ES是通过快
                              </p>
                              <a href="" className="reade" target="_blank">阅读全文>></a>
                          </div>
                      </li>
                      <li>
                          <time className="tm_time">
                              <span>08-08</span>
                              <span>2017</span>
                          </time>
                          <div className="tm_timeIcon">

                          </div>
                          <div className="tm_timeLabel">
                              <h2>使用elastichsearch的snapshot功能备份恢复数据</h2>
                              <p>
                        <span className="blogPic">
                            <img src={require('../images/linux.png')} alt=""/>
                        </span>
                                  注意事项：保证ES集群不再接受新的数据(如果是备份的话，这一点可以不考虑，但是做数据迁移的话，建议这样做）如果是ES集群，建议有一个共享文件夹位置是所有节点都能访问的。注册快照仓库：ES是通过快
                              </p>
                              <a href="" className="reade" target="_blank">阅读全文>></a>
                          </div>
                      </li>
                      <li>
                          <time className="tm_time">
                              <span>08-08</span>
                              <span>2017</span>
                          </time>
                          <div className="tm_timeIcon">

                          </div>
                          <div className="tm_timeLabel">
                              <h2>使用elastichsearch的snapshot功能备份恢复数据</h2>
                              <p>
                        <span className="blogPic">
                            <img src={require('../images/linux.png')} alt=""/>
                        </span>
                                  注意事项：保证ES集群不再接受新的数据(如果是备份的话，这一点可以不考虑，但是做数据迁移的话，建议这样做）如果是ES集群，建议有一个共享文件夹位置是所有节点都能访问的。注册快照仓库：ES是通过快
                              </p>
                              <a href="" className="reade" target="_blank">阅读全文>></a>
                          </div>
                      </li>
                  </ul>
              </div>
          </article>
         <Footer />
      </div>
    );
  }
}
export default App;
