import { Divider, Tag } from "antd";
import { useNavigate } from 'react-router-dom'
import Tags from '@/components/Tags'
import { useSelector } from "react-redux";
import { MessageOutlined, EyeOutlined, TagsOutlined, FolderOutlined } from '@ant-design/icons'
import ArticleTag from "@/components/ArticleTag";

export const ArticleList = props => {
    const { list } = props
    const navigate = useNavigate()


    function jumpTo(id) {
        navigate(`/article/${id}`)
    }

    return (
        <ul className="app-home-list">
            {
                list.map(item => (
                    <li key={item.id} className='article-item' onClick={() => jumpTo(item.id)}>
                        <Divider orientation={"left"}>
                            <span className="title">{item.title}</span>
                            <span className="date">{item.createdAt?.slice(0, -8)}</span>
                        </Divider>
                        <div className="article-detail"
                             dangerouslySetInnerHTML={{ __html: item.content }}
                        >
                        </div>
                        <div className='article-bottom'>
                            <ArticleTag
                                viewCount={item.viewCount}
                                comments={item.comments}
                                tagList={item.tags}
                                categoryList={item.categories}/>
                        </div>

                    </li>
                ))
            }
        </ul>
    )
}