const VideoSection = async () => {
    return ( 
        <div className="flex justify-center items-center">
            <video 
                playsInline 
                autoPlay 
                muted 
                loop 
                controls
                poster="./images/Thumbnail_AMPM.jpg"
            >      
                <source src="./video/ampm-video-original.mp4" type="video/mp4" />    
            </video>  
        </div>
    );
}
 
export default VideoSection;