import { useState } from "react";


export default function useAjaxLoading() {
    let [loading, setLoading] = useState(false)
    function withLoading(request) {
        if (request instanceof Promise) {
            return new Promise((resolve, reject) => {
                setLoading(true)
                request.then(res => {
                    resolve(res)
                }).catch(e => {
                    reject(e)
                }).finally(() => {
                    setLoading(false)
                })
            })
        }
    }
    return [loading, withLoading]
}