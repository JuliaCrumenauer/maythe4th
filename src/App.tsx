import starWars from './assets/starWars.svg'
import character from './assets/character.svg'
import finnCard from './assets/finnCard.svg'
import bb8Card from './assets/bb8Card.svg'

import './App.css'

import './global.css'

function App() {
  return (
    <div className="allCards">
      <div className="firstCard">
        <img src={finnCard} alt="" />
        <p>FINN</p>
      </div>

      <div className="thirdCard">
        <img src={bb8Card} alt="" />
        <p>BB-8</p>
      </div>

      <div className="card">
        <div className="image">
          <img src={starWars} alt="" />
        </div>

        <div className="characterImage">
          <img src={character} alt="" />
        </div>

        <div className="headerInfos">
          <h2>Rey Skywalker</h2>
          <p>
            She was a scrap metal scavenger who discovered she was
            Force-sensitive during her search for the legendary Jedi Master Luke
            Skywalker.
          </p>
        </div>

        <div className="anotherInfos">
          <div className="detail">
            <p>Movies</p>
            <h4>
              The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces
              of Destiny
            </h4>
          </div>

          <div className="detail2">
            <p>Race</p>
            <h4>Human</h4>
          </div>

          <div className="detail2">
            <p>Height</p>
            <h4>1,7m</h4>
          </div>

          <div className="detail2">
            <p>Location</p>
            <h4>Jakku</h4>
          </div>

          <div className="detail2">
            <p>Weapons</p>
            <h4>Lightsaber, Blaster & Quarterstaff</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
