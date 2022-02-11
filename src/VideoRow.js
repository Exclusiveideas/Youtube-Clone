import React, { useState } from 'react'
import './VideoRow.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const VideoRow = ({
  views,
  timestamp,
  channel,
  title,
  image,
  channelImage,
  verified,
  newVid,
  link
}) => {
  const [hover, setHover] = useState(false);
  
  return (
    <a href={link} target="_blank" className='videoRow__Link'>
      <div className='videoRow' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
      <img src={image} alt="thumbnail" />
      <div className='videoRow__text' >
        <h4>{title}</h4>
        <p>{views} views . {timestamp}</p>
        <div className='videoRow__text-row1'>
          <img src={channelImage} className="videoRow__channel_avatar" />
          <p className='videoRow__headLine'>
            {channel}
          </p>
          {verified && (<h4>
            <CheckCircleIcon sx={{ fontSize: 20 }} className="verified" />
          </h4>)}

        </div>
        <div className='video_spec'>
          {newVid && newVid.map((prop, i) => (
            <div key={i} className="videoRow__description">{prop}</div>
          ))}
        </div>
      </div>
      {hover && <MoreVertIcon className="videoRow__dots" />}
    </div>
    </a>
  )
}

export default VideoRow