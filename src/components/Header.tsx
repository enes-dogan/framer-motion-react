import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import NewChallenge from './NewChallenge.tsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState(false);

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      <AnimatePresence>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>
      <header id="main-header">
        <h1>Your Challenges</h1>
        <button onClick={handleStartAddNewChallenge} className="button">
          Add Challenge
        </button>
      </header>
    </>
  );
}
