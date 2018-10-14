import React from 'react';
import GoBack from 'components/goBack/GoBack'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import user_info from '@/acitons/user_info'
import './fans.less'
import PeopleList from 'components/peopleList/PeopleList'
import NoList from 'components/noList/NoList'
import {getFans} from '../../axios/user_Relation'
class Fans extends React.Component {
  constructor(){
    super()
    this.state={
      follows: [],
    }
  }
  render() {
    return (
      <div className="fans">
        <GoBack title='粉丝列表' history={this.props.history}/>
        { 
          this.state.follows.length === 0 ? <NoList text='还没有任何粉丝哦~'/> : 
          <PeopleList list={this.state.follows} history={this.props.history} user_id={this.props.user_info.user_id}></PeopleList>
        }
        
      </div>
    );
  }
  componentDidMount(){
    if(this.props.user_info != null){
      if(this.props.user_info.user_id!==0){
        // 获取粉丝列表
        getFans(this.props.user_info.user_id,(data)=>{
          if(!data.error){
            let follows=data.data.map((item,index)=>{
              return item.user_id
            })
            this.setState({
              follows: follows
            })
          }
        })
      }
    }
  }
}
function mapStateToProps(state){
  return{
    user_info: state.user_info
  }
}
function mapDispatchToProps(dispatch){
  return{
    user_infoAction: bindActionCreators(user_info,dispatch) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fans);