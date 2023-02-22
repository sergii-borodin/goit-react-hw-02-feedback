import React from 'react'
// import PropTypes from 'prop-types'
import { StatsContainer } from './Statistics.styled';

const Statistics = ({ stats, total, positivePercentage }) => {
    const { good, neutral, bad } = stats;
  return (
      <StatsContainer>
          <h2>Statistics</h2>
          <ul>
              <li>{good}</li>
              <li>{neutral}</li>
              <li>{bad}</li>
              <li>{total}</li>
              <li>{positivePercentage}</li>

              
              
          </ul>
    </StatsContainer>
  )
}

// Statistics.propTypes = {}

export default Statistics