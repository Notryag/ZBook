import {useCallback, useEffect, useState} from "react";
import axios from "@/apis/request"
import useMount from "@/hooks/useMount";

export default function useFetchList({
    url = '',
    params = null,
    withLoading = true,
    fetchDependence=[]
}) {
    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({current: 1, pageSize: 10, total: 0})

    useMount(() => {
        console.log('mount')
        if (fetchDependence.length === 0) {
            fetchWithLoading()
        }
    })

    // useEffect(() => {
    //     if (fetchDependence.length > 0) {
    //         fetchWithLoading()
    //     }
    // }, fetchDependence)

    function fetchWithLoading() {
        withLoading && setLoading(true)
        fetchDataList()
    }

    function fetchDataList() {
        const requestParams = {
            page: pagination.current,
            pageSize: pagination.pageSize,
            ...params
        }
        axios.get(url, {params: requestParams})
            .then(res => {
                pagination.total = res.count
                pagination.current = +res.page
                pagination.pageSize = +res.pageSize
                setPagination({...pagination})
                setDataList(res.rows)
                withLoading && setLoading(false)
            })
            .catch(e => withLoading && setLoading(false))
    }


    const onFetch = useCallback(
        params => {
            withLoading && setLoading(true)
            fetchDataList(params)
        },
        [params]
    )

    const handlePageChange = useCallback(
        page => {
            console.log('handlePageChange')
        }, []
    )
    return {
        dataList,
        loading,
        pagination: {
            ...pagination,
            onchange, handlePageChange
        },
        onFetch
    }

}