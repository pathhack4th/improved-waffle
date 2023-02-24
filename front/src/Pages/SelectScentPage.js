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
      </div>
      <div className='scent-list'>
        <SelectScentButton index='01' name='베이' description='한 방울 흘리지마자 나는 압도적인 풀향, 달달함은 한 스푼만 그리고 싱그러운 향으로 어우러집니다. 또한 서서히 올라오는 장미향으로 시간이 지남에 따라 줄기부터 꽃송이까지의 향을 모두 느낄 수 있습니다.' />
        <SelectScentButton index='02' name='밤부' description='제주의 고요한 숲 길 속 편백나무에서 영감을 받았습니다. 시원한 바람이 부는 우거진 숲 향이 은은하게 공간을 채워 줍니다. 마치 사려니 숲길에 머무는 것처럼요' />
        <SelectScentButton index='03' name='일랑일랑' description='상큼하고 달달한 향 "꽃 중의 꽃" 이라는 의미의 일랑일랑은 다양한 향에 쓰일 만큼 그윽하고 매력적인 향기를 지니고 있습니다. 포근하고 부드러운 온기를 온종일 감싸 안는 청결하고 자연스러운 향입니다.' />
        <SelectScentButton index='04' name='러브미' description='꽃집에 들어선 듯한 느낌으로 갓 따온 꽃들의 더미 속 싱그럽고 생명력 가득한 풀내음 생명력 넘치는 향으로 분기위 자체를 빠르게 바꿔줄 수 있는 생기 넘치는 향입니다.' />
        <SelectScentButton index='05' name='자몽' description='싱그러운 시트러스 부케를 받는 듯한 풍부한 상큼함. 달콤한 자몽향에 매력적인 시트러스가 혼합된 향. 상큼 쌉싸름한 자몽 향기로 가볍고 산뜻하며, 자몽 껍질을 깠을 때의 톡 터지는 자몽향을 느끼실 수 있습니다.' />
        <SelectScentButton index='06' name='교보문고' description='향기는 책을 깨우고 책은 향기를 품는다. 대형서점에 가면 맡아 볼 수 있는 신선한 새 책 냄새. 정신을 고양시키는 유칼립투스 치유와 위로의 편백나무 베이스 향으로 언제 맡아도 상쾌하고 마음이 차분해지는 느낌의 향입니다.' />
        <SelectScentButton index='07' name='오드우드' description='무거운 듯하면서 가벼운 오드우드 향. 약간의 흙 냄새를 연상시키며 진하고 묵직한 향과 더불어 스파이시한 느낌. 일반적인 우디향들보단 묵직하지만 고급진 우디향을 찾으신다면 추천 드립니다.' />
        <SelectScentButton index='08' name='공원에서의 대화' description='터키산 장미 부케의 진한 향에 쌉싸름한 베르가못과 페퍼민트를 더한 싱그럽고 풋풋한 수많은 장미향 중에서 가장 깔끔한 장미향. 강하지는 않지만 은은하게 계속 내 주변을 맴도는 향기입니다.' />
      </div>
    </div>
  );
}
