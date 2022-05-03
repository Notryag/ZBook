import { Divider, Tag } from "antd";
import { ScheduleOutlined, MessageOutlined, EyeOutlined, TagsOutlined, FolderOutlined } from '@ant-design/icons'
import { useSelector } from "react-redux";

import Tags from "@/components/Tags";
import { calcCommentsCount } from "@/utils";
import './index.less'

export default function ArticleTag(props) {
    const tagColorMap = useSelector(state => state.article.tagMap)
    const { tagList, categoryList, viewCount, comments } = props

    return (
        <div className='list-item-others'>
            <span className="others-left">
                <MessageOutlined/>

                <span>{calcCommentsCount(comments)}</span>

                <EyeOutlined/>

                <span>{viewCount}</span>
            </span>
            <Divider type='vertical' style={{ marginRight: 7 }}/>
            <span>
                <Tags icon={<TagsOutlined/>} tags={tagList} colorMap={tagColorMap}/>
                </span>
            <Divider type='vertical' style={{ marginRight: 7 }}/>
            <span>
                <Tags icon={<FolderOutlined/>} tags={categoryList} color='#2db7f5'/>
            </span>
        </div>
    )
}