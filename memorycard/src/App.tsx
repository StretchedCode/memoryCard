import React, { FC, useState, useEffect, useRef } from 'react';
import './stylesheets/App.scss';
import Card from './components/Card';
import { create } from 'domain';

function App() {

  const [score, setScore] = useState(0)
  const [game, setGame] = useState(true)
  const [cardArr, setCardArr] = useState([
    {
      id: 0,
      isClicked: false,
      name: "",
      imageURL: "",
    }
  ])

  useEffect(() => {

      const fetchData = async(id: number) =>{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await response.json()
        
        return data
      }

      const createDataCards = async() => {

          const dataArray = []
          for (let i = 1; i < 17; i++){

            const data = await fetchData(Math.floor(Math.random() * (800 - 1) + 1))

            const card = {
              id: i,
              isClicked: false,
              name: data.name,
              imageURL: data.sprites.front_default,
            }
            dataArray.push(card)
          }
        setCardArr(dataArray)
        console.log('mount')
      }
      createDataCards()
  }, [game])

  const createCards = () => {
    
      const cardArray: React.ReactElement[] = []

      for(let i = 0; i < cardArr.length; i += 1){
        
        cardArray.push(<Card id={cardArr[i].id} clickHandle={isClickedHandle} isClicked={cardArr[i].isClicked} name={cardArr[i].name} imageURL={cardArr[i].imageURL}></Card>)
      }
      if (cardArr.length === 1) {
        return <div>Loading...</div>
      }
      else {
        return cardArray
      }
  }

  const randomCards = () => {
    const dataArr = cardArr.slice()
    for (var i = dataArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = dataArr[i];
      dataArr[i] = dataArr[j];
      dataArr[j] = temp;
    }
    setCardArr(dataArr)
    console.log('called')
  }

  const isClickedHandle = (id: number) => {
      const dataArr = cardArr.slice()
      const pos = dataArr.map(data => data.id).indexOf(id)
      dataArr[pos].isClicked = !(dataArr[pos].isClicked)
      setCardArr(dataArr)
      scoreHandle(pos)
  }

  const scoreHandle = (pos: number) => {
    const clickStatus = cardArr[pos].isClicked

    if (clickStatus === true) {
      setScore(score => score + 10)
      randomCards()
    }
    else {
      setScore(0)
      setGame(game => !(game))
    }
  }

  console.log(cardArr)
  return (
    
    <>
    <div className="flex min-h-[10vh] border-1 border-black px-4 items-center shadow-md justify-between text-red-600 font-semibold text-xl">
      <div>Memory Card Game</div>
      <div className='flex gap-2 text-lg'>
        <div>Score: {score}</div>
        <div>High Score: 100</div>
      </div>
    </div>
    <div className='grid gap-7 p-10 grid-cols-4 grid-rows-3'>
      {createCards()}
    </div>
    </>
  );
}

export default App;
