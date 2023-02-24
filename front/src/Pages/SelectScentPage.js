import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectScentButton } from '../Components/SelectScentButton';
import '../Style/ComponentStyle.css';


export function SelectScentPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className='header'>
        <div className='button-back' onClick={() => navigate(-1)} />
        <h2 className='title'>향 선택</h2>
        <div className='logo'>
          <div className='logo-image' />
        </div>
      </div>
      <div className='scent-list'>
        <SelectScentButton index='01' name='베이' description='#풀향 #싱그러움 #장미향' />
        <SelectScentButton index='02' name='밤부' description='#고요한 #숲 #편백나무' />
        <SelectScentButton index='03' name='일랑일랑' description='#상큼한 #달달한 #부드러운' />
        <SelectScentButton index='04' name='러브미' description='#꽃집 #풀내음 #생기' />
        <SelectScentButton index='05' name='자몽' description='#상큼한 #달콤한 #시트러스' />
        <SelectScentButton index='06' name='교보문고' description='#책 #편백나무 #차분' />
        <SelectScentButton index='07' name='오드우드' description='#흙 #진한 #스파이시' />
        <SelectScentButton index='08' name='공원' description='#페퍼민트 #깔끔한 #장미향' />
      </div>
    </div>
  );
}
