import React,{Component} from 'react';
import '../../blog/css/public.css';
import '../../blog/css/saying.css';
import Header from '../../blog/blog-js/header';
import Footer from "./footer";
class Saying extends Component{
    render(){
        return(
            <div>
               <Header />
                <article>
                    <div className="container">
                        <h2 className="ctitle"><b>留言板</b> <span>你，生命中最重要的过客，之所以是过客，因为你未曾为我停留。</span></h2>
                        <div className="g_book">
                            <div className="s_about">
                                <div id="fountainG">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </div>
                                <div className="about_girl"><span><a href="/"><img src={require("../images/books.jpg")}/></a></span>
                                    <p>当您驻足停留过，从此便注定我们的缘分。站在时间的尽头，我们已是朋友，前端的路上我再也不用一个人独自行走。</p>
                                </div>
                                <div className="g_bko">
                                    <div className="s_message">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        )
    }
}
export default Saying;