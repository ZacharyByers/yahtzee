import React from 'react'
import { Segment } from 'semantic-ui-react'
import ScoreSection from './ScoreSection'

class ScoreCard extends React.Component {
  render() {
    return(
      <Segment basic>
        <ScoreSection label='Upper' />
        <ScoreSection label='Lower' />
      </Segment>
    )
  }
}

export default ScoreCard
