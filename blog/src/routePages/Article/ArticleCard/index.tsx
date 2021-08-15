import { Button, Tooltip } from 'antd'
import React from 'react'
import './index.less';
import { ReadOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { IMyCardProps } from '../../../types/components/myCard';
import { renderTime } from '../../../utils/dateUtil';


export default function ArticleCard(props: IMyCardProps) {
  
  return (
    <div className='articleCard-container' style={props.style} onClick={() => { props.goToArticleDetail(props.id)  }}>
      <h4>
        <span>{props.title}</span>
      </h4>
      {/* <div className="img-container">
        <img src={props.imgUrl} alt="图片" />
      </div> */}
      <div className="hidden-content"  >
        <div className="date">
          {props.createdAt && props.createdAt.length > 0 ? renderTime(props.createdAt as string) : ''}
        </div>
        <div className="operator" >
          <Tooltip title="阅读量">
            <ReadOutlined /><address className='anticon-read'>{props.pv}</address>
          </Tooltip>
          <Tooltip title="点赞量">
            <LikeOutlined /><address className='anticon-like'>{props.likeCount}</address>
          </Tooltip>
          <Tooltip title="评论">
            <MessageOutlined /><address className='anticon-message'>{props.comments}</address>
          </Tooltip>
        </div>

      </div>
    </div>
  )
}
