import React from 'react';
import './style.less'
import GoBack from 'components/goBack/GoBack'
class GroupInfo extends React.Component {
  render() {
    return (
      <div className="group-info">
      <GoBack title='圈子详情' history={this.props.history}/>
      group-info
      </div>
    );
  }
}

export default GroupInfo;