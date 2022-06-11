import React from "react";
import './bts.css';
import YoutubeEmbed from "./YoutubeEmbed";

const Single = () => {
    return (
        <div class="card">
            <div class="container">
                <h1 class="card-title">Yet to Come</h1>
                <div class="card-text">

                    <p><b>Yet to Come (The Most Beautiful Moment) </b>
                        to singiel promujący najnowszy album grupy, <b>Proof</b>.
                        Członkowie zespołu wspominają ostatnie dziewięć lat ich kariery i spoglądają ku przyszłości.
                    </p>

                    <YoutubeEmbed></YoutubeEmbed>

                </div>
            </div>
        </div>
    );
}

export default Single;