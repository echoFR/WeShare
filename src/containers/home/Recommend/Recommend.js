import React from 'react';
import cityName from '@/acitons/cityName'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './recommend.less'
import HomeHeader from 'components/homeHeader/HomeHeader'
import TitleMore from 'components/titleMore/TitleMore'
import Swipe from 'components/swipe/Swipe'
import AddHotGroup from './subpage/AddHotGroup'
import AddHotPeople from './subpage/AddHotPeople'
import AddHotTopic from './subpage/AddHotTopic'
// import axios from 'axios'
class Home extends React.Component {
  constructor(){
    super()
    this.state={}
    this.getinfo=this.getinfo.bind(this)
    this.api=this.api.bind(this);
  }
  getinfo(){
    const user='fr';
    const password= '1997';
    this.api({user,password},(data)=>{
      console.log(data);
    });
  }
  api({user,password},cb){
    // axios.get(`http://localhost:9999/admin?user=${param.user}`).then((res)=>{
    //   cb(res.data);
    // }).catch((err)=>{
    //   console.log(err);
    //   console.log('登录后台出错');
    // })
  }
  render() {
    return (
      <div className="home">
        <HomeHeader cityName={this.props.cityName}/>
        <Swipe />
        {/* 热门的圈子 */}
        <AddHotGroup />

        {/* 圈内达人 */}
        <AddHotPeople />

        {/* 热门帖子 */}
        <AddHotTopic />

        {/* 今日精选 */}
        <div className='todayTop'>
          <TitleMore title='今日精选' />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    cityName: state.cityName
  }
}
function mapDispatchToProps(dispatch){
  return{
    cityNameAciton: bindActionCreators(cityName,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);