import React from 'react';
import GoBack from 'components/goBack/GoBack'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import user_info from '@/acitons/user_info'
import './follow.less'
import PeopleList from 'components/peopleList/PeopleList'
import NoList from 'components/noList/NoList'
import {getFollows} from '@/axios/user_Relation'
class Follow extends React.Component {
  constructor(){
    super()
    this.state={
      follows: [],
    }
  }
  render() {
    return (
      <div className="follow">
        <GoBack title='关注列表' history={this.props.history}/>
        { 
          this.state.follows.length === 0 ? <NoList text='还没有关注任何人哦~'/> : 
          <PeopleList list={this.state.follows} history={this.props.history} user_id={this.props.user_info.user_id}></PeopleList>
        }
      </div>
    );
  }
  componentDidMount(){
    if(this.props.user_info != null){
      if(this.props.user_info.user_id!==0){
        getFollows(this.props.user_info.user_id,(data)=>{
          if(!data.error){
            let follows=data.data.map((item,index)=>{
              return item.follow_id
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
)(Follow);