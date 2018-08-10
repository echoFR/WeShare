import React from 'react';
import GoBack from 'components/goBack/GoBack'

class Moving extends React.Component {
  render() {
    return (
      <div className="moving">
        <GoBack title='动态列表' history={this.props.history}/>
      </div>
    );
  }
}

export default Moving;