import {Component} from "react";
import style from './index.module.css'
import Container from "./container";
import Header from "../../components/header";
export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style.main}>
                <Header></Header>
                <Container></Container>
            </div>
        )

    }
}