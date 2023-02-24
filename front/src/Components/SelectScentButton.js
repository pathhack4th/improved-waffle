import React from 'react';
import { useSetRecoilState } from 'recoil';
import { scentIdState } from '../store/atoms';
import '../Style/ComponentStyle.css';


export function SelectScentButton({ index, name, description }) {
  const setScentId = useSetRecoilState(scentIdState);

  return (
    <div className='scent-card' onClick={() => setScentId(parseInt(index))} >
      <div className='scent-button'>
        <img className='scent-image' src={`images/${ index }.jpg`} alt={`scent-${ index }`}></img>
        <p className='scent-name'>{ name }</p>
      </div>
      <p className='scent-description'>{ description }</p>
    </div>
  );
}
