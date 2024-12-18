'use client';
import { useState, useCallback } from 'react';
import SudokuBoard from '../components/sudoku-board';
import SudokuControls from '../components/sudoku-controls';

export default function SudokuPage() {
  const [board, setBoard] = useState<number[][]>(Array(9).fill(null).map(() => Array(9).fill(0)));
  const [solving, setSolving] = useState(false);

  // 检查数字在特定位置是否有效
  const isValid = (num: number, row: number, col: number, board: number[][]) => {
    // 检查行
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num && x !== col) return false;
    }

    // 检查列
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num && x !== row) return false;
    }

    // 检查3x3方格
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num && 
            (boxRow + i !== row || boxCol + j !== col)) {
          return false;
        }
      }
    }

    return true;
  };

  // 找到下一个空位置
  const findEmpty = (board: number[][]) => {
    let minPossibilities = 10;
    let bestCell = null;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          // 计算这个位置可能的数字数量
          let possibilities = 0;
          for (let num = 1; num <= 9; num++) {
            if (isValid(num, i, j, board)) {
              possibilities++;
            }
          }
          if (possibilities < minPossibilities) {
            minPossibilities = possibilities;
            bestCell = [i, j];
            if (possibilities === 1) return bestCell; // 找到最优解，立即返回
          }
        }
      }
    }
    return bestCell;
  };

  // 解决数独的主函数
  const solveSudoku = async (board: number[][]) => {
    const empty = findEmpty(board);
    if (!empty) return true;

    const [row, col] = empty;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // 优化：对每个位置可能的数字进行排序
    numbers.sort(() => Math.random() - 0.5); // 随机打乱，避免陷入局部最优

    for (const num of numbers) {
      if (isValid(num, row, col, board)) {
        board[row][col] = num;
        
        // 使用 Promise 和 setTimeout 让界面能够更新
        await new Promise(resolve => setTimeout(resolve, 10));
        setBoard([...board]);

        if (await solveSudoku(board)) {
          return true;
        }

        board[row][col] = 0;
      }
    }

    return false;
  };

  // 处理求解按钮点击
  const handleSolve = useCallback(async () => {
    setSolving(true);
    const boardCopy = board.map(row => [...row]);
    await solveSudoku(boardCopy);
    setBoard(boardCopy);
    setSolving(false);
  }, [board]);

  // 处理清除按钮点击
  const handleClear = useCallback(() => {
    setBoard(Array(9).fill(null).map(() => Array(9).fill(0)));
  }, []);

  // 处理单元格值变化
  const handleCellChange = useCallback((row: number, col: number, value: number) => {
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = value;
    setBoard(newBoard);
  }, [board]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">数独求解器</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <SudokuBoard 
          board={board} 
          onCellChange={handleCellChange}
          disabled={solving}
        />
        <SudokuControls 
          onSolve={handleSolve}
          onClear={handleClear}
          disabled={solving}
        />
      </div>
    </div>
  );
}
