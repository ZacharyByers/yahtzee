import React from 'react'
import { List, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateScores, resetRoll } from '../actions/currentGame'
import { singles, addAllDice, staticScore, validateYahtzee } from '../utils/scoringEngine'

const styles = {
  icon: { cursor: 'pointer' },
}

class ScoreRow extends React.Component {
  updateScore = (key, extraY = false) => {
    let { currentGame: { dice, scores }, dispatch } = this.props
    let entry = scores.find( d => d.name === key )
    dispatch(resetRoll())
    if (entry.value)
      entry.score = singles(entry.value, dice)
    else if (entry.addAll)
      entry.score = addAllDice(entry.name, dice)
    else if (entry.name === 'Yahtzee' && extraY)
      entry.score += 100
    else
      entry.score = staticScore(entry.name, dice)

    let newScores = scores.map( score => {
      if (score.name === key)
        return entry
      return score
    })

    dispatch(updateScores(newScores))
  }

  render() {
    let { name, score, currentGame: { roll, dice } } = this.props
    const extraYahtzee = validateYahtzee(dice) && roll !== 0 && score !== null && score != 0
    return(
      <List.Item>
        { (score === null || extraYahtzee) &&
          <List.Icon
            style={styles.icon}
            name='check circle outline'
            color='green'
            onClick={ roll !== 0 ? () => this.updateScore(name, extraYahtzee) : f => f }
          />
        }
        <List.Content>
          <Header as='h4' floated='left'>{score || 0}</Header>
          <Header as='h5' floated='right'>{name}</Header>
        </List.Content>
      </List.Item>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreRow)
