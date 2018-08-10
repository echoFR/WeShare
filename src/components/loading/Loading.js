import React from 'react';
import './loading.less'
class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <img src={require('./loading.gif')} alt=''/>
      </div>
    );
  }
}

export default Loading;