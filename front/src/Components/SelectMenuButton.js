import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ComponentStyle.css';


export function SelectMenuButton({ index, title, description, keyword }) {
  const navigate = useNavigate();

  const handleClickMenu = () => {
    navigate(`/${ keyword }`);
  }
  
  return (
    <div className='menu-card' onClick={() => handleClickMenu()}>
      <div className='menu-button'>
        <img className='menu-image' src={`images/menu_${ index }.jpg`} alt={`menu-${ index }`}></img>
        <p className='menu-title'>{ title }</p>
      </div>
      <p className='menu-description'>{ description }</p>
    </div>
  );
}
