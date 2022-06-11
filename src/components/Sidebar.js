import React, { useState, useEffect } from "react";
import './bts.css';

const SideBar = props => {

    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

    const [error, setError] = useState('');
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [randomQ, setRandomQ] = useState(0);

    useEffect(() => {
        const questionsNumber = musicQuiz.length;
        setRandomQ(Math.floor(Math.random() * (questionsNumber - 0)));
    }, []);

    const musicQuiz = [
        {
            question: 'W którym roku zadebiutowało BTS?',
            correctAnswer: '2013',
            wrongAnswer1: '2011',
            wrongAnswer2: '2010'
        },
        {
            question: 'Kto jest liderem BTS?',
            correctAnswer: 'RM',
            wrongAnswer1: 'j-hope',
            wrongAnswer2: 'Jin'
        },
        {
            question: 'Kto jest najmłodszym członkiem BTS?',
            correctAnswer: 'Jungkook',
            wrongAnswer1: 'Suga',
            wrongAnswer2: 'Jimin'
        },
    ];

    const isValidEmail = email =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

    const handleSubmit = (event) => {
        event.preventDefault();
        const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
        let questionsNumber = musicQuiz.length;
        console.log(userAnswer);
        console.log()

        if (fname === '' || lname === '' || email === '' || phone === '' || message === '') {
            setError("Pola nie mogą być puste!")
        }
        else if (!isValidEmail(email)) {
            setError("Niepoprawny email!")
        }
        else if (phone.length !== 9 || /^\d+$/.test(phone) == false) {
            setError("Niepoprawny numer telefonu!")
        }
        else if (userAnswer !== musicQuiz[randomQ].correctAnswer) {
            setError("Zła odpowiedź na pytanie!");
            setRandomQ(Math.floor(Math.random() * (questionsNumber - 0)));
        }
        else {
            setError("")
            setFName("")
            setLName("")
            setPhone("")
            setEmail("")
            setMessage("")
            setRandomQ(Math.floor(Math.random() * (questionsNumber - 0)));
            props.sendSidebar('sidebar');
            alert("Poprawnie wysłano wiadomość! Skontaktujemy się z Tobą");
        }
    }

    return (
        <div className={sidebarClass}>
            <button onClick={props.closeSidebar} class="close-side">
                X
            </button>
            <div>
                <form noValidate onSubmit={handleSubmit}>
                    <div class="div-form">

                        {error && <p class="error"><b>{error}</b></p>}

                        <label for="fname">Imię</label>
                        <input value={fname}
                            onChange={(e) => setFName(e.target.value)} type="text" class="input-form" id="fname" name="firstname" placeholder="Imię" required />

                        <label for="lname">Nazwisko</label>
                        <input value={lname}
                            onChange={(e) => setLName(e.target.value)} type="text" class="input-form" id="lname" name="lastname" placeholder="Nazwisko" required />

                        <label for="email">E-mail</label>
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email" class="input-form" id="email" name="email" placeholder="E-mail" required />

                        <label for="phone">Nr telefonu</label>
                        <input value={phone}
                            onChange={(e) => setPhone(e.target.value)} type="tel" class="input-form" id="phone" name="phone" placeholder="" required />

                        <label for="message">Twoja wiadomość</label>
                        <input value={message}
                            onChange={(e) => setMessage(e.target.value)} type="text" class="input-form" id="mssg" name="mssg" placeholder="Twoja wiadomość..." required />

                        <label for="lname">{musicQuiz[randomQ].question}</label><br />
                        <input type="radio" id="a1" name="quiz" value={musicQuiz[randomQ].wrongAnswer1} />
                        <label for="a1">{musicQuiz[randomQ].wrongAnswer1}</label><br />
                        <input type="radio" id="a2" name="quiz" value={musicQuiz[randomQ].correctAnswer} />
                        <label for="a2">{musicQuiz[randomQ].correctAnswer}</label><br />
                        <input type="radio" id="a3" name="quiz" value={musicQuiz[randomQ].wrongAnswer2} />
                        <label for="a3">{musicQuiz[randomQ].wrongAnswer2}</label>

                        <div class="button-div">
                            <button type="submit" class="button-album">Wyślij</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SideBar;
