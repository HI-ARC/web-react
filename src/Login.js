import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {

    return (
        <div>
            <Navbar />
            <h1>로그인</h1>
            <input
                type="text"
                name="id"
                placeholder="아이디"
                />
            <input
                type="password"
                name="pw"
                placeholder="비밀번호"
                />
            <button type={"submit"}>로그인</button>
            <Footer />
        </div>
    )
}

export default Login;