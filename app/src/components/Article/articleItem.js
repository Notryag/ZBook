import {Component} from "react";
import style from "./index.module.css";

export default class ArticleItem extends Component {
    constructor(props) {
        super(props)
    }
    onclick() {
        console.log(this.props)
        console.log(123)
    }
    render() {
        const {listItem} = this.props
        return(
            <div onClick={() => this.onclick()}>
                <div className={style.sItem}>
                    <div className={style.title}>
                        {listItem.title}
                    </div>
                    <div className={style.content}>
                        <div className={style

                            ['content-inner']}>
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