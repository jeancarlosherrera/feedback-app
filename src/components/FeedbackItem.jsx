import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ feedbackItemProp }) => {
  const { deleteFeedback, selectFeedbackToEdit } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{feedbackItemProp.rating}</div>
      <button
        onClick={() => deleteFeedback(feedbackItemProp.id)}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <button onClick={() => selectFeedbackToEdit(feedbackItemProp)}>
        <FaEdit className='edit' color='purple' />
      </button>
      <div className='text-display'>{feedbackItemProp.text}</div>
    </Card>
  )
}

export default FeedbackItem
