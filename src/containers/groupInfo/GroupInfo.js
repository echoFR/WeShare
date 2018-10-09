import React from 'react';
import './style.less'
import GoBack from 'components/goBack/GoBack'
import {getGroupInfo} from '@/axios/group'
import {NavLink,Route,Redirect} from 'react-router-dom'
import GetGroupTopics from './subpage/getGroupTopics/GetGroupTopics'
class GroupInfo extends React.Component {
    constructor(){
        super()
        this.state={
            info: {},
        }
        this.Scroll=this.Scroll.bind(this)
    }
    Scroll(){
        console.log('a');
        
    }
    render() {
        return (
        <div className="group-info-box">
            <GoBack title='圈子详情' history={this.props.history}/>
            <div className='publish'>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-fabu-copy"></use>
                </svg>
            </div>
            {!Object.keys(this.state.info).length?'':(
            <div className='group-info'>    
            <div className='group-info-top'>
                <img src={require(`@/css/img/${this.state.info.group_img}`)} alt=''/>
                <div>
                    <p>{this.state.info.name}</p>
                    <p>{this.state.info.fans_num}人关注 | {this.state.info.topic_num}个帖子</p>
                </div>
                <span className='follow-btn'>关注</span>
            </div> 
            <p>{this.state.info.description}</p>
            </div>
            )}
            <div className='topic-list-box'>
                <div className='list-header'>
                    <NavLink to={{pathname:`${this.props.match.url}/new`,state:this.props.match.params}} replace activeStyle={{borderBottom: '0.1rem solid red'}}>最新</NavLink>
                    <NavLink to={{pathname:`${this.props.match.url}/hot`,state:this.props.match.params}} replace activeStyle={{borderBottom: '0.1rem solid red'}}>热门</NavLink>                    
                </div>
                <div>
                <Route path={`${this.props.match.url}`} exact render={()=>
                (<Redirect to={`${this.props.match.url}/new`} />)
                }/>                  
                <Route path={`${this.props.match.url}/:type`} component={GetGroupTopics}/> 
                </div>
            </div>
        </div>
        );
    }
    componentDidMount(){
        // 获取当前圈子信息
        const id= this.props.match.params.id
        getGroupInfo(id,(res)=>{
            if(res.error){return}
            this.setState({
                info: res.data[0]
            })
        })   
        window.addEventListener('scroll',()=>{
            console.log('a');
        })
    }
}

export default GroupInfo;