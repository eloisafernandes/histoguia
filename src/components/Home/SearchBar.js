import React, { useState, useEffect } from 'react';
import EpitelioSimples from '../../assets/img/temas/epitelio-simples.jpg';
import EpitelioEstratificado from '../../assets/img/temas/epitelio-estratificado.jpg';
import TecidoConjuntivoDito from '../../assets/img/temas/tecido-conjuntivo-dito.jpeg';
import TecidoConjuntivoDenso from '../../assets/img/temas/tecido-conjuntivo-denso.webp';
import TecidoMuscularEstriado from '../../assets/img/temas/musculo-estriado-esqueletico.jpg';
import TecidoMuscularLiso from '../../assets/img/temas/tecido-muscular-liso.webp';
import TecidoNervoso from '../../assets/img/temas/tecido-nervoso.webp';
import CartilagemHialina from '../../assets/img/temas/cartilagem-hialina.jpeg';
import BlockedIcon from './BlockedIcon';
import NotStartedIcon from './NotStartedIcon';
import CompleteIcon from './CompleteIcon';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
 
  const temas = [
    { nome: 'Epitélio Simples', img: EpitelioSimples, status: 'Não iniciado', link: '/quizSetup/1' },
    { nome: 'Epitélio Estratificado', img: EpitelioEstratificado, status: 'Não iniciado', link: '/quizSetup/2' },
    { nome: 'Tecido Conjuntivo Propriamente Dito', img: TecidoConjuntivoDito, status: 'Bloqueado', link: '/quizSetup/3' },
    { nome: 'Tecido Conjuntivo Denso', img: TecidoConjuntivoDenso, status: 'Bloqueado', link: '/quizSetup/4' },
    { nome: 'Tecido Muscular Estriado Esquelético', img: TecidoMuscularEstriado, status: 'Bloqueado', link: '/quizSetup/5' },
    { nome: 'Tecido Muscular Liso', img: TecidoMuscularLiso, status: 'Bloqueado', link: '/quizSetup/6' },
    { nome: 'Tecido Nervoso', img: TecidoNervoso, status: 'Bloqueado', link: '/quizSetup/7' },
    { nome: 'Cartilagem Hialina', img: CartilagemHialina, status: 'Bloqueado', link: '/quizSetup/8' }
  ];

  useEffect(() => {
    setResults(temas);  // Carregar os temas locais sem necessidade de fetch
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filteredItems = value
      ? temas.filter((tema) => tema.nome.toLowerCase().includes(value.toLowerCase()))
      : temas;
    setResults(filteredItems);
  };

  const renderStatusIcon = (status) => {
    if (status === 'Completo') return <CompleteIcon />;
    if (status === 'Bloqueado') return <BlockedIcon />;
    return <NotStartedIcon />;
  };

  const handleThemeClick = (link) => {
    navigate(link);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-11/12 p-4 mt-8 md:mt-2">
      <div className="w-full mb-6">
        <input
          type="text"
          placeholder="Qual tema você deseja procurar?"
          value={query}
          onChange={handleInputChange}
          className="w-full p-4 pl-10 border rounded-[50px] focus:outline-none focus:ring-2 focus:ring-gray-300 text-[14px] font-inter-regular"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {results.map((result, index) => (
          <div key={index} className="p-4 bg-white rounded-[23px] shadow-lg cursor-pointer" onClick={() => handleThemeClick(result.link)}>
            <img className='object-cover w-full h-[140px] md:h-[180px] mb-2 rounded-[12px]' src={result.img} alt={result.nome} />
            <span className='w-full block text-left mt-2 text-[16px] font-primary font-inter-semi h-[60px]'>{result.nome}</span>
            <div className='flex justify-between items-center mt-2'>
              <span className='text-gray-500 text-[14px] font-inter-regular'>{result.status}</span>
              {renderStatusIcon(result.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
