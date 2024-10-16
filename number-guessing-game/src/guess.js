import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import './App.css';

function GameNumber() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      setMessage('Please enter a valid number between 1 and 10.');
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess === randomNumber) {
      setMessage(`🎉 Correct! You guessed the number in ${attempts + 1} attempts.`);
      setGameOver(true);
    } else if (userGuess > randomNumber) {
      setMessage('📈 Too high! Try again.');
    } else {
      setMessage('📉 Too low! Try again.');
    }

    setGuess('');
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <Container className="container">
      <Typography variant="h4" className="heading" gutterBottom>
        Guess the Number 🎲
      </Typography>
      <TextField
        label="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="number"
        fullWidth
        disabled={gameOver}
        className="inputField"
      />
      <Box mt={3}>
        <Button onClick={handleGuess} variant="contained" className="btn primary-btn" disabled={gameOver}>
          Submit Guess
        </Button>
        {gameOver && (
          <Button onClick={resetGame} variant="contained" className="btn secondary-btn" style={{ marginLeft: '10px' }}>
            Play Again
          </Button>
        )}
      </Box>
      <Typography className="message">{message}</Typography>
      <Typography className="attempts">Attempts: {attempts}</Typography>
    </Container>
  );
}

export default GameNumber;


