import React from 'react';
import './App.scss';
import { Carousel } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <Carousel
        items={[
          {
            label: 'first',
            tag: 'first',
            imageSrc: 'https://source.unsplash.com/featured/?norway',
            link: '/',
          },
          {
            label: 'second',
            tag: 'second',
            imageSrc: 'https://source.unsplash.com/featured/?poland',
            link: '/',
          },
          {
            label: 'third',
            tag: 'third',
            imageSrc: 'https://source.unsplash.com/featured/?fiji',
            link: '/',
          },
        ]}
      />
    </div>
  );
}

export default App;
