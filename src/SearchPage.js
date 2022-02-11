import React, {useState, useEffect } from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import Collapsible from 'react-collapsible';
import { fetchResults } from './services/searchResult'; 
import millify from 'millify';
import { useStateValue } from "./StateProvider";

const period = [
    "Last hour",
    "Today",
    'This week',
    "This month",
    "This year"
]

const type = [
    'Video',
    'Channel',
    'Playlist',
    'Movie',
]

const duration = [
   "Under 4 minutes",
    "4 - 20 minutes",
   "Over 20 minutes",
]

const features = [
    'Live',
    '4K',
    'HD',
    'Subtitles/CC',
    'Creative Commons',
    '360°',
    'VR180',
    '3D',
    'HDR',
    'Location',
    'Purchased',
]

const sortBy = [
    'Relevance',
    'Upload date',
    'View count',
    'Rating',
]

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [{ query }, dispatch] = useStateValue();
    
  useEffect(() => {

     const fetchResponse = async() => {
          const response = await fetchResults( query );
          setSearchResult(response.items)
      }
      fetchResponse();

  }, [query]);
  

    return (
        <div className="searchPage">
            <Collapsible trigger={
                < div className='searchPage__filter' >
                    <TuneIcon />
                    <h2>FILTERS</h2>
                </div>
            }>
                <div className='searchPage__filter-Parentcontainer'>
                    <div className='searchPage__filter-container'>
                        <h5>UPLOAD DATE</h5>
                        <hr />
                        {period.map((period) => (
                            <p key={period}>{period}</p>
                        ))}
                    </div>
                    <div className='searchPage__filter-container'>
                        <h5>TYPE</h5>
                        <hr />
                        {type.map((period) => (
                            <p key={period}>{period}</p>
                        ))}
                    </div>
                    <div className='searchPage__filter-container'>
                        <h5>DURATION</h5>
                        <hr />
                        {duration.map((period) => (
                            <p key={period}>{period}</p>
                        ))}
                    </div>
                    <div className='searchPage__filter-container'>
                        <h5>FEATURES</h5>
                        <hr />
                        {features.map((period) => (
                            <p key={period}>{period}</p>
                        ))}
                    </div>
                    <div className='searchPage__filter-container'>
                        <h5>SORT BY</h5>
                        <hr />
                        {sortBy.map((period) => (
                            <p key={period}>{period}</p>
                        ))}
                    </div>
                </div>
            </Collapsible>
            <hr />

            <ChannelRow
                image="https://i.ytimg.com/vi/5mFTXbZzOAE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCouEJf3XA_vlLJsd0-CthdMOvqEw"
                channel="Exclusive Ideas"
                verified
                subs="69k"
                noOfVideos={382}
                description="You can fnd awesome programming lessons! Also expect programming tips and tricks that will take your coding skils to the..."
            />
            <hr />

            {searchResult && searchResult.map((result) => (
            <VideoRow
                key={result.id}
                views={result.views ? millify(result.views) : 0}
                duration={result.duration}
                timestamp={result.uploadedAt}
                channel={result.author.name}
                channelImage={result.author.bestAvatar.url}
                verified={result.author.verified}
                title={result.title}
                image={result.thumbnails[0].url}
                newVid={result.badges}
                link={result.url}
                />
            ))}
        </div>
    )
}

export default SearchPage