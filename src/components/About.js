import React from "react";
import './bts.css';
import Slideshow from "./Slideshow";

const About = () => {

    return (
        <div class="card">
            <div class="container">
                <h1 class="card-title">O BTS</h1>
                <div class="card-text">

                    <p><b>BTS (Bangtan Sonyeondan, 방탄소년단, także jako Beyond the Scene) </b>
                        to bijący rekordy siedmioosoobwy zespół z Korei Południowej, w którego skład wchodzą Jin, Suga, j-hope, RM, Jimin, V i Jungkook.
                        Razem tworzą muzykę obejmującą szeroką gamę gatunków z naciskiem na pop, hip-hop i EDM. Ich teksty, często będące osobistym lub społecznym komentarzem,
                        poruszają tematykę zdrowia społecznego, kłopotów młodzieży, dorastania, indwyidualizmu czy kochania samego siebie.
                        Czerpią inspirację z mitologii, powieści czy teorii Carla Junga.
                        Ich oddany fandom, ARMY, skupia osoby z różnych narodowości i grup wiekowych.
                    </p>
                    <Slideshow></Slideshow>
                    <p>Zadebiutowali w 2013 roku z minialbumem <i>2 Cool 4 Skool</i>, ale prawdziwą globalną sławę przyniosła im trylogia <i>Love Yourself</i> w 2017 roku.</p>
                    <p>BTS są najlepiej sprzedającym się artystą w historii Korei Południowej, 5 razy znaleźli się na szczycie zestawienia najlepiej sprzedających się albumów w USA Billboard 200,
                        mają 6 piosenek, które zajęły pierwsze miejsce na amerykańskiej liście przebojów Billboard Hot 100 oraz otrzymali dwie nominacje Grammy.
                        Trzy razy przemawiali na Zgromadzeniu Ogólnym ONZ, współpracowali z UNICEF i
                        zostali najmłodszymi laureatami Orderu Zasługi Kulturalnej od Prezydenta Korei Południowej ze względu na ich wkład w szerzenie kultury i języka koreańskiego.
                    </p>
                    <p>Jednak pomimo wszystkich tych sukcesów, BTS nie stracili swojej szczerości ani otwartości. Mówią jasno - najbardziej liczą się dla nich muzyka i fani.</p>

                </div>
            </div>
        </div>
    );
}

export default About;