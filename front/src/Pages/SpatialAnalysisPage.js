import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { spatialAnalysisState } from '../store/atoms';
import '../Style/ComponentStyle.css';


export function SpatialAnalysisPage() {
  const [spatialAnalysis, setSpatialAnalysis] = useRecoilState(spatialAnalysisState);
  const [dots, setDots] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
  }, []);
  
  useEffect(() => {
    const loading = setInterval(() => {
      if (dots.length >= 3) {
        setDots('');
      }
      else {
        setDots(dots => dots+'.');
      }
    }, 500);
    return (() => clearInterval(loading));
  }, [dots]);
  
  return (
    <div>
      <div className='header'>
        <div className='button-back' onClick={() => navigate(-1)} />
        <h2 className='title'>공간 분석</h2>
        <div className='logo'>
          <div className='logo-image' />
        </div>
      </div>
      <div className='analysis-state'>
        { spatialAnalysis ? '' : `공간 분석을 진행 중입니다${ dots }` }
      </div>
    </div>
  );
}
