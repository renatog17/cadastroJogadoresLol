import './Jogador.css'
const Jogador = (props) =>{
    return(
        <div className='jogador'>
            <div className='cabecalho'>
                <img src='https://github.com/renatog17.png' alt=''/>
            </div>
            <div className='rodape'>
                <h4>{props.nickname}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Jogador