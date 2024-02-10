const Video = () => {
    return ( 
        <div className="flex justify-center bg-black/10">
            <video width="320" height="240" autoPlay muted loop>         
                <source src="./video/ampm-video.mp4" type="video/mp4" />      
            </video>  
        </div>
     );
}
 
export default Video;