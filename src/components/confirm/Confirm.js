import React from 'react';
import './confirm.less'
class Confirm extends React.Component {
    constructor(){
        super()
        this.clickNo=this.clickNo.bind(this)
        this.clickYes=this.clickYes.bind(this)
    }
    clickNo(){
        this.props.noConfirm()
    }
    clickYes(){
        this.props.confirm()
    }
    render() {
        return (
            <div className="confirm-box">
                <div className="mask"></div>
                <div className="confirm">
                    <div className="confirm-text">{this.props.text}</div>
                    <div className="confirm-act">
                        <span className="confirm-no" onClick={this.clickNo}>{this.props.no}</span>
                        <span className="confirm-yes" onClick={this.clickYes}>{this.props.yes}</span>
                    </div>
                </div>
            </div>
        );
    }
}
Confirm.defaultProps={
    no: '取消',
    yes: '确定',
    text: '确定这一操作吗？'
}
export default Confirm;