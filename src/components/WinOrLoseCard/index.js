import './index.css'
import '../EmojiGame/index.css'
import NavBar from '../NavBar'

const WinOrLossCard = props => {
  const {Sdetails, resetGame} = props
  const {score} = Sdetails
  const result = score === 12

  const WorLText = result ? 'You Won' : 'You Lose'
  const ScoreOrBestScore = result ? 'Best Score' : 'Score'
  const WorLimg = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayBtn = () => {
    resetGame(score)
  }

  return (
    <div className="EmojiGame-container">
      <NavBar Sdetails={Sdetails} />
      <div className="WinOrLossCard-container">
        <div className="name-container">
          <h1 className="won-loss-heading">{WorLText}</h1>
          <p className="best-score-text">{ScoreOrBestScore}</p>
          <p className="score-current">{score}/12</p>
          <button
            type="button"
            className="play-again-btn"
            onClick={onClickPlayBtn}
          >
            Play Again
          </button>
        </div>
        <div className="won-img-container">
          <img src={WorLimg} className="won-img" alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLossCard
