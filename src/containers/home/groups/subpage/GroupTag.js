import React from 'react';
import './style.less'
import Loading from 'components/loading/Loading'
import {getGroupTag} from '@/axios/group'
import {Link} from 'react-router-dom'
class GroupTag extends React.Component {
    constructor(){
        super()
        this.state={
            tags: []
        }
    }
    render() {
        const arr=this.state.tags.slice(0,6);
        return (
        <div className="group-tag">
            {
                arr.length === 0? <Loading />:
                arr.map((item,index)=>{
                    const bagImg = {
                        backgroundImage: `url(${require(`@/css/img/${item.tag_img}`)})`,
                    };
                    return(
                        <div key={index} className='tag-box' style={bagImg}>
                        <Link to={{pathname:`/allgroup/${item.group_tag_id}`}}>{item.name}</Link>
                        </div>
                    )
                })
            }
        </div>
        );
    }
    componentDidMount(){
        if(localStorage.getItem('group_tag')!=null){
            this.setState({
                tags: JSON.parse(localStorage.getItem('group_tag'))
            })
        }else{
            getGroupTag((data)=>{
                if(!data.error){
                    this.setState({
                        tags: data.data
                    })
                    // 做缓存处理  localStorage/redux
                    localStorage.setItem('group_tag',JSON.stringify(data.data))
                }else{
                    return
                }
            })
        }
        
    }
}

export default GroupTag;