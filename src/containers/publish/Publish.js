import React from 'react';
import GoBack from 'components/goBack/GoBack'
import './style.less'
import checkText from '@/acitons/checkText'
import user_info from '@/acitons/user_info'
import showCheck from '../../util/showCheck'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {publishMove} from '../../axios/moving' 
class Publish extends React.Component {
    constructor(){
        super()
        this.state={
            filesArr: [],
        }
        this.toSubmit=this.toSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.drawToCanvas=this.drawToCanvas.bind(this)
        this._insertimg= this._insertimg.bind(this)
        this.upCheckBox=this.upCheckBox.bind(this)
    }
    upCheckBox(text){
        showCheck()
        this.props.checkTextAction.update(text)
    }
    handleChange(e){
        var files= e.target.files;
        const fnum=e.target.files.length;
        if(fnum>9){
            this.upCheckBox('最多选择9张图')
            return; 
        }
        for(let i=0;i<fnum;i++){
             const file= e.target.files[i];
            if(!/image\/\w+/.test(file.type)){
                this.upCheckBox('请确保文件为图像类型')
                return;
            } 
            if( this.state.filesArr.length){
                if(this.state.filesArr.length+1>9){
                    this.upCheckBox('最多添加9张图')
                    return; 
                }
            }
            this.state.filesArr.push(files[i])
            // 显示到页面
            const reader = new FileReader();
            reader.readAsDataURL(file); //转化成base64数据类型
            reader.onloadstart = function () {
                //用以在上传前加入一些事件或效果（加载中）
            };
            reader.onloadend = ()=>{ 
                const imgData= reader.result;
                this.drawToCanvas(imgData);
            }
        }
    }
    // 插入图片到编辑器
    _insertimg(str){
        // 插入图片到编辑器
        // var img_url = `<img src='${reader.result}'/>`;
        //     // 加入图片换行
        // this._insertimg(img_url+'<br/>'); 
        document.getElementById('testdiv').focus();
        // 获取选定对象
        var selection= window.getSelection ? window.getSelection() : document.selection;
        // 选中区域 最后光标对象
        var range= selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        if (!window.getSelection){  // IE8 下
            document.getElementById('testdiv').focus();
            range.pasteHTML(str);
            range.pasteHTML();            
            range.collapse(false);
            range.select();
        }else{  // 其他主流浏览器
            document.getElementById('testdiv').focus();
            range.collapse(false);
            var hasR = range.createContextualFragment(str);
            var hasR_lastChild = hasR.lastChild;
            while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() === "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() === "br") {
                var e = hasR_lastChild;
                hasR_lastChild = hasR_lastChild.previousSibling;
                hasR.removeChild(e)
            }                                
            range.insertNode(hasR);
            if (hasR_lastChild) {
                range.setEndAfter(hasR_lastChild);
                range.setStartAfter(hasR_lastChild)
            }
            selection.removeAllRanges()
            selection.addRange(range)
        }
    }
    // canvas预览图片
    drawToCanvas(imgData){ 
        const myCanvas=document.getElementById('myCanvas')     
        var img = new Image();
        img.src = imgData;
        var result = `<img src='${imgData}' alt=''/>`;
        const div = document.createElement('div');
        div.innerHTML = result;
        const span=document.createElement('span');
        span.innerText='x';
        div.appendChild(span)
        span.onclick=()=>{
            for (let index = 0; index < myCanvas.childNodes.length; index++) {
                if(myCanvas.childNodes[index]===span.parentElement){
                    const arr= this.state.filesArr;
                    arr.splice(index,1)
                    this.setState((prevState,props)=>({
                        filesArr: arr
                    }))
                    myCanvas.removeChild(span.parentNode)
                }
            }
        }
        document.getElementById('myCanvas').appendChild(div); 
        Image.prototype.callback=(data)=>{
        }
        img.onload = function(){
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var w = 0;
            var h = 0;
            if (this.width > this.height) {
                h = 1000;
                const scale = this.width / this.height;
                h = h > this.height ? this.height : h;
                w = h * scale;
            }
            else {
                w = 1000;
                const scale_ = this.width / this.height;
                w = w > this.width ? this.width : w
                h = w / scale_;
            }
            var anw = document.createAttribute("width");
            var anh = document.createAttribute("height");
            if (this.width > this.height) {
                anw.value = h;
                anh.value = w;
            }
            else {
                anw.value = w;
                anh.value = h;
            }
            canvas.setAttributeNode(anw);
            canvas.setAttributeNode(anh);
            if (this.width > this.height) {
                ctx.translate(h, 0);
                ctx.rotate(90 * Math.PI / 180)
                ctx.drawImage(this, 0, 0, w, h);
                ctx.restore();
            }
            else {
                ctx.drawImage(this, 0, 0, w, h);
            }
            const  dataURL = canvas.toDataURL('image/jpeg');
            //回调函数用以向数据库提交数据
            this.callback(dataURL);
        }
    }
    toSubmit(){     
        const Form=new FormData();
        const title= document.getElementById('title').value;
        const content= document.getElementById('testdiv').innerText
        const contentHtml=document.getElementById('testdiv').innerHTML
        if(title.length === 0){
            this.upCheckBox('标题不能为空');
            return;
        }else if(title.length > 50){
            this.upCheckBox('标题不能超过50字');            
            return;
        }else if(contentHtml.length === 0){
            this.upCheckBox('正文不能为空');            
            return;
        }else if(content.length>3500){
            this.upCheckBox('正文不能多于3500字');            
            return;
        }
        Form.append('title',title);
        Form.append('content',content);
        for (let index = 0; index < this.state.filesArr.length; index++) {
            Form.append('file[]',this.state.filesArr[index])
        }
        publishMove(Form,(data)=>{
            if(data.error){
                this.upCheckBox(data.data)
                return;
            }
            this.props.history.replace('/home/friends');
        })
    }
    render() {
        return (
        <div className="publish">
            <GoBack title='发表图文' history={this.props.history} />
            <span className='publish-btn' onClick={this.toSubmit}>发布</span>
            <div className='contener'>
                <input type='text' id='title' placeholder='请输入标题' className='title'/>
                <div className='auto-div'>
                <div id="testdiv" contentEditable="true" className="editbox"></div>
                <div className='my-canvas' id='myCanvas'>
                </div>
                </div>
                <div className='more'>
                    <div>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-aite1"></use>
                        </svg>
                    </div>
                    <div>
                    <label htmlFor='pic'>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-fatupian"></use>
                        </svg>
                    </label>
                    <input type='file' multiple='true' className='input-file' accept='image/*' id='pic' onChange={(e)=>{this.handleChange(e)}}/>
                    </div>    
                </div>
            </div>   
        </div>
        );
    }
    componentDidMount(){
        if(!this.props.user_info.user_id){
            this.upCheckBox('还没有登录，请先登录');
            this.props.history.replace('/sign');
        }
    }
}

function mapStateToProps(state){
    return{
      checkText: state.checkText,
      user_info: state.user_info
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      checkTextAction: bindActionCreators(checkText,dispatch),
      user_infoAction: bindActionCreators(user_info,dispatch)      
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Publish);