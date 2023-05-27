const FeedbackItem = ({ feedbackItemProp }) => {
  return (
    <div className='card'>
      <div className='num-display'>{feedbackItemProp.rating}</div>
      <div className='text-display'>{feedbackItemProp.text}</div>
    </div>
  )
}

export default FeedbackItem
