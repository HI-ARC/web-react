import React, {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "./img/logo.png";
import "./Home.css"

const Home = () => {

    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);

    return (
        <div className="Home">
            <Navbar />
            <main className="Home-content">
                <div className="Home-logo">
                    <img className="Logo" alt="하이아크 로고" src={logo}/>
                </div>
                <section className="Home-slogan">
                    <h1>Solve with us</h1>
                </section>
                <section className="Home-text">
                    <h3>홍익대학교 컴퓨터공학과 학회 HI-ARC입니다.</h3>
                </section>
                <section className="Home-link">
                    <a href="https://icpc-sinchon.io/">ICPC Shichon</a>
                    <a href="#">바로가기 링크</a>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;