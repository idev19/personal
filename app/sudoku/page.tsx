'use client';

import { useState } from 'react';
import styles from './sudoku.module.css';

const initialGrid = Array(9).fill(null).map(() => Array(9).fill(''));

export default function SudokuPage() {
  const [grid, setGrid] = useState(initialGrid);
  const [solving, setSolving] = useState(false);

  const handleCellChange = (row: number, col: number, value: string) => {
    if (value === '' || (value.match(/^[1-9]$/) && !solving)) {
      const newGrid = grid.map(row => [...row]);
      newGrid[row][col] = value;
      setGrid(newGrid);
    }
  };

  const isValid = (board: string[][], row: number, col: number, num: string) => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false;
    }

    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false;
    }

    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) return false;
      }
    }

    return true;
  };

  const solveSudoku = async () => {
    setSolving(true);
    const board = grid.map(row => [...row]);
    
    const solve = async (board: string[][]) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === '') {
            for (let num = 1; num <= 9; num++) {
              const numStr = num.toString();
              if (isValid(board, row, col, numStr)) {
                board[row][col] = numStr;
                setGrid([...board]);
                await new Promise(resolve => setTimeout(resolve, 50)); // Animation delay

                if (await solve(board)) {
                  return true;
                }
                board[row][col] = '';
                setGrid([...board]);
                await new Promise(resolve => setTimeout(resolve, 50)); // Animation delay
              }
            }
            return false;
          }
        }
      }
      return true;
    };

    await solve(board);
    setSolving(false);
  };

  const clearGrid = () => {
    setGrid(initialGrid);
    setSolving(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sudoku Solver</h1>
      <div className={styles.grid}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                value={cell}
                onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                className={styles.cell}
                maxLength={1}
                disabled={solving}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button 
          onClick={solveSudoku} 
          disabled={solving}
          className={styles.button}
        >
          {solving ? 'Solving...' : 'Solve'}
        </button>
        <button 
          onClick={clearGrid}
          disabled={solving}
          className={styles.button}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
