"use client";

import { forwardRef } from "react";

interface BingoGridProps {
  squares: string[];
}

const BingoGrid = forwardRef<HTMLDivElement, BingoGridProps>(
  ({ squares }, ref) => {
    // Create a 5x5 grid with the center square as "Free"
    const createGrid = () => {
      const grid = [];
      let squareIndex = 0;

      for (let i = 0; i < 25; i++) {
        if (i === 12) {
          // Center square (index 12 in a 5x5 grid)
          grid.push(
            <div
              key={i}
              className='bg-red-600 border-2 border-gray-600 flex items-center justify-center p-2 text-center text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-200 hover:bg-red-500 h-full'
            >
              <span className='break-words'>FREE</span>
            </div>
          );
        } else {
          grid.push(
            <div
              key={i}
              className='bg-gray-800 border-2 border-gray-600 flex items-center justify-center p-2 text-center text-gray-100 text-xs sm:text-sm md:text-base transition-all duration-200 hover:bg-gray-700 cursor-pointer h-full'
            >
              <span className='break-words leading-tight'>
                {squares[squareIndex] || ""}
              </span>
            </div>
          );
          squareIndex++;
        }
      }
      return grid;
    };

    return (
      <div className='w-full max-w-2xl mx-auto p-4'>
        <div
          ref={ref}
          className='grid grid-cols-5 gap-1 sm:gap-2 md:gap-3 bg-gray-900 p-2 sm:p-4 rounded-lg shadow-2xl grid-auto-rows-fr'
        >
          {createGrid()}
        </div>
        {/* Title for the saved image */}
        <div className='text-center mt-4'>
          <h2 className='text-2xl font-bold text-white'>2026 Bingo Card</h2>
        </div>
      </div>
    );
  }
);

BingoGrid.displayName = "BingoGrid";

export default BingoGrid;
