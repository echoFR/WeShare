import React from 'react';
import './footer.less'
import {NavLink} from 'react-router-dom'
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
            <NavLink to='/home' exact>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-shouye"></use>
            </svg>
            <p>首页</p>
            </NavLink>
        </div>
        <div className='group'>
            <NavLink to='/home/groups'>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-quanzi"></use>
            </svg>
            <p>圈子</p>
            </NavLink>
        </div>
        <div className='public'>
            <NavLink to='/publish'>
            <span className='public-box'>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-fabu-copy"></use>
            </svg>
            </span>
            <p>发布</p>  
            </NavLink>           
        </div>
        <div>
            <NavLink to='/home/friends'>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-haoyou"></use>
            </svg>
            <p>圈友</p>  
            </NavLink>          
        </div>
        <div>
            <NavLink to='/home/my'>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-home"></use>
            </svg>
            <p>我的</p>
            </NavLink>             
        </div>
      </div>
    );
  }
}

export default Footer;