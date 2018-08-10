import React from 'react';
import './item.less'
class Item extends React.Component {
    constructor(){
        super()
        this.state={}
        this.getValue=this.getValue.bind(this)
    }
    getValue(){
        let newKeyWord= this.refs.itemValue.innerHTML
        this.props.changeKeyWord(newKeyWord)
        this.props.toSearch()
    }
    render() {
        return (
        <span className='history-item' onClick={this.getValue} ref='itemValue'>
            {this.props.item}
        </span>
        );
    }
}

export default Item;