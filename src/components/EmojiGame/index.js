import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {selectedListIds: [], score: 0, topScore: 0, result: null}

  updateSelectedList = id => {
    const {selectedListIds, score} = this.state
    const isValid = selectedListIds.some(eachItem => eachItem === id)
    if (!isValid) {
      if (score + 1 === 12) {
        this.setState({score: 12, result: true})
      } else {
        this.setState(prevState => ({
          selectedListIds: [...prevState.selectedListIds, id],
          score: prevState.score + 1,
        }))
      }
    } else {
      this.setState({result: false})
    }
  }

  resetGame = topGameScore => {
    this.setState({
      selectedListIds: [],
      score: 0,
      topScore: topGameScore,
      result: null,
    })
  }

  updateTopScore = () => {
    const {score, topScore} = this.state
    const currentTopScore = topScore > score ? topScore : score
    this.setState({topScore: currentTopScore})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, result, topScore} = this.state

    const Sdetails = {
      score,
      result,
      topScore,
    }
    const shuffledEmojisList = this.shuffledEmojisList()

    if (result === null) {
      return (
        <div className="EmojiGame-container">
          <NavBar Sdetails={Sdetails} />
          <div className="emojisList-container">
            <ul className="emoji-container">
              {shuffledEmojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  details={eachItem}
                  updateSelectedList={this.updateSelectedList}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <WinOrLossCard
        Sdetails={Sdetails}
        resetGame={this.resetGame}
        updateTopScore={this.updateTopScore}
      />
    )
  }
}

export default EmojiGame
