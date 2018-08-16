import React from 'react';
import GoBack from 'components/goBack/GoBack'
class Follow extends React.Component {
  render() {
    console.log(this.props);
    
    return (
      <div className="follow">
        <GoBack title='关注列表' history={this.props.history}/>
      </div>
    );
  }
}

export default Follow;