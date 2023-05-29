import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedbackProp, onDeleteProp }) => {
  return (
    <div className='feedback-list'>
      {feedbackProp.length === 0 || !feedbackProp
        ? 'No New Feedback Items Yet'
        : feedbackProp.map((feedbackItem) => (
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
