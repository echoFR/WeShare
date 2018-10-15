import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from 'containers/home/Home'
import User from 'containers/user/User'
import Sign from 'containers/sign/Sign'
import Search from 'containers/search/Search'
import Message from 'containers/message/Message'
import Follow from 'containers/follow/Follow'
import Fans from 'containers/fans/Fans'
import Moving from 'containers/moving/Moving'
import SearchDetail from 'containers/searchDetail/SearchDetail'
import AllGroup from 'containers/allGroup/AllGroup'
import GroupInfo from 'containers/groupInfo/GroupInfo'
import Setting from 'containers/setting/Setting'
import ModifyPass from '../containers/modify_pass/ModifyPass'
export default class RouteConfig extends React.Component{
  render(){
    return(
        <Switch>
          <Route path="/" exact render={() => (
                  <Redirect to="/home" />
          )}/>
          <Route path="/home"  component={Home}/>
          <Route path="/sign"  component={Sign}/>    
          <Route path="/message"  component={Message}/>
          <Route path="/user"  component={User}/>
          <Route path="/follow"  component={Follow}/>
          <Route path="/fans"  component={Fans}/>
          <Route path="/moving"  component={Moving}/>          
          <Route path="/search" exact component={Search}/>
          <Route path="/search/:keyword"  component={SearchDetail}/>
          <Route path='/allgroup' component={AllGroup}/>  
          <Route path='/group-info/:id' component={GroupInfo}/>  
          <Route path='/setting' component={Setting} />
          <Route path='/modify_pass' component={ModifyPass} />          
          {/* modify_email */}
        </Switch>
    )
  }
}
