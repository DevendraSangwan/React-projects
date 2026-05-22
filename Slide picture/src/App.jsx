import React from 'react';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ImageSlider />
    </div>
  );
}

export default App;