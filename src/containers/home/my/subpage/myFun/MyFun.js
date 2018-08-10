import React from 'react';
import './myfun.less'
import {Link} from 'react-router-dom'
class MyFun extends React.Component {
  render() {
    return (
      <div>
        <div className='my-function'>
            <div>
                <Link to='/message' >
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-news"></use></svg>
                    我的消息
                </Link> 
            </div>
            <div>
                <Link to='/user'>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-shoucang-"></use></svg>
                    我的收藏
                </Link> 
            </div>
            <div>
                <Link to='/user'>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-zan1"></use></svg>
                    我的点赞
                </Link> 
            </div>
            <div>
                <Link to='/user'>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-caogao"></use></svg>
                    我的草稿
                </Link>
            </div>
            <div>
                <Link to='/user'>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-zuji"></use></svg>
                    我的足迹
                </Link>
            </div>
        </div>
        <div className='my-setting'>
            <div>
                <Link to='/user'>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-zhanghaoshezhi"></use></svg>
                    账号设置
                </Link>
            </div>
            <div>
                <Link to='/user'>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-yijianfankui"></use></svg>
                    意见反馈
                </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default MyFun;