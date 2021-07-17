import {Component} from "react";
import style from './index.module.css'
import axios from "../../apis/request";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      content:''
    }
  }
  async componentDidMount() {
    let { uid } = this.props.match.params
    let res =await axios.get(`/article/getById?uid=${uid}`)
    this.setState({
      ...res
    })
  }

  render() {
    return (
      <div>
        <div className={style.title}>
          <div>
            {this.state.title}
          </div>
        </div>
        <div className={style.content}>
          {
            this.state.content
          }

        </div>
      </div>
    )
  }
}

export default Detail