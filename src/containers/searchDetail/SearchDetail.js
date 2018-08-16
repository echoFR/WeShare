import React from 'react';
import './SearchDetail.less'
import SearchGroups from  'components/searchDetail/searchGroups/SearchGroups'
import SearchTopics from 'components/searchDetail/searchTopics/SearchTopics'
import SearchUsers from 'components/searchDetail/searchUsers/SearchUsers'
import GoBack from 'components/goBack/GoBack'
import {NavLink,Route,Redirect} from 'react-router-dom'
class SearchDetail extends React.Component {
  constructor(){
    super()
    this.state={
      style: 'topics'
    }
  }
  render() { 
    return (
      <div className="search-detail">
        <GoBack title={`搜索：${this.props.match.params.keyword}`} history={this.props.history}/>
        <div className='detail-header'>
          <div><NavLink to={`${this.props.match.url}/topics`} replace>帖子</NavLink></div>
          <div><NavLink to={`${this.props.match.url}/groups`} replace>圈子</NavLink></div>
          <div><NavLink to={`${this.props.match.url}/users`} replace>用户</NavLink></div>
        </div>
        <div className='detail-box'>
          <Route path={`${this.props.match.url}`} exact render={()=>
            (<Redirect to={`${this.props.match.url}/topics`} />)
          }/>                  
           <Route path={`${this.props.match.url}/topics`} component={SearchTopics}/>        
           <Route path={`${this.props.match.url}/groups`} component={SearchGroups}/>
           <Route path={`${this.props.match.url}/users`} component={SearchUsers}/>           
        </div>
      </div>
    );
  }
}

export default SearchDetail;