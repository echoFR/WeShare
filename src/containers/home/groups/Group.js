import React from 'react';
import './groups.less'
import PageHeader from 'components/pageHeader/PageHeader'
import TitleMore from 'components/titleMore/TitleMore'
class Group extends React.Component {
  render() {
    return (
      <div className="groups">
        <PageHeader title='发现圈子'/>
        <TitleMore title='发现圈子'/>
      </div>
    );
  }
}

export default Group;