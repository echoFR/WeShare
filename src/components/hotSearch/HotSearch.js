import React from 'react';
import './hotSearch.less'
import Item from 'components/hotSearch/Item'
class HotSearch extends React.Component {
  render() {
    return (
      <div className="hot-search">
        <div className='hot-search-title'>
            <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-resou_pxxiankuan"></use>
            </svg>
            圈友热搜
        </div>
        <div className='hot-search-list'>
            {
                this.props.hotSearches.map((item,index)=>{
                    return(
                        <Item item={item} key={index} changeSearches={this.props.changeSearches} changeKeyWord={this.props.changeKeyWord} toSearch={this.props.toSearch}/>
                    )
                })
            }
        </div>
      </div>
    );
  }
}

export default HotSearch;