import React from 'react'
import './VideoCard.css'

const VideoCard = ({ image, title, channel, views, timestamp, channelImage }) => {
  return (
    <div className='videoCard'>
      <img className="videocard__thumbnail" src={image} alt="video_thumb" />
      <div className='videoCard__info'>
        <img className="videoCard__avatar" src={channelImage} alt="channelImage" />
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p className='channel'>{channel}</p>
          <p className='views'>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard