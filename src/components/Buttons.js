import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Buttons(){
    const navigate = useNavigate();
    return(
        <ContainerButtons>                
                        <Entrada onClick={ () => navigate("/input")}>
                            <Icon><ion-icon name="add-circle-outline"></ion-icon></Icon>
                            <Text>Nova Entrada</Text>                       
                        </Entrada>                   
                        <Saida onClick={ () => navigate("/output")}>
                            <Icon><ion-icon name="remove-circle-outline"></ion-icon></Icon>
                            <Text>Nova Saída</Text>
                        </Saida>
                   
                </ContainerButtons>
    )

}
const ContainerButtons = styled.div`
width: 100%;
height: 7em;
border-radius: .31em;
display: flex;
justify-content: space-between;
`
const Entrada = styled.button`
width: 48%;
height: 100%;
background-color: #a328d6;
border-radius: .31em;
border: transparent;
cursor: pointer;
text-align: left;
padding-left: 1em;
position: relative ;
`
const Saida = styled(Entrada)`
`
const Text = styled.p`
width: 4em;
font-weight: 700;
font-size: 1.2em;
color: #fff;
margin-top: 3.5em;
`
const Icon = styled.div`
position: absolute;
top: .4em;
font-size: 2em;
color: #fff;
`