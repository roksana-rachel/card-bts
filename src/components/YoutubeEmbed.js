import React from "react";
import './bts.css';

const YoutubeEmbed = () => {
    return (
        <div className="div-yt">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kXpOEzNZ8hQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    );
}

export default YoutubeEmbed;