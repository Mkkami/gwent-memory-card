import "./styles/AnimatedBackground.css"

function AnimatedBackground() {
    const video = "/img/background.mp4"

    return (
        <div className="video-background">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="video-bg">
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}
export default AnimatedBackground;