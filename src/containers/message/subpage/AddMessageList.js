import React from 'react';
import Loading from 'components/loading/Loading'
import MessageList from 'components/messageList/MessageList'
class AddMessageList extends React.Component {
    constructor(){
        super()
        this.state={
            list: []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.list.length===0 ?
                    <Loading />:
                    <MessageList list={this.state.list}/>
                }
            </div>
        );
    }
    componentDidMount(){
        let list=[
            {
                sender: '谁谁',
                sendTime: '2-10-2',
                message: '每天都要开心每天都要开心的每天都要开心的每天都要开心的每天都要开心的每天都要开心的每天都要开心的每天都要开心的的',
                senderPic: '11.jpg'
            },
            {
                sender: '喔喔',
                sendTime: '7-10-2',
                message: '每天都要也别开心的',
                senderPic: '22.jpg'
            },
            {
                sender: '妮妮',
                sendTime: '6-10-2',
                message: '每天都要加倍开心的',
                senderPic: '11.jpg'
            }
        ]

        this.setState({
            list: list
        })
    }
}
export default AddMessageList;