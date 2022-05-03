import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons'
import { useState } from "react";

export default function Search(props) {
    let [ keyword, setKeyword ] = useState('')
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <span >
        <SearchOutlined className='search-icon'/>
        <Input
            className='search-input'
            placeholder='搜索'
            value={keyword}
            onChange={handleChange}
            style={{ width: 200 }}
        ></Input>
    </span>
    )
}