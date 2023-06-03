import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ onDeleteProp }) => {
  const { feedbackFromContext } = useContext(FeedbackContext)

  return (
    <div className='feedback-list'>
      {feedbackFromContext.length === 0 || !feedbackFromContext
        ? 'No New Feedback Items Yet'
        : feedbackFromContext.map((feedbackItem) => (
            <FeedbackItem
              onDeleteProp={onDeleteProp}
              key={feedbackItem.id}
              feedbackItemProp={feedbackItem}
            />
          ))}
    </div>
  )
}

export default FeedbackList
