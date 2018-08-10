import React from 'react';
import GoBack from 'components/goBack/GoBack'
class Fans extends React.Component {
  render() {
    return (
      <div className="fans">
        <GoBack title='粉丝列表' history={this.props.history}/>
      </div>
    );
  }
}

export default Fans;