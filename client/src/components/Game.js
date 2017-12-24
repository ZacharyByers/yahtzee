import React from 'react'
import { Grid } from 'semantic-ui-react'
import Board from './Board'
import ScoreCard from './ScoreCard'

const styles = {
  fullHeight: { height: '100vh' },
  board: { backgroundColor: '#06871e' },
  scores: { backgroundColor: '#d4f9f8' },
}

const Game = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={12} style={{ ...styles.fullHeight, ...styles.board }}>
        <Board />
      </Grid.Column>
      <Grid.Column width={4} style={{ ...styles.fullHeight, ...styles.scores }}>
        <ScoreCard />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Game
