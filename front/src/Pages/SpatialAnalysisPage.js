import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ComponentStyle.css';


export function SpatialAnalysisPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className='header'>
        <div className='button-back' onClick={() => navigate(-1)} />
        <h2 className='title'>공간 분석</h2>
      </div>
      <div className=''>
      </div>
    </div>
  );
}
