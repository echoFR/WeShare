import React from 'react';
import ReactSwipe from 'react-swipe'
import './style.less'
class Swipe extends React.Component {
  render() {
    let swipeOptions={
        speed: 400,
        auto: 2000,
        continuous: true,
        callback: function(index, elem) {
        },
    }
    return (
      <div className="swipe">
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
            <div>
                <img src={require('@/css/img/1.jpg')} alt=""/>
            </div>
            <div>
                <img src={require('@/css/img/2.jpg')} alt=""/>                
            </div>
            <div>
                <img src={require('@/css/img/3.jpg')} alt=""/>
            </div>
        </ReactSwipe>
      </div>
    );
  }
}

export default Swipe;