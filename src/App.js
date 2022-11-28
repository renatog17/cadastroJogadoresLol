import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Role from './componentes/Role/Role';
import Formulario from './componentes/Formulario/Formulario';

function App() {

  const roles=[ 
    {
      nome: 'Top',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Jungle',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Mid',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Adc',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Suporte',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    },
  ]

  const [jogadores, setJogadores] = useState([])

  const aoJogadorAdicionado = (jogador) =>{
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario roles={roles.map(role => role.nome)} aoJogadorAdicionado={jogador=> aoJogadorAdicionado(jogador)} />
      {roles.map(role => <Role 
      key={role.nome} 
      nome={role.nome} 
      corPrimaria={role.corPrimaria} 
      corSecundaria={role.corSecundaria} 
      jogadores={jogadores.filter(jogador => jogador.role === role.nome)}/>)}
      
    </div>
  );
}

export default App;
