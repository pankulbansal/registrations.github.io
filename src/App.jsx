import { useState } from 'react'

function App() {
  // We use this state to switch between the landing page and the form
  const [isStarted, setIsStarted] = useState(false);

  // If the user hasn't clicked start, show the Landing Page
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl text-center space-y-8">
          
          {/* Foundation Header */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest text-stone-500 uppercase">
              Krishna Narayan Foundation
            </h2>
            <p className="text-stone-400 italic font-serif text-sm">
              Shaping Purpose-Driven Minds for a Better Tomorrow
            </p>
          </div>

          {/* Main Welcome */}
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800">
            Welcome to Deorhi
          </h1>
          
          <p className="text-stone-600 max-w-lg mx-auto leading-relaxed text-lg">
            Please register your group's details so we can prepare for your visit and ensure a seamless experiential stay.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={() => setIsStarted(true)}
            className="mt-8 px-8 py-3 bg-stone-800 text-stone-50 rounded-md shadow hover:bg-stone-700 transition duration-300 font-medium"
          >
            Begin Registration
          </button>

        </div>
      </div>
    )
  }

  // Once they click start, we will show the form (Placeholder for now)
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center py-12 p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-sm border border-stone-200">
        <h2 className="text-2xl font-serif text-stone-800 mb-6">Traveler Details</h2>
        <p className="text-stone-600">The 1-4 traveler form will go here.</p>
        
        <button 
          onClick={() => setIsStarted(false)}
          className="mt-6 text-sm text-stone-500 hover:text-stone-800 underline"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default App