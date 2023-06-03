import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ feedbackItemProp }) => {
  const { deleteFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{feedbackItemProp.rating}</div>
      <button
        onClick={() => deleteFeedback(feedbackItemProp.id)}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedbackItemProp.text}</div>
    </Card>
  )
}

export default FeedbackItem
