const Video = () => {
    return ( 
        <div className="flex justify-center relative items-center pt-10">
            <video width="360" height="240" playsInline autoPlay muted loop className="blur-lg opacity-80">      
                <source src="./video/ampm-video.mp4" type="video/mp4" />      
            </video>  
            <video width="320" height="240" playsInline autoPlay muted loop className="absolute">         
                <source src="./video/ampm-video.mp4" type="video/mp4" />      
            </video>  
        </div>
     );
}
 
export default Video;