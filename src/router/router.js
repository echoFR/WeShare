import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from 'containers/home/Home'
import User from 'containers/user/User'
import Search from 'containers/search/Search'
import Message from 'containers/message/Message'
import Follow from 'containers/follow/Follow'
import Fans from 'containers/fans/Fans'
import Moving from 'containers/moving/Moving'
import SearchDetail from 'containers/searchDetail/SearchDetail'
export default class RouteConfig extends React.Component{
  render(){
    return(
        <Switch>
          <Route path="/" exact render={() => (
                  <Redirect to="/home" />
          )}/>
          <Route path="/home"  component={Home}/>
          <Route path="/message"  component={Message}/>
          <Route path="/user"  component={User}/>
          <Route path="/follow"  component={Follow}/>
          <Route path="/fans"  component={Fans}/>
          <Route path="/moving"  component={Moving}/>          
          <Route path="/search" exact component={Search}/>
          <Route path="/search/:keyword"  component={SearchDetail}/>          
        </Switch>
    )
  }
}
