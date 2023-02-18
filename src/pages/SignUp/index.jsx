import { Container, Form , Background} from "./styles"
import { Input } from "../../components/Input"
import { useState } from "react"
import {  FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Button } from '../../components/Button'

import { api } from "../../services/api"
import { Link, useNavigate } from "react-router-dom"
export function SingUp(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate()


    function handleSingUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os Campos!")
        }

        api.post("/users",{ name, email, password})
        .then(()=>{
            alert("Usuario cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error=>{
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Nao foi possivel cadastrar")
            }
        })
    }

    return(
        <Container>

        <Background></Background>

        <Form>

            <h1>Rocket Notes</h1>
            <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

            <h2>Crie sua conta</h2>
        
            <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={e => setName(e.target.value)}
            />
            
            <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}

            />

            <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
            />

            <Button title="Cadastrar" onClick={handleSingUp}></Button>
            <Link to="/">Voltar para login</Link>

        </Form>
    


        </Container>
    )
}