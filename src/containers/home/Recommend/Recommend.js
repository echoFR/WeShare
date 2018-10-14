import React from 'react';
import './recommend.less'
import HomeHeader from 'components/homeHeader/HomeHeader'
import Swipe from 'components/swipe/Swipe'
import AddHotGroup from './subpage/AddHotGroup'
import AddHotPeople from './subpage/AddHotPeople'
import AddHotTopic from './subpage/AddHotTopic'
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <HomeHeader/>
        <Swipe />
        {/* 热门的圈子 */}
        <AddHotGroup />

        {/* 圈内达人 */}
        <AddHotPeople />

        {/* 热门帖子 */}
        <AddHotTopic />
      </div>
    );
  }
}
export default Home;