import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import axios from "axios";
export default function SignUp(){
    
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [nome, setNome] = useState("");
    const navigate = useNavigate();
    const [desabilitar, setDesabilitar] = useState(false);

    function signIn(e) {
        if(senha !== confirmaSenha){
            alert("As senhas devem ser iguais!")
            return;
        }
        setDesabilitar(true)
        
        e.preventDefault()
        const requisicao = axios.post("http://localhost:5000/sign-up", { email: email, name: nome, password: senha })
        requisicao.then(() => { alert("Cadastro realizado com sucesso!"); setDesabilitar(false); navigate("/") })
        requisicao.catch(() => { alert("Erro! Email inválido!"); setDesabilitar(false) })

    }

    return(
        <>            
        <ContainerLogin>
            <Title>MyWallet</Title>
            <form onSubmit={signIn}>
            <Nome type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required disabled={desabilitar}></Nome>
            <Email type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required disabled={desabilitar}></Email>
            <Senha type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required disabled={desabilitar}></Senha>
            <ConfirmarSenha type="password" placeholder="Confirme a senha" value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} required ></ConfirmarSenha>
            <Cadastrar type="submit" disabled={desabilitar}>Cadastrar</Cadastrar>
            </form>
            <Link to={"/"}>
            <Cadastro>Já tem uma conta? Entre agora!</Cadastro>
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
padding: 10em 0;

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
const ConfirmarSenha = styled(Senha)`
`
const Nome = styled(ConfirmarSenha)`
`
const Cadastrar = styled.button`
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
width: 35%;
height: 1.2em;
color: #fff;
font-family: 'Raleway', sans-serif;
text-align: center;
margin: 0 auto;
font-weight: 700;
font-size: .8em;
cursor: pointer;
`