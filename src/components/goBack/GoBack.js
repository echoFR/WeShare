import React from 'react';
import './goback.less'
class GoBack extends React.Component {
    constructor(){
        super()
        this.state={}
        this.goBack=this.goBack.bind(this)
    }
    goBack(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="goBack">
            <div onClick={this.goBack}>
                <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-back"></use></svg>
            </div>
            <span>{this.props.title}</span>
            </div>
        );
    }
}
GoBack.defaultProps={
    title: '标题',
}
export default GoBack;