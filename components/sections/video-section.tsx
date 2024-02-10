const VideoSection = () => {
    return ( 
        <div className="flex justify-center align-middle overflow-hidden h-full items-center">
            {/* background */}
            <div className="relative  blur-lg w-fill">
                <video width="400" height="240" autoPlay muted loop>         
                    <source src="./video/ampm-video.mp4" type="video/mp4" />      
                </video>  
            </div>

            {/* forground */}
            <div className="absolute">
                <video width="320" height="240" autoPlay muted loop>         
                    <source src="./video/ampm-video.mp4" type="video/mp4" />      
                </video>  
            </div>
        </div>
     );
}
 
export default VideoSection;