import React from 'react';
import './SearchDetail.less'
// import Type from './Type'
import GoBack from 'components/goBack/GoBack'
import {NavLink,Route} from 'react-router-dom'
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
      {/* 弄一个home路由 
        默认路由为/search/topics?news
      */}
        <GoBack title={`搜索：${this.props.match.params.keyword}`} history={this.props.history}/>
        <div className='detail-header'>
          <div><NavLink to={`${this.props.match.url}/topics`} replace>帖子</NavLink></div>
          <div><NavLink to={`${this.props.match.url}/groups`} replace>圈子</NavLink></div>
          <div><NavLink to={`${this.props.match.url}/users`} replace>用户</NavLink></div>
        </div>
        <div className='detail-type'>
        </div>
        <div className='detail-box'>
           {/* <Route path={`${this.props.match.url}/topics`} component={Type}/> */}
        </div>
      </div>
    );
  }
}

export default SearchDetail;