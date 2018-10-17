import React from 'react';
import GoBack from 'components/goBack/GoBack'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import user_info from '@/acitons/user_info'
import {checkPass,checkEmpty} from '@/util/util'
import checkText from '@/acitons/checkText'
import showCheck from '../../util/showCheck'
import './style.less'
import {modifyPass} from '@/axios/user_info'
class ModifyPass extends React.Component {
    constructor(){
        super()
        this.state={
            isShowPass: false,
            old_pass: '',
            new_pass: ''
        }
        this.submitPass= this.submitPass.bind(this)
        this.changeShow= this.changeShow.bind(this)
        this.handleChange= this.handleChange.bind(this)
        this.upCheckBox=this.upCheckBox.bind(this)    
    }
    upCheckBox(text){
        showCheck()
        this.props.checkTextAction.update(text)
    }
    changeShow(flag){
        const oldPass= document.getElementById('oldPass')
        const newPass= document.getElementById('newPass')
        if(flag){ 
           oldPass.type='password' 
           newPass.type='password' 
           this.setState({
            isShowPass: false
           })
                   
        }else{
            oldPass.type='text'
            newPass.type='text' 
            this.setState({
                isShowPass: true
            })

                       
        }
    }
    handleChange(e,type){
        if(type==='oldPass'){
            this.setState({
                old_pass: e.target.value
            })
        }else if(type==='newPass'){
            this.setState({
                new_pass: e.target.value
            })
        }
    }
    submitPass(){
        const reg= /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,}|(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[0-9])(?=.*[^A-Za-z0-9])|).{8,16}$/
        if(checkEmpty(this.state.old_pass)){
            this.upCheckBox('旧密码输入不能为空');
        }else if(checkEmpty(this.state.new_pass)){
            this.upCheckBox('新密码输入不能为空');
        }else if(!checkPass(reg,this.state.old_pass)){
            this.upCheckBox('旧密码格式不正确');            
        }else if(!checkPass(reg,this.state.new_pass)){
            this.upCheckBox('新密码格式不正确')
        }else if(this.state.old_pass===this.state.new_pass){
            this.upCheckBox('两次输入不能一样')            
        }else{
            // 修改密码
            modifyPass(this.props.user_info.email,this.state.old_pass,this.state.new_pass,(data)=>{
                this.upCheckBox(data.data)
                if(!data.error){    //修改成功  自动退出
                    this.props.user_infoAciton.log_out();
                    this.props.history.replace('/home/my');
                }
            })
        }
    }
    render() {
        return (
        <div className="modify-pass">
            <GoBack title='修改密码' history={this.props.history}/>
            <div className='modify-pass-box'>
                <div className='title'>旧密码：</div>
                <input id='oldPass' type='password'  placeholder='若包含字母，请注意区分大小写' value={this.state.old_pass} onChange={(e)=>{this.handleChange(e,'oldPass')}}/>
                <div className='title' >新密码：</div>
                <input type='password' id='newPass'  placeholder='密码必须为8-16位(字母、数字、特殊字符的组合)' value={this.state.new_pass} onChange={(e)=>{this.handleChange(e,'newPass')}}/> 
                <div onClick={this.submitPass} className='submit'>确定</div>  
                <span className={this.state.isShowPass?'show-pass':'hide-pass'} onClick={()=>{this.changeShow(this.state.isShowPass)}}></span>显示密码
            </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return{
      user_info: state.user_info,
      checkText: state.checkText,
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      user_infoAciton: bindActionCreators(user_info,dispatch),
      checkTextAction: bindActionCreators(checkText,dispatch)
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModifyPass);