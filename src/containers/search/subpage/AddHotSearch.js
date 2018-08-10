import React from 'react';
import Loading from 'components/loading/Loading'
import HotSearch from 'components/hotSearch/HotSearch'
class AddHotSearch extends React.Component {
  constructor(){
    super()
    this.state={
      hotSearches: []
    }
  }
  render() {
    return (
      <div>
        {
          this.state.hotSearches.length === 0 ?
          <Loading /> :
          <HotSearch hotSearches={this.state.hotSearches} changeKeyWord={this.props.changeKeyWord} toSearch={this.props.toSearch}/>
        }
        
      </div>
    );
  }
  componentDidMount(){
    // 后台获取热搜
    let hotSearches=['a','鞋子','cde']
    this.setState({
      hotSearches: hotSearches
    })

  }
}

export default AddHotSearch;