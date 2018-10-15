import React from 'react';
import GoBack from 'components/goBack/GoBack'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import user_info from '@/acitons/user_info'
import showCheck from '@/util/showCheck'
import checkText from '@/acitons/checkText'
import './style.less'
class ModifyPass extends React.Component {
    constructor(){
        super()
        this.state={
            showPass: true
        }
        this.submitPass= this.submitPass.bind(this)
    }
    changeShow(){
        this.setState({
            showPass: false
        })
    }
    submitPass(){
        console.log('修改');
        const oldPass= document.getElementById('oldPass')
        oldPass.style.type='password'
    }
    render() {
        return (
        <div className="modify-pass">
            <GoBack title='修改密码' history={this.props.history}/>
            <div className='modify-pass-box'>
                <div className='title'>旧密码：</div>
                <input id='oldPass' type='text' placeholder='若包含字母，请注意区分大小写'/>
                <div className='title'>新密码：</div>
                <input type='text' placeholder='密码必须为8-16位(字母、数字、特殊字符的组合)'/> 
                <div onClick={this.submitPass} className='submit'>确定</div>  
                <span className={this.state.showPass?'show-pass':'hide-pass'} onClick={this.changeShow}></span>显示密码
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