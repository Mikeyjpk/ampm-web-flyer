const VideoSection = () => {
    return ( 
        <div className="flex justify-center items-center relative">
            <video width="360" height="240" playsInline autoPlay muted loop className="blur-lg opacity-70">      
                <source src="./video/ampm-video.mp4" type="video/mp4" />      
            </video>  
            <video width="320" height="240" playsInline autoPlay muted loop className="absolute">         
                <source src="./video/ampm-video.mp4" type="video/mp4" />      
            </video>  
        </div>
    );
}
 
export default VideoSection;