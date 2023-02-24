import React, { useState, useEffect } from 'react';
import { SelectMenuButton } from '../Components/SelectMenuButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { diffuserPowerState, scentIdState } from '../store/atoms';
import '../Style/ComponentStyle.css';


const scentNames = ['내가 만든 ', '베이', '밤부', '일랑일랑', '러브미', '자몽', '교보문고', '오드우드', '공원에서의 대화'];

export function MainPage() {
  const [diffuserPower, setDiffuserPower] = useRecoilState(diffuserPowerState);
  const scentId = useRecoilValue(scentIdState);
  const [stateDisplay, setStateDisplay] = useState('');


  useEffect(() => {
    if (diffuserPower) {
      setStateDisplay(`현재 ${ scentNames[scentId] }향이 퍼지고 있습니다`);
    }
    else {
      setStateDisplay(`현재 향이 나지 않습니다`);
    }
  }, [diffuserPower, scentId]);

  return (
    <div>
      <div className='button-power'
        onClick={() => setDiffuserPower(!diffuserPower)}>
          <span className={ diffuserPower ? 'text-power-off' : 'text-power-on' }>{ diffuserPower ? 'OFF' : 'ON' }</span>
          <div className={ diffuserPower ? 'circle-power-off' : 'circle-power-on' }></div>
      </div>
      <p className='state'>{ stateDisplay }</p>
      <h2 className='title'>메뉴</h2>
      <div className='menu-list'>
        <SelectMenuButton index='01' title='향 선택' description='직접 향을 선택할 수 있습니다' keyword='select' />
        <SelectMenuButton index='02' title='공간 분석' description='공간을 분석해 향 세기를 조절합니다' keyword='analysis' />
      </div>
    </div>
  );
}
