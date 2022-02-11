import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelRow = ({
    image,
    channel,
    verified,
    subs,
    noOfVideos,
    description
}) => {
  return (
    <div className='channelRow'>
        <Avatar
        className="channelRow__logo"
        src={image}
        alt="channel"
        />
        <div className='channelRow__text'>
            <div className='channelRow__text-header'>
            <h5>{channel}</h5>
                {verified && <CheckCircleIcon  sx={{ fontSize: 20 }} className="verified" />}
            </div>
            <p>
                {subs} subscribers . {noOfVideos} videos
            </p>
            <p style={{marginTop: '-10px'}}>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow