import { Tag } from "antd";
import './index.less'
export default function Tags(props) {
    let { tags, colorMap, color, icon } = props
    return (
        <span className='tag-wrap'>
            {icon}
            {tags?.map(tag => (
                <Tag
                    color={colorMap
                        ? colorMap[tag.name]
                        : color
                            ? color : ''
                    }
                    key={tag.name}> {tag.name}</Tag>))}
        </span>

    )
}