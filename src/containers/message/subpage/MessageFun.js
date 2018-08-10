import React from 'react';
import {Link} from 'react-router-dom'
import './Messagefun.less'
class MessageFun extends React.Component {
  render() {
    return (
      <div className="message-fun">
        <div>
            <Link to='/message' >
                <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-pinglun"></use></svg>
                评论我的
            </Link> 
        </div>
        <div>
            <Link to='/message' >
                <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-aite"></use></svg>
                提到我的
            </Link> 
        </div>
        <div>
            <Link to='/message' >
                <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-zan1"></use></svg>
                赞过我的
            </Link> 
        </div>
        <div>
            <Link to='/message' >
                <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-shoucang-"></use></svg>
                收藏我的
            </Link> 
        </div>
        <div>
            <Link to='/message' >
                <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-guanzhu"></use></svg>
                关注我的
            </Link> 
        </div>
      </div>
    );
  }
}

export default MessageFun;