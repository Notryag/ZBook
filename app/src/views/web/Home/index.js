import { Layout, Row, Col, Spin } from 'antd'
import useFetchList from "@/hooks/useFetchList";
import { useMemo } from "react";
import { ArticleList } from "@/views/web/Home/List";
import './index.less'
const {Header} = Layout

export default function Home() {

    const {loading, pagination, dataList } = useFetchList({
        url: '/article/list',
        params: {pageSize: 10}

    })
    const list = useMemo(() => {
        return dataList.map(item => item)
    })

    return (
        <div>
            <Spin tip='loading' spinning={loading}>
                <ArticleList list={list}/>
            </Spin>
        </div>
    )
}