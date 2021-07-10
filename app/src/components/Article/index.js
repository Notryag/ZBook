import {Component} from "react";
import style from './index.module.css'
import ArticleItem from "./articleItem";

export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            list: [{
                title: '关于币圈三大交易所的对比：火币、币安、OKEX',
                content: '最近币圈又火热起来了。 不少小伙伴私信我，问我是否还在挖矿，希望也可以参与进来。 作为一个在矿圈混了七八年的老矿工，今天就来和大家分享下如何组装一台显卡矿机。 '
            }]
        }
    }

    componentDidMount() {
        let newList = this.state.list
        for (let i = 0; i < 20; i++) {
            newList.push(newList[0])
        }
        this.setState({
            list: newList
        })
    }

    render() {
        return (
            <div className={style.article}>
                {
                    this.state.list.map(item => {
                        return (
                            <ArticleItem
                                listItem={item}
                            />
                        )
                    })
                }
            </div>
        )
    }
}