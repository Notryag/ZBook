import {Component} from "react";
import { SearchBar } from 'zarm';
export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <SearchBar
                onSubmit={(value) => {
                    console.log(`搜索内容为${value}`);
                }}
                onFocus={() => {
                    console.log('获取焦点');
                }}
                onChange={(value) => {
                    console.log(value);
                }}
                onBlur={() => {
                    console.log('失去焦点');
                }}
                onClear={() => {
                    console.log('点击了清除');
                }}
                onCancel={() => {
                    console.log('点击了取消');
                }}
            />
        )
    }
}