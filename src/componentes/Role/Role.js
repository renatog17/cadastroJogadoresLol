import Jogador from '../Jogador/Jogador'
import './Role.css'

const Role = (props) => {
    return(
        <section className='role' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => <Jogador nickname={jogador.nickname} role={jogador.role}/>)}
            </div>
        </section>
    )
}

export default Role