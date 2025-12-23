"use client";

import Link from "next/link";

export default function Disclaimer() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8'>
      <div className='max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 border-2 border-red-600'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-4 tracking-tight'>
            ⚠️ DISCLAIMER ⚠️
          </h1>
          <div className='w-24 h-1 bg-red-500 mx-auto mb-6'></div>
        </div>

        <div className='space-y-6 text-gray-200 text-lg sm:text-xl leading-relaxed'>
          <p className='text-center text-2xl sm:text-3xl font-bold text-yellow-400 mb-8'>
            ALL CHARACTERS AND EVENTS IN THIS BINGO GENERATOR—EVEN THOSE BASED ON REAL PEOPLE—ARE ENTIRELY FICTIONAL.
          </p>

          <div className='bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-500'>
            <p className='mb-4'>
              <strong className='text-yellow-400'>This is a parody/satire generator.</strong> The phrases generated are completely random combinations created for entertainment purposes only.
            </p>
            <p className='mb-4'>
              Any resemblance to actual events, living or dead persons, or real-world situations is purely coincidental and unintentional.
            </p>
            <p>
              <strong className='text-red-400'>None of the generated content represents factual claims or real events.</strong> This is a work of fiction and satire.
            </p>
          </div>

          <div className='bg-gray-900 rounded-lg p-6 border-l-4 border-blue-500'>
            <h2 className='text-xl font-bold text-blue-400 mb-3'>Legal Stuff:</h2>
            <ul className='list-disc list-inside space-y-2 ml-2'>
              <li>All names, events, and scenarios are randomly generated</li>
              <li>This generator does not make factual claims about any person or entity</li>
              <li>Generated content is satirical and fictional in nature</li>
              <li>Use at your own discretion and for entertainment purposes only</li>
              <li>Do not share generated content as factual information</li>
            </ul>
          </div>

          <div className='bg-gray-900 rounded-lg p-6 border-l-4 border-green-500'>
            <p className='text-center text-lg'>
              <strong className='text-green-400'>TL;DR:</strong> This is fake. It's all fake. Everything is randomly generated nonsense. Have fun, but don't take it seriously. 🎲
            </p>
          </div>
        </div>

        <div className='mt-10 text-center'>
          <Link
            href='/'
            className='inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
          >
            ← Back to Generator
          </Link>
        </div>
      </div>
    </main>
  );
}

