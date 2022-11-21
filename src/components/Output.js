import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import styled from "styled-components"

export default function Output({token}){
    const navigate = useNavigate();
    const [valor, setValor] = useState("");
    const [description, setDescription] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);

    function addOutput(e){
        setDesabilitar(true)        
        e.preventDefault()
        const requisicao = axios.post("http://localhost:5000/saida", { description: description, value: valor.replace(/[,]/g, ".") }, { headers: { "Authorization": `Bearer ${token}` }, })
        requisicao.then((a) => { navigate("/my-records"); })
        requisicao.catch(() => { alert("Email ou senha inválidos"); setDesabilitar(false) })
    }   

    return(
        <>
        <ContainerInput>
        <form onSubmit={addOutput}>
                <Title>Nova Saída</Title>                
                <Value type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} required disabled={desabilitar}></Value>
                <Description type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required disabled={desabilitar}></Description>
                <SalvarSaida type="submit">Salvar saída</SalvarSaida>
            </form>                   
            </ContainerInput>
        </>
    )
}
const ContainerInput = styled.div`
width: 100%;
min-height: 100vh;
background-color: #8c11be;
padding: 2.5em 1.5em 1em 1.5em;
`
const Title = styled.h1`
width: 100%;
height: 3em;
font-size: 2em;
font-weight: 700;
color: #ffffff;
font-family: 'Raleway', sans-serif;
`
const Value = styled.input`
width: 100%;
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
const Description = styled(Value)`
`
const SalvarSaida = styled.button`
width: 100%;
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
