import React from 'react';
import './titlemore.less'
class TitleMore extends React.Component {
  render() {
    return (
        <div className='title'>
            <div>{this.props.title}</div>
            <div onClick={this.props.changeRoute}>
            更多
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-mjiantou"></use>
            </svg>
            </div>
        </div>
    );
  }
}
export default TitleMore
