import {Component} from "react";
import style from './index.module.css'
import ArticleItem from "./articleItem";
import axios from "../../apis/request";
import {withRouter} from 'react-router-dom';

class Article extends Component {
  constructor() {
    super()
    this.state = {
      list: [{
        title: '关于币圈三大交易所的对比：火币、币安、OKEX',
        content: '最近币圈又火热起来了。 不少小伙伴私信我，问我是否还在挖矿，希望也可以参与进来。 作为一个在矿圈混了七八年的老矿工，今天就来和大家分享下如何组装一台显卡矿机。 '
      }]
    }
  }

  async componentDidMount() {
    const res = await axios.get('/article/getList')
    this.setState({
      list: res
    })
  }

  onClick(uid) {
    this.props.history.push(`/detail/${uid}`)
  }

  render() {
    return (
      <div className={style.article}>
        {
          this.state.list.map(item => {
            return (
              <ArticleItem
                onClick={() => this.onClick(item.uid)}
                key={item.uid}
                listItem={item}
              />
            )
          })
        }
      </div>
    )
  }
}

export default withRouter(Article)