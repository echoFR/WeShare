import React from 'react';
import './pageheader.less'
class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header">
        <div>
          <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-weibiaoti101"></use>
          </svg>
        </div>
        <div>{this.props.title}</div>
        <div>
          <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-haoyou"></use>
          </svg>
        </div>
      </div>
    );
  }
}

export default PageHeader;