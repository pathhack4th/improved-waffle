import React, { useState, useEffect } from 'react';
import { SelectMenuButton } from '../Components/SelectMenuButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { diffuserPowerState, scentIdState } from '../store/atoms';
import '../Style/ComponentStyle.css';


const scentNames = ['내가 만든 ', '오드우드', '자몽', '러브미', '공원', '밤부', '교보문고', '베이', '일랑일랑'];

export function MainPage() {
  const [diffuserPower, setDiffuserPower] = useRecoilState(diffuserPowerState);
  const scentId = useRecoilValue(scentIdState);
  const [stateDisplay, setStateDisplay] = useState('');

  useEffect(() => {
    if (diffuserPower) {
      setStateDisplay(`지금은 ${ scentNames[scentId] }향이 퍼지고 있습니다`);
    }
    else {
      setStateDisplay(`아무 향도 나지 않습니다`);
    }
  }, [diffuserPower, scentId]);

  return (
    <div>
      <div className='main-header'>
        <div className='button-power'
          onClick={() => setDiffuserPower(!diffuserPower)}>
            <span className={ diffuserPower ? 'text-power-on' : 'text-power-off' }>{ diffuserPower ? 'ON' : 'OFF' }</span>
            <div className={ diffuserPower ? 'circle-power-on' : 'circle-power-off' }></div>
            <p className='state'>{ stateDisplay }</p>
        </div>
        <div className='logo'>
          <div className='logo-image' />
        </div>
      </div>
      <div className='menu-list'>
        <SelectMenuButton index='01' title='향 선택' description='직접 향을 선택할 수 있습니다' keyword='select' />
        <SelectMenuButton index='02' title='공간 분석' description='공간에 맞는 향이 퍼지게 합니다' keyword='spatial' />
        <SelectMenuButton index='03' title='분위기 분석' description='온·습도와 표정을 고려합니다' keyword='mood' />
      </div>
      <div className='footer'>
        <div className='team-logo'>
          <div className='team-logo-image' />
          <span className='team-name'>Raspberry Macaron</span>
        </div>
      </div>
    </div>
  );
}
