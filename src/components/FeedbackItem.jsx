const FeedbackItem = ({ feedbackProp }) => {
  return feedbackProp.map((feedbackItem) => {
    return (
      <div key={feedbackItem.id} className='card'>
        <div className='num-display'>{feedbackItem.rating}</div>
        <div className='text-display'>{feedbackItem.text}</div>
      </div>
    )
  })
}

export default FeedbackItem
