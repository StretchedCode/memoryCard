import React, { FC } from 'react';
import './stylesheets/App.scss';
import Card from './components/Card';

function App() {



  const renderCards = () => {

    const cardArr: React.ReactElement[] = [];

    for(let i = 0; i < 12; i+= 1){
      
      const card = <Card name='bruh'></Card>

      cardArr.push(card)
      
    }

    return cardArr
  }
  return (
    <>
    <div className="flex min-h-[10vh] border-1 border-black px-4 items-center shadow-md justify-between text-red-600 font-semibold text-xl">
      <div>Memory Card Game</div>
      <div className='flex gap-2 text-lg'>
        <div>Score: 0</div>
        <div>High Score: 100</div>
      </div>
    </div>

    <div className='grid gap-7 p-10 grid-cols-4 grid-rows-3'>
      {renderCards()}
    </div>
    </>
  );
}

export default App;
