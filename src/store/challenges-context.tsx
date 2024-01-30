import { createContext, useState } from 'react';
import {
  ChallengesCtxType,
  Challenge,
  childrenProp,
  Status,
} from '../types.ts';

export const ChallengesContext = createContext<ChallengesCtxType | undefined>(
  undefined
);

export default function ChallengesContextProvider({ children }: childrenProp) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  function addChallenge(challenge: Challenge) {
    setChallenges(prevChallenges => [
      { ...challenge, id: Math.random().toString(), status: 'active' },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId: string) {
    setChallenges(prevChallenges =>
      prevChallenges.filter(challenge => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId: string, newStatus: Status) {
    setChallenges(prevChallenges =>
      prevChallenges.map(challenge => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext: ChallengesCtxType = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
