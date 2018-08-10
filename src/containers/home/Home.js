import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import Footer from 'components/footer/Footer'
import My from './my/My'
import Recommend from './Recommend/Recommend'
import Groups from './groups/Group'
import Friends from './friends/Friends'
class Home extends React.Component {
  render() {
    return (
      <div>
          <div>
            <Footer />
            <Route path="/home" exact render={() => (
                  <Redirect to="/home/recommend" />
            )}/>
            <Route path={`${this.props.match.url}/recommend`}  component={Recommend}/>
            <Route path={`${this.props.match.url}/groups`}  component={Groups}/>                               
            <Route path={`${this.props.match.url}/friends`}  component={Friends}/>                                                                          
            <Route path={`${this.props.match.url}/my`}  component={My}/> 
          </div>
      </div>
    );
  }
}

export default Home;
