"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import BingoGrid from "./components/BingoGrid";

export default function Home() {
  const [bingoSquares, setBingoSquares] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const bingoGridRef = useRef<HTMLDivElement>(null);

  const generateBingo = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/bingo");
      const data = await response.json();

      if (data.response && Array.isArray(data.response)) {
        setBingoSquares(data.response);
        setShowGrid(true);
      }
    } catch (error) {
      console.error("Error generating bingo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetBingo = () => {
    setShowGrid(false);
    setBingoSquares([]);
  };

  const saveBingoAsImage = async () => {
    if (!bingoGridRef.current) return;

    setIsSaving(true);
    try {
      // Dynamically import html2canvas to avoid SSR issues
      const html2canvas = (await import("html2canvas")).default;

      // Create canvas from the bingo grid element
      const canvas = await html2canvas(bingoGridRef.current, {
        backgroundColor: "#111827", // gray-900 background
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true,
      });

      // Convert canvas to blob
      canvas.toBlob((blob) => {
        if (blob) {
          // Create download link
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `2025-bingo-card-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, "image/png");
    } catch (error) {
      console.error("Error saving bingo card:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8'>
      <div className='text-center mb-8 sm:mb-12'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight'>
          2025 Bingo Generator
        </h1>
        <p className='text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed'>
          Create your personalized bingo card for the new year!
        </p>
        <Link
          href='/disclaimer'
          className='inline-block mt-4 text-sm text-gray-400 hover:text-yellow-400 underline transition-colors'
        >
          ⚠️ Disclaimer
        </Link>
      </div>

      {!showGrid ? (
        <div className='flex flex-col items-center space-y-6'>
          <button
            onClick={generateBingo}
            disabled={isLoading}
            className='px-8 py-4 sm:px-12 sm:py-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-lg sm:text-xl md:text-2xl rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
          >
            {isLoading ? (
              <div className='flex items-center space-x-3'>
                <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-white'></div>
                <span>Generating...</span>
              </div>
            ) : (
              "Generate Bingo"
            )}
          </button>
        </div>
      ) : (
        <div className='w-full flex flex-col items-center space-y-6'>
          <BingoGrid ref={bingoGridRef} squares={bingoSquares} />
          <div className='flex flex-col sm:flex-row gap-4'>
            <button
              onClick={generateBingo}
              disabled={isLoading}
              className='px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold text-lg rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50'
            >
              {isLoading ? "Generating..." : "Generate New Card"}
            </button>
            <button
              onClick={saveBingoAsImage}
              disabled={isSaving}
              className='px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold text-lg rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50'
            >
              {isSaving ? (
                <div className='flex items-center space-x-2'>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                  <span>Saving...</span>
                </div>
              ) : (
                "Save Bingo"
              )}
            </button>
            <button
              onClick={resetBingo}
              className='px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold text-lg rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50'
            >
              Back to Start
            </button>
          </div>
        </div>
      )}
      
      <footer className='mt-12 text-center'>
        <Link
          href='/disclaimer'
          className='text-sm text-gray-500 hover:text-yellow-400 underline transition-colors'
        >
          Disclaimer - All content is fictional and randomly generated
        </Link>
      </footer>
    </main>
  );
}
