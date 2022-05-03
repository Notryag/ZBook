import '../App.less';
import { Suspense, lazy } from 'react'
import Home from '@/views/web/Home/index'
import ArticleAdd from '../containers/articleAdd'
import Detail from '../containers/detail'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Layout from '../layout/web';
import Article from '@/views/web/article/index'
import AdminLayout from "@/layout/admin";
import User from '@/views/admin/user'

import ArticleManger from '@/views/admin/article/manager'
import ArticleEdit from '@/views/admin/article/edit'

const GetRecRoutes = () => {
    return useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {
                    path: '',
                    element: <Home/>
                },
                {
                    path: 'article/:id',
                    element: <Article/>,
                },
                {
                    path: 'a',
                    element: <div>rec-aaa</div>
                }
            ]
        },
        {
            path: '*',
            element: <div>前台404</div>,
        }
    ])
}

const GetAdminRoutes = () => { // 获取后台路由
    const routes = useRoutes([
        {
            path: '',
            element: <AdminLayout />,
            children: [
                { path: 'article/edit/:id', element: <ArticleEdit/> },
                { path: 'article/add', element: <ArticleEdit/> },
                { path: 'article/manager', element: <ArticleManger/> },
                { path: 'user', element: <User /> }
            ]
        },
        {
            path: '*',
            element: <div>后台404</div>,
        }
    ]);
    return routes;
}

const GetAllRoutes = () => {
    const routes = useRoutes([
        {
            path: '/*',
            element: <GetRecRoutes/>,
        },
        {
            path: '/admin/*',// 末尾的 /* 必不可少
            element: <GetAdminRoutes/>,
        },
        {
            path: '*', // 这个404页面不会被匹配到
            element: <div>404</div>,
        }
    ])
    return routes;
}

const SetRoutes = () => {
    return (
        <Router>
            <GetAllRoutes/>
        </Router>
    )
}
export default SetRoutes;
