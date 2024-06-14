import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import API_KEY from '../constant/youtube';


const VideoCart = ({item}) => {
  const [channelIcon, setChannelIcon] = useState("")

  const channelName = async() =>{
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
      console.log(res);
      setChannelIcon(res.data.items[0].snippet.thumbnails.default.url);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    channelName();
  }, []);

  return (
    <div className='cursor-pointer'>
      <img className='rounded-xl w-full' src={item.snippet.thumbnails.medium.url} alt='thumbnail' />
      <div>
        <div className='flex mt-2 mb-4'>
          <Avatar src={channelIcon} size={36} round={true}/>
          <div className='ml-2'>
            <h1 className='line-clamp-2 font-bold'>{item.snippet.title}</h1>
            <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
            <p className='text-sm text-gray-500'>{item.statistics.viewCount} views</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCart
