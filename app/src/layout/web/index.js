import { useState } from 'react'
import { Outlet } from 'react-router-dom' // 子路由出口，类似vue的router-view
import { Input, Menu, Col, Row, Layout } from 'antd';

import PublicCompponent from '@/components/Public'
import SiberBar from './siderbar'
import Header from "@/layout/web/header"

import './layout.less'
export default function LayoutComponent(props) {

    return (
        <div className="app-container" >
            <PublicCompponent />
            <Header />


            <div className="content">
                <SiberBar />
                <div className="list">
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}