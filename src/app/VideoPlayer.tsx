import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video && video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl;
    }

  }, [videoUrl]);

  return (
    <video ref={videoRef} controls />
  );
};

export default VideoPlayer;
