import React ,{Component} from 'react';
import '../../blog/css/write.css';
import '../../blog/css/write2.css';
import '../../blog/css/writing.css';
class Writing extends Component{
    render(){
        return(
                <div className="main">
                    <div className="body container">
                        <div className="page-title">
                            <h2>撰写新章</h2>
                        </div>
                        <div className="row page-main post-area" role="form">
                            <form action="https://care4u.top/index.php/action/contents-post-edit?_=e36fe03af8db2bad2c19c415bfc5e077" method="post" name="write_post">
                                <div className="col-mb-12 col-tb-9" role="main">
                                    <p className="title">
                                        <label for="title" className="sr-only">标题</label>
                                        <input type="text" id="title" name="title" autocomplete="off" value="" placeholder="标题" className="w-100 text title" />
                                    </p>
                                    <p className="mono url-slug">
                                        <label for="slug" className="sr-only">网址缩略名</label>
                                        空气净化器
                                        <input type="text" id="slug" name="slug" autocomplete="off" value="" className="mono" />
                                        .html
                                        <div className="wmd-edittab">
                                            <a href="">撰写</a>
                                            <a href="">预览</a>
                                        </div>
                                        <ul id="wmd-button-row" className="wmd-button-row">
                                            <li className="wmd-button" id="wmd-bold-button" title="加粗 <strong> Ctrl+B" style="left:0">
                                                <span style="background-position:0 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-italic-button" title="斜体 <strong> Ctrl+I" style="left:25px">
                                                <span style="background-position:-20px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-spacer wmd-spacer1" id="wmd-spacer1">
                                            </li>
                                            <li className="wmd-button" id="wmd-link-button" title="链接 <a> Ctrl+L" style="left:75px">
                                                <span style="background-position:-40px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-quote-button" title="引用 <blockquote> Ctrl+Q" style="left:100px">
                                                <span style="background-position:-60px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-code-button" title="代码 <pre><code> Ctrl+K" style="left:125px">
                                                <span style="background-position:-80px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-image-button" title="图片 <img> Ctrl+G" style="left:150px">
                                                <span style="background-position:-100px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-spacer wmd-spacer2" id="wmd-spacer2">
                                            </li>
                                            <li className="wmd-button" id="wmd-olist-button" title="数字列表 <ol> Ctrl+O" style="left:200px">
                                                <span style="background-position:-120px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-ulist-button" title="普通列表 <ul> Ctrl+U" style="left:225px">
                                                <span style="background-position:-140px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-heading-button" title="标题 <h1>/<h2> Ctrl+H" style="left:250px">
                                                <span style="background-position:-160px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-hr-button" title="分割线 <hr> Ctrl+R" style="left:275px">
                                                <span style="background-position:-180px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-more-button" title="摘要分割线 <!--more--> Ctrl+M" style="left:300px">
                                                <span style="background-position:-280px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-spacer wmd-spacer3" id="wmd-spacer3">
                                            </li>
                                            <li className="wmd-button" id="wmd-undo-button" title="撤销 - Ctrl+Z" style="left:350px">
                                                <span style="background-position:-200px -20px">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-redo-button" title="重做 - Ctrl+Y" style="left:375px">
                                                <span style="background-position:-220px -20px">
                                                </span>
                                            </li>
                                            <li className="wmd-spacer wmd-spacer4" id="wmd-spacer4">
                                            </li>
                                            <li className="wmd-button" id="wmd-fullscreen-button" title="全屏 - Ctrl+J" style="left:425px">
                                                <span style="background-position:-240px 0">
                                                </span>
                                            </li>
                                            <li className="wmd-button" id="wmd-exit-fullscreen-button" title="退出全屏 - Ctrl+E" style="left:450px ;display:none" >
                                                <span style="background-position:-260px 0">
                                                </span>
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        <label for="text" className="sr-only">文章内容</label>
                                        <textarea style="height: 543px" autocomplete="off" id="text" name="text" className="w-100 mono">
                                        </textarea>
                                    </p>

                                    <section id="custom-field" className="post-option fold">
                                        <label id="custom-field-expand" className="label"><a href="##"><i className="i-caret-right">
                                        </i> 自定义字段</a></label>
                                        <table className="list-table mono">
                                            <colgroup>
                                                <col width="25%"/>
                                                <col width="10%"/>
                                                <col width="55%"/>
                                                <col width="10%"/>
                                            </colgroup>
                                            <tr>
                                                <td>
                                                    <label for="fieldname" className="sr-only">字段名称</label>
                                                    <input type="text" name="fieldNames[]" placeholder="字段名称" id="fieldname" className="text-s w-100"/>
                                                </td>
                                                <td>
                                                    <label for="fieldtype" className="sr-only">字段类型</label>
                                                    <select name="fieldTypes[]" id="fieldtype">
                                                        <option value="str">字符</option>
                                                        <option value="int">整数</option>
                                                        <option value="float">小数</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <label for="fieldvalue" className="sr-only">字段值</label>
                                                    <textarea name="fieldValues[]" placeholder="字段值" id="fieldvalue" className="text-s w-100" rows="2">
                                                    </textarea>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-xs">删除</button>
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="description clearfix">
                                            <button type="button" className="btn btn-xs operate-add">+添加字段</button>
                                            自定义字段可以扩展你的模板功能, 使用方法参见 <a href="http://docs.typecho.org/help/custom-fields">帮助文档</a>                        </div>
                                    </section>

                                    <p className="submit clearfix">
                        <span className="right">
                            <input type="hidden" name="cid" value="" />
                            <button type="submit" name="do" value="save" id="btn-save" className="btn">保存草稿</button>
                            <button type="submit" name="do" value="publish" className="btn primary" id="btn-submit">发布文章</button>
                                                        <input type="hidden" name="markdown" value="1" />
                                                    </span>
                                    </p>

                                </div>

                                <div id="edit-secondary" className="col-mb-12 col-tb-3" role="complementary">
                                    <ul className="option-tabs clearfix">
                                        <li className="active w-50"><a href="#tab-advance">选项</a></li>
                                        <li className="w-50"><a href="#tab-files" id="tab-files-btn">附件</a></li>
                                    </ul>


                                    <div id="tab-advance" className="tab-content">
                                        <section className="post-option" role="application">
                                            <label for="date" className="label">发布日期</label>
                                            <p><input className="date w-100" type="text" name="date" id="date" value="" /></p>
                                        </section>

                                        <section className="post-option category-option">
                                            <label className="label">分类</label>
                                            <ul>
                                                <li><input type="checkbox" id="category-1" value="1" name="category[]" />
                                                    <label for="category-1">默认分类</label></li>
                                                <li><input type="checkbox" id="category-5" value="5" name="category[]" />
                                                    <label for="category-5">Linux</label></li>
                                                <li><input type="checkbox" id="category-7" value="7" name="category[]" />
                                                    <label for="category-7">记录</label></li>
                                                <li><input type="checkbox" id="category-22" value="22" name="category[]" />
                                                    <label for="category-22">数据库</label></li>
                                            </ul>
                                        </section>

                                        <section className="post-option">
                                            <label for="token-input-tags" className="label">标签</label>
                                            <p><input id="tags" name="tags" type="text" value="" className="w-100 text" /></p>
                                        </section>
                                    </div>
                                    <div id="tab-files" className="tab-content hidden">
                                        <div id="upload-panel" className="p">
                                            <div className="upload-area" draggable="true">拖放文件到这里<br/>或者 <a href="###" className="upload-file">选择文件上传</a></div>
                                            <ul id="file-list">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Writing;