// Write your code here.
import './index.css'
import '../EmojiGame/index.css'

const EmojiCard = props => {
  const {details, updateSelectedList} = props
  const {id, emojiName, emojiUrl} = details
  const OnclickEmoji = () => {
    updateSelectedList(id)
  }
  return (
    <li className="EmojiCard-container">
      <button type="button" className="emoji-btn" onClick={OnclickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-btn-img" />
      </button>
    </li>
  )
}
export default EmojiCard
