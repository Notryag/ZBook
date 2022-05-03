import { Alert, Button, Divider, Tag } from "antd"
import './index.less'
import { useSelector } from "react-redux";
import useFetchList from "@/hooks/useFetchList";
import { Link } from "react-router-dom";
import { ANNOUNCEMENT, SIDEBAR } from '@/config'
import Href from "@/components/Href";

export default function Siderbar() {
    const tagList = useSelector(state => state.article.tagList || [])
    const { dataList: articleList = [] } = useFetchList({
        withLoading: false,
        url: '/article/list',
        params: {
            order: 'viewCount DESC',
            page: 1,
            pageSize: 6
        }
    })
    return (
        <aside className="siber-bar">
            <div className="sibar-content">
                <div className="user">
                    <div className="ava">
                        <span>
                           <img src={SIDEBAR.avatar.default} className='sider-avatar' alt='avatar'/>
                            <h2 className="name">{SIDEBAR.title}</h2>
                        </span>
                    </div>
                    <div className="sibar-middle">
                        <div className="sub-title">学而不知足</div>
                        <div className="home-page">
                            {Object.entries(SIDEBAR.homepages).map(([linkName, item]) => (
                                <li key={linkName}>
                                    {item.icon}
                                    <Href href={item.link}>{linkName}</Href>
                                </li>
                            ))}
                        </div>
                        {ANNOUNCEMENT.enable && <Alert message={ANNOUNCEMENT.content} type='info' />}

                        <div className="sibar-foot">
                            <div className="hot-article">
                                <Divider orientation="left" plain>
                                    热门文章
                                </Divider>
                                {
                                    articleList.map(d => (
                                        <li key={d.id}>
                                            <Link to={`/article/${d.id}`}>{d.title}</Link>
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="article-tags">
                            <Divider orientation="left" plain>
                                标签
                            </Divider>
                            {
                                tagList.map(tag => (
                                    <Tag key={tag.name}>{tag.name}</Tag>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}