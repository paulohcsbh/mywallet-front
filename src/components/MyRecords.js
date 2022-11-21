import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Record from "./Record";
import Buttons from "./Buttons";

export default function MyRecords({ token }) {
    
    const [myData, setMyData] = useState();
    const [estado, setEstado] = useState();   

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/meus-dados", { headers: { "Authorization": `Bearer ${token}` }, })
        promise.then((resposta) => { setMyData(resposta.data); })
        promise.catch(erro => { console.log(erro.response.data) })
    }, [estado, token])
        
    if(myData === undefined){        
        return "Carregando..."
    }

    const entradas = myData.regs.filter(entrada => (entrada.type === "entrada"))
    const somar = (arr) => {  
        let soma = 0;      
        for(let i = 0; i < arr.length; i++){
            const item = arr[i].value
            soma += item
        }
        return soma;
    }
    somar(entradas);   
    
    const saidas = myData.regs.filter(saida => (saida.type === "saida")) 
    const subtrair = (arr) => {  
        let subtrai = 0;      
        for(let i = 0; i < arr.length; i++){
            const item = arr[i].value
            subtrai += item
        }
        return subtrai;
    }
    subtrair(saidas); 
    const resultado = somar(entradas) - subtrair(saidas)
    return (
        <>
            <ContainerRecords>
                <User>Olá, {myData.user.name.includes(" ") ? myData.user.name.slice(0, myData.user.name.indexOf(" ")) : myData.user.name} </User>
                {myData.regs.length === 0 ? <RecordsList>Não há registros de entrada ou saída</RecordsList> : <RecordsListWithElement>
                    {myData.regs.map((reg, index) => <Record key={index} reg={reg} setEstado={setEstado} ></Record>)} 
                    
                    </RecordsListWithElement>}
                    <ContainerSaldo>
                        <Saldo>Saldo</Saldo>
                        <ValorSaldo cor={resultado === 0 ? "#000": resultado > 0 ? "#03ac00":"#c70000"}>{resultado.toFixed(2).replace(/[.]/g,",")}</ValorSaldo>
                    </ContainerSaldo>
                    <Buttons/>
            </ContainerRecords>
        </>
    )
}
const ContainerRecords = styled.div`
width: 100%;
min-height: 100vh;
background-color: #8c11be;
padding: 2.5em 1.5em 1em 1.5em;
position: relative;
`
const User = styled.h1`
font-weight: 700;
font-size: 1.6em;
color: #fff;
font-family: 'Raleway', sans-serif;
margin-bottom: 1.4em;
`
const RecordsList = styled.div`
width: 100%;
height: 56vh;
background-color: #fff;
border-radius: .31em;
overflow-y: auto;
font-family: 'Raleway', sans-serif;
font-size: 1.3em;
font-weight: 400;
color: #868686;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 0 3em;
`
const RecordsListWithElement = styled(RecordsList)`
display: block;
padding: 1.4em .8em;
`
const ContainerSaldo = styled.div`
width: 100%;
height: 2em;
display: flex;
background-color: #fff;
justify-content: space-between;
align-items: center;
padding: .5em .5em .5em .8em;
margin-bottom: .5em;
border-radius: .31em;
`
const Saldo = styled.p`
font-weight: 700;
font-size: 1.5em;
color: #000;
font-family: 'Raleway', sans-serif;
text-align: left;
text-transform: uppercase;

`
const ValorSaldo = styled.p`
font-weight: 600;
font-size: 1.5em;
color: ${props => props.cor};
font-family: 'Raleway', sans-serif;
text-align: right;

`