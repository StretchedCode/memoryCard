import React, { FC } from 'react';
import './stylesheets/App.scss';

function App() {



  const renderCards = () => {

    const cardArr: React.ReactElement[] = [];

    for(let i = 0; i < 12; i+= 1){
      const card = <div className="max-w-sm min-h-[24rem] rounded overflow-hidden shadow-lg hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-red-400">
        <div className="w-full min-h-[40%] bg-slate-200 text-center mb-2">Img PlaceHolder</div>
        <div className="px-4 py-2 mb-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <div className="text-l">Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text</div>
          <button className="text-center mt-8 border-2 border-red-500 rounded-full px-3 py-1 text-sm hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-red-400">
            Select
          </button>
        </div>
      </div>

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
