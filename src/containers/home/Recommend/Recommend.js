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
class Home extends React.Component {
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