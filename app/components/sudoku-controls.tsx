interface SudokuControlsProps {
  onSolve: () => void;
  onClear: () => void;
  disabled: boolean;
}

const SudokuControls = ({ onSolve, onClear, disabled }: SudokuControlsProps) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={onSolve}
        disabled={disabled}
        className={`
          px-6 py-2 rounded-lg font-semibold text-white
          ${disabled 
            ? 'bg-blue-300 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'}
          transition-colors duration-150
        `}
      >
        {disabled ? '求解中...' : '求解'}
      </button>
      <button
        onClick={onClear}
        disabled={disabled}
        className={`
          px-6 py-2 rounded-lg font-semibold text-white
          ${disabled 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700'}
          transition-colors duration-150
        `}
      >
        清空
      </button>
    </div>
  );
};

export default SudokuControls; 