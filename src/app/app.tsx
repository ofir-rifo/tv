
import { useEffect, useRef } from 'react';
import VideoPlayer from './VideoPlayer';
export function App() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef?.current?.play();
  }, []);

  return (
    <VideoPlayer videoUrl=''/>
  );
}

export default App;
