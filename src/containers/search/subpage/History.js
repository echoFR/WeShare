import React from 'react';
import './history.less'
import Item from 'components/hotSearch/Item'
class History extends React.Component {
    constructor(){
        super()
        this.state={}
        this.clearHistory=this.clearHistory.bind(this)
    }
    clearHistory(){
        localStorage.removeItem('history')
        this.props.changeSearches([])
    }
    render() {
        return (
        <div className="history">
            <div className='search-history-title'>
                <div className='search-history-icon'>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-zuijinsousuo"></use>
                    </svg>最近搜索
                </div>
                <div onClick={this.clearHistory}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-huishou"></use>
                    </svg>
                </div>
            </div>
            <div className='history-list'>            
            {
                this.props.searches.map((item,index)=>{
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

export default History;