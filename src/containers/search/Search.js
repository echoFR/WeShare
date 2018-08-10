import React from 'react';
import './search.less'
import {CheckEmptyStr} from '@/util/util'
import History from './subpage/History'
import {localHistory,addHistory} from '../../util/cache'
import AddHotSearch from './subpage/AddHotSearch'
class Search extends React.Component {
  constructor(){
    super()
    this.state={
      showClose: false,
      searches: []
    }
    this.goBack= this.goBack.bind(this)
    this.toSearch= this.toSearch.bind(this)
    this.close= this.close.bind(this)
    this.inputChange= this.inputChange.bind(this)
    this.changeSearches= this.changeSearches.bind(this)
    this.changeKeyWord= this.changeKeyWord.bind(this)
  }
  changeKeyWord(newKeyWord){
    this.refs.searchBox.value= newKeyWord    
  }
  changeSearches(searches){
    this.setState({
      searches: searches
    })
  }
  goBack(){
    this.props.history.go(-1);
  }
  toSearch(){
    let keyWord = this.refs.searchBox.value;
    if(CheckEmptyStr(keyWord)){
      return
    }
    // 添加历史记录到LocalStorage
    let searches= addHistory(keyWord)
    this.setState({
      searches: searches
    })
    // 到搜索详情
    this.props.history.push(`/search/${keyWord}`)
  }
  close(){
    this.refs.searchBox.value=''
    this.setState({
      showClose: false
    })
  }
  inputChange(e){
    let value= e.target.value;
    if(value !== ''){
      this.setState({
        showClose: true
      })
    }else{
      this.setState({
        showClose: false
      })
    }
  }
  componentDidMount(){
    // 从localstory中找history
    let searches =localHistory();
    this.setState({
      searches: searches
    })
  }
  render() {
    return (
      <div className="search">
          <div className='search-box'>
            <div className='search-goBack' onClick={this.goBack}>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-back"></use>
            </svg>
            </div>
            <div className='search-input'>
              <div className='search-icon'>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-weibiaoti101"></use>
              </svg>
              </div>
              <input type="text" ref='searchBox' onChange={this.inputChange}  placeholder="搜索圈子，用户等"/>
              {
                this.state.showClose ? 
                (<div className='close-icon' onClick={this.close}>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-guanbi1"></use>
                  </svg>
                </div>) :
                ''
              }
            </div>
            <div onClick={this.toSearch}>
            <span style={{color:'#F35339'}}>搜素</span>
            </div>
          </div>
          {/* 最近搜索 */}
          {
            this.state.searches.length === 0 ?
            '' :
            <History searches={this.state.searches} changeSearches={this.changeSearches} changeKeyWord={this.changeKeyWord} toSearch={this.toSearch}/>
          }
          {/* 圈友热搜 */}
          <AddHotSearch changeKeyWord={this.changeKeyWord} toSearch={this.toSearch}/>
      </div>
    );
  }
}

export default Search;