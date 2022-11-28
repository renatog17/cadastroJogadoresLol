import { useState } from 'react'
import Botao from '../Botao/botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

    

    const [nickname, setNickname] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [main, setMain] = useState('');
    const [role, setRole] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("ao salvar", nickname, classificacao, main, role)
        props.aoJogadorAdicionado(
            {
                nickname,
                classificacao,
                main,
                role
            }
        )
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Informe seus dados para ser recrutado!</h2>
                <CampoTexto 
                obrigatorio="true" 
                label="Nickname" 
                placeholder="Digite sua nickname"
                valor={nickname}
                aoAlterado={valor => setNickname(valor)}/>
                <CampoTexto 
                obrigatorio="true" 
                label="Classificação" 
                placeholder="Digite sua classificação"
                valor={classificacao}
                aoAlterado={valor => setClassificacao(valor)}/>
                <CampoTexto 
                obrigatorio="true" 
                label="Main" 
                placeholder="Digite o nome do seu main"
                valor={main}
                aoAlterado={valor => setMain(valor)}/>
                <ListaSuspensa 
                obrigatorio="true" 
                label={'Role'} 
                itens={props.roles}
                valor={role}
                aoAlterado={valor => setRole(valor)}/>
                <Botao texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario