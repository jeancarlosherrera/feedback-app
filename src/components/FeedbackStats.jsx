import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = ({}) => {
  const { feedbackFromContext } = useContext(FeedbackContext)

  let average = (
    feedbackFromContext.reduce((acc, el) => acc + el.rating, 0) /
    feedbackFromContext.length
  ).toFixed(1)

  return (
    <div className='feedback-stats'>
      <h4>{feedbackFromContext.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
