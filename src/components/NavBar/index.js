import './index.css'
import '../EmojiGame/index.css'

const NavBar = props => {
  const {Sdetails} = props
  const {score, topScore, result} = Sdetails
  const scoreBar = result === null

  return (
    <div className="NavBar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {scoreBar && (
        <div className="score-container">
          <p className="current-score">Score: {score}</p>
          <p className="high-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
