import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
import { useState } from "react";

export default function SignIn(props) {
    const { setToken } = props;
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [desabilitar, setDesabilitar] = useState(false)

    function login(e) {
        setDesabilitar(true)
        
        console.log(email)
        e.preventDefault()
        const requisicao = axios.post("http://localhost:5000/sign-in", { email: email, password: senha })
        requisicao.then((a) => { navigate("/my-records"); console.log(a); setToken(a.data.token); })
        requisicao.catch(() => { alert("Email ou senha inválidos"); setDesabilitar(false) })
        
    }
    return (
        <>
            <ContainerLogin>
                <Title>MyWallet</Title>
                <form onSubmit={login}>
                    <Email type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required disabled={desabilitar}></Email>
                    <Senha type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required disabled={desabilitar}></Senha>
                    <Entrar type="submit" disabled={desabilitar}>Entrar</Entrar>
                </form>
                <Link to={"/sign-up"}>
                    <Cadastro>Primeira vez? Cadastre-se!</Cadastro>
                </Link>
            </ContainerLogin>

        </>
    )
}
const ContainerLogin = styled.div`
width: 100%;
min-height: 100vh;
background-color: #8c11be;
text-align: center;
padding-top: 10em;
`
const Title = styled.h1`
width: 100%;
height: 3em;
font-size: 2em;
font-weight: 400;
color: #ffffff;
font-family: 'Saira Stencil One', cursive;
`
const Email = styled.input`
width: 85%;
height: 3.7em;
background-color: #fff;
font-family: 'Raleway', sans-serif;
font-size: 1.3em;
font-weight: 400;
border: transparent;
border-radius: .31em;
padding-left: 1em;
color: #000;
margin-bottom: .8em;
`
const Senha = styled(Email)`
`
const Entrar = styled.button`
width: 85%;
height: 2.8em;
background-color: #a328d6;
font-family: 'Raleway', sans-serif;
font-size: 1.3em;
font-weight: 700;
border: transparent;
border-radius: .31em;
padding-left: 1em;
color: #fff;
margin-bottom: 2.3em;
cursor: pointer;
`
const Cadastro = styled.p`
width: 50%;
height: 1.2em;
color: #fff;
font-family: 'Raleway', sans-serif;
text-align: center;
margin: 0 auto;
font-weight: 700;
font-size: .8em;
cursor: pointer;
`