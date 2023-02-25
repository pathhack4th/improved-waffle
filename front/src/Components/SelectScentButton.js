import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { scentIdState } from '../store/atoms';
import axios from 'axios';
import '../Style/ComponentStyle.css';


const alpha = ['', 'a', 'b', 'c', 'd'];

export function SelectScentButton({ index, name, description }) {
  const setScentId = useSetRecoilState(scentIdState);
  const navigate = useNavigate();

  const handleClickScentCard = () => {
    setScentId(parseInt(index));
    axios({
      method: "post",
      url: "/api/choice",
      data: {
        key: alpha[parseInt(index)]
      }
    })
    .then((response) => {
      navigate('/');
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='scent-card' onClick={handleClickScentCard} >
      <div className='scent-button'>
        <div className='circle'></div>
        <img className='scent-image' src={`images/${ index }.jpg`} alt={`scent-${ index }`}></img>
        <p className='scent-name'>{ name }</p>
      </div>
      <p className='scent-description'>{ description }</p>
    </div>
  );
}
