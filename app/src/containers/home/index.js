import {Component} from "react";
import style from './index.module.css'
import Container from "./container";
import Header from "../../components/header";
import {Icon} from 'zarm';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  onClick() {
    this.props.history.push('add')
  }

  render() {
    return (
      <div className={style.main}>
        <Header></Header>
        <Container></Container>
        <div className={style.addicon} onClick={() => this.onClick()}>
          <Icon style={{fontSize: '46px'}} type='add-round' size='lg' theme="primary"/>
        </div>
      </div>
    )

  }
}