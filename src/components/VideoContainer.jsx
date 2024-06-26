import React, { useEffect, useState } from 'react'
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from '../constant/youtube';
import VideoCart from './VideoCart';


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res?.data?.items);
      setVideos(res?.data?.items)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        videos.map((item) => {
          return (
            <VideoCart key={item.id} item = {item} />
          )
        })
      }

    </div>
  )
};

export default VideoContainer;
