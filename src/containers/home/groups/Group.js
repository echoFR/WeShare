import React from 'react';
import './groups.less'
import PageHeader from 'components/pageHeader/PageHeader'
import TitleMore from 'components/titleMore/TitleMore'
import GroupTag from './subpage/GroupTag'
class Group extends React.Component {
  constructor(){
    super()
    this.state={}
    this.allGroup=this.allGroup.bind(this)
  }
  allGroup(){
    this.props.history.push('/allgroup');
  }
  render() {
    return (
      <div className="groups">
        <PageHeader title='发现圈子'/> 
        <TitleMore title='发现圈子' changeRoute={this.allGroup}/>
        <GroupTag />
      </div>
    );
  }
}

export default Group;