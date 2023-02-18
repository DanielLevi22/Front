import { useState } from "react"
import { Container, Form , Background} from "./styles"
import { Input } from "../../components/Input"
import {  FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

export function SingIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const {signIn} = useAuth();
    
function handleSingIn(){
    signIn({email,password})
}

    return(
        <Container
        >
        <Form>

            <h1>Rocket Notes</h1>
            <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

            <h2>Faca seu login</h2>
        
            
            
            <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={e =>setEmail(e.target.value)}
            />

            <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e =>setPassword(e.target.value)}


            />

            <Button title="Entrar" onClick={handleSingIn}/>
            <Link to="/register">Criar Conta</Link>
        </Form>
    
        <Background></Background>


        </Container>
    )
}