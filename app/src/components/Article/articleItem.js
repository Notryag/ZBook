import {Component} from "react";
import style from "./index.module.css";
import {connect} from "react-redux";
import {action} from '../../reducer/countReducer'
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';

const {increaseAction} = action
class ArticleItem extends Component {
    constructor(props) {
        super(props)
    }

    onclick() {
        this.props.onClick()
        // redux 添加计数
        // this.props.onIncreaseClick()
    }
    render() {
        const {listItem} = this.props
        return (
            <div onClick={() => this.onclick()}>
                <div className={style.sItem}>
                    <div className={style.title}>
                        {listItem.title}
                    </div>
                    <div className={style.content}>
                        <div className={style['content-inner']}>
                            <span className={style.ztext}>
                            {listItem.content}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.count.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick:bindActionCreators(increaseAction,dispatch)
        // onIncreaseClick: () => dispatch(increaseAction())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ArticleItem))