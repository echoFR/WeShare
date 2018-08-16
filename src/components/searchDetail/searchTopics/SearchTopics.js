import React from 'react';
import './SearchTopics.less'
import {NavLink,Route,Redirect} from 'react-router-dom'
import AddTopic from 'containers/searchDetail/subpage/AddTopic'
class SearchTopics extends React.Component {
  render() {
    return (
      <div className="search-topics">
        <div className='header'>
            <div><NavLink to={`${this.props.match.url}/new`} replace>最新</NavLink></div>
            <div><NavLink to={`${this.props.match.url}/hot`} replace>最热</NavLink></div>
        </div>
        <div>
            <Route path={`${this.props.match.url}`} exact render={()=>
                (<Redirect to={`${this.props.match.url}/new`} />)
            }/>                  
           <Route path={`${this.props.match.url}/:type`} component={AddTopic} replace/>
        </div>
      </div>
      
    );
  }
}

export default SearchTopics;