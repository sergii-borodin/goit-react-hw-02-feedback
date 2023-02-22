import React from 'react'
// import PropTypes from 'prop-types'

const FeedbackInputInterface = ({ countPositiveFeedbacks,
    countNeutralFeedbacks, countNegativeFeedbacks}) => {
    return (<div>
      <h1>Please leave your feedback</h1>
      <ul>
        <li><button onClick={countPositiveFeedbacks}>good</button></li>
        <li><button onClick={countNeutralFeedbacks}>neutral</button></li>
        <li><button onClick={countNegativeFeedbacks}>bad</button></li>
        </ul></div>
  )
}

// FeedbackInputInterface.propTypes = {}

export default FeedbackInputInterface