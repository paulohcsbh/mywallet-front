import styled from "styled-components";

export default function Record(props){
    const {reg} = props;
    return (
        <>
            <Container>
                <Data>{reg.day}</Data>
                <Descricao>{reg.description}</Descricao>
                <Valor cor={reg.type === "entrada"? "#03ac00":"#c70000"}>{reg.value.toFixed(2).replace(/[.]/g,",")}</Valor>
            </Container>
            
        </>
    )
}
const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
position: realtive;
margin-bottom: .5em;
`
const Data = styled.p`
width: 10%;
font-weight: 400;
font-size: 1em;
color: #c6c6c6;
font-family: 'Raleway', sans-serif;
text-align: left;
margin: 0 2em .5em 0;
`
const Descricao =styled(Data)`
width: 58%;
color: #000;
text-align: left;
`
const Valor = styled(Data)`
width: 30%;
color: ${props => props.cor};
text-align: right;
margin-right:0;
`
