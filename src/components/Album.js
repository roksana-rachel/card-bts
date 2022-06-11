import React from "react";
import './bts.css';
import cover from './assets/proof.jpg';

const Album = () => {
    return (
        <div class="card">
            <div class="container">
                <h1 class="card-title" align="right">Proof</h1>
                <div class="card-grid">

                    <div class="card-one">
                        <img src={cover} alt="cover" />
                    </div>

                    <div class="card-two">

                        <p><b>Proof </b>
                            to antologia grupy wydana 10 czerwca 2022 roku, która dobrze opisuje historię BTS.
                            Ten trzypłytowy album zawiera trzy zupełnie nowe utwory będące odzwierciedleniem myśli zespołu:
                            <i> Yet To Come (The Most Beautiful Moment)</i>, <i>Run BTS</i> i <i>For Youth</i>. 
                            Album zawiera łącznie 48 piosenek, od największych hitów i utworów wybranych przez każdego członka grupy 
                            do nieopublikowanych wcześniej wersji demo.
                        </p>

                        <div class="button-div">
                            <a target="_blank" href={"https://ingrv.es/Proof_Physical"}>
                                <button class="button-album">KUP ALBUM</button>
                            </a>
                        </div>
                        <div class="button-div">
                            <a target="_blank" href={"https://open.spotify.com/album/6al2VdKbb6FIz9d7lU7WRB?si=1G-oGlqsRhq52Fls21jIvg"}>
                                <button class="button-album">SŁUCHAJ NA SPOTIFY</button>
                            </a>
                        </div>
                        <div class="button-div">
                            <a target="_blank" href={"https://music.apple.com/us/album/proof/1627573936"}>
                                <button class="button-album">SŁUCHAJ NA APPLE MUSIC</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Album;