import React from 'react';
import GoBack from 'components/goBack/GoBack'
import './all.less'
import {NavLink,Route,Redirect} from 'react-router-dom'
import GetTypeGroup from  './subpage/GetTypeGroup'
class AllGroup extends React.Component {
    constructor(){
        super()
        this.state={
            tags: []
        }
    }
    render() {
        return (
        <div className="all-group">
            <GoBack title='发现圈子' history={this.props.history}/>
                <div className='all-group-header' ref='groupHeader'>
                    {this.state.tags.map((item,index)=>{
                        return(
                            <NavLink to={`/allgroup/${item.group_tag_id}`} replace key={index} activeStyle={{borderBottom: '0.1rem solid red'}}>{item.name}</NavLink>
                        )
                    })}
                </div>
            <Route path={`${this.props.match.url}`} exact render={()=>
            (<Redirect to={`${this.props.match.url}/1`} />)
            }/>                  
           <Route path={`${this.props.match.url}/:id`} component={GetTypeGroup}/>        
        </div>
        );
    }
    componentDidMount(){
        //   获取tag数据
        if(localStorage.getItem('group_tag')==null){
            this.props.history.push('/home/groups')
            return
        }
        this.setState({
            tags: JSON.parse(localStorage.getItem('group_tag'))
        })
    }
}

export default AllGroup;