const VideoSection = async () => {
    return ( 
        <div className="flex justify-center items-center">
            <video  playsInline autoPlay muted loop className="">      
                <source src="./video/ampm-video_1440p.mp4" type="video/mp4" />    
            </video>  
        </div>
    );
}
 
export default VideoSection;