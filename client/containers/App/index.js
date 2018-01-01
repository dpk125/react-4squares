import React from 'react';
import { connect } from 'react-redux';
import {
  guessSequenceSquare,
  revealRandomSquare,
  showNextSequence,
  startNewGame
} from '../../core/modules/game/gameActions';
import { constants } from '../../core/constants';
import Square from '../../components/Square';
import Button from '../../components/Button';

class App extends React.Component {
  render() {
    const { game } = this.props;
    const activeSquare = game.get('activeSquare');
    const gameEnded = game.get('ended');

    if (gameEnded) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>Game over!</h1>
              <h2>
                You've scored {game.get('score')} points
              </h2>
              <Button click={this.props.startNewGame}>
                Try again?
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <h4>Round {game.get('round')}</h4>

        <div className="squares">
          {constants.config.squares.map((square, index) => (
            <Square
              key={index}
              active={index === activeSquare}
              backgroundColor={square.color}
              click={this.props.guessSequenceSquare.bind(this, index)}
            />)
          )}
        </div>

        <div className="row">
          <div className="col-xs-12 text-center">
            <h5>Your score: {game.get('score')}</h5>
              <Button
                hidden={!game.get('roundSequence').isEmpty()}
                click={this.props.showNextSequence}
              >
                Start round
              </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  showNextSequence: () => dispatch(showNextSequence()),
  guessSequenceSquare: (index) => dispatch(guessSequenceSquare(index)),
  startNewGame: () => dispatch(startNewGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
