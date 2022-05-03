import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Divider, Spin, Tag } from "antd";
import { ScheduleOutlined, MessageOutlined, EyeOutlined, TagsOutlined, FolderOutlined } from '@ant-design/icons'

import { getArticleById } from "@/apis/article";
import { calcCommentsCount } from "@/utils";
import Disduss from "@/components/Discuss";
import Tags from '@/components/Tags'
import useAjaxLoading from "@/hooks/useAjaxLoading";
import './index.less'
import ArticleTag from "@/components/ArticleTag";


function Comments(props) {
    let { comments } = props
    return (
        <span>
            {calcCommentsCount(comments)}
        </span>
    )
}


export default function Article(props) {
    let [ loading, withLoading ] = useAjaxLoading()
    let [ article, setArticle ] = useState({
        title: '', content: '', tags: [], categories: [], comments: [], createdAt: '', viewCount: 0
    })
    let params = useParams()
    const tagColorMap = useSelector(state => state.article.tagMap)
    console.log(tagColorMap)

    let { id } = params
    const articleId = parseInt(id)

    function addCommentID(comments) {
        return comments?.map(x => {
                x.commentId = x.id
                return x
            }
        )
    }

    useEffect(async () => {
        let rs = await withLoading(getArticleById(id))
        rs.comments = addCommentID(rs.comments)
        setArticle(rs)
    }, [ id ])

    function setCommentList(list) {
        list = addCommentID(list)
        setArticle({
            ...article,
            comments: list
        })
    }


    const { title, content, tags, categories, comments, createdAt, viewCount } = article

    return (
        <Spin tip='loading' spinning={loading}>
            <div className="article-title" id='article-id'>
                <h1 className="article-head">{title}</h1>
                <div className="article-static">
                    <span className="date">
                        <ScheduleOutlined/>
                        <span>Posted on {createdAt}</span>
                    </span>
                    <Divider type='vertical'/>

                    <ArticleTag
                        viewCount={viewCount}
                        comments={comments}
                        tagList={tags}
                        categoryList={categories}/>
                </div>
            </div>
            <Divider/>
            <div className='article-detail' dangerouslySetInnerHTML={{ __html: content }}/>
            <div id="discuss">
                <Disduss articleId={articleId} commentList={comments} setCommentList={setCommentList}/>
            </div>

        </Spin>
    )
}