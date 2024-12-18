interface SudokuBoardProps {
  board: number[][];
  onCellChange: (row: number, col: number, value: number) => void;
  disabled: boolean;
}

const SudokuBoard = ({ board, onCellChange, disabled }: SudokuBoardProps) => {
  const handleChange = (row: number, col: number, value: string) => {
    const numValue = value === '' ? 0 : parseInt(value);
    if ((value === '' || (value.match(/^[1-9]$/))) && !disabled) {
      onCellChange(row, col, numValue);
    }
  };

  return (
    <div className="grid grid-cols-9 gap-0 mb-4 border-2 border-gray-800">
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            value={cell === 0 ? '' : cell.toString()}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            className={`
              w-12 h-12 text-center text-xl font-semibold
              border border-gray-300
              ${disabled ? 'bg-gray-100' : 'bg-white'}
              ${(rowIndex + 1) % 3 === 0 ? 'border-b-2 border-b-gray-800' : ''}
              ${(colIndex + 1) % 3 === 0 ? 'border-r-2 border-r-gray-800' : ''}
              focus:outline-none focus:bg-blue-50
              transition-colors duration-150
            `}
            maxLength={1}
            disabled={disabled}
          />
        ))
      ))}
    </div>
  );
};

export default SudokuBoard; 