import { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChallengesContext } from '../store/challenges-context.tsx';
import { ChallengesCtxType, Status } from '../types.ts';

import ChallengeItem from './ChallengeItem.tsx';
import ChallengeTabs from './ChallengeTabs.tsx';

export default function Challenges() {
  const { challenges } = useContext(ChallengesContext) as ChallengesCtxType;
  const [selectedType, setSelectedType] = useState('active');
  const [expanded, setExpanded] = useState<string | null>(null);

  function handleSelectType(newType: Status) {
    setSelectedType(newType);
  }

  function handleViewDetails(id: string) {
    setExpanded(prevId => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }

  const filteredChallenges = {
    active: challenges.filter(challenge => challenge.status === 'active'),
    completed: challenges.filter(challenge => challenge.status === 'completed'),
    failed: challenges.filter(challenge => challenge.status === 'failed'),
  };

  const displayedChallenges = filteredChallenges[selectedType as Status];

  return (
    <div id="challenges">
      <ChallengeTabs
        challenges={filteredChallenges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        <AnimatePresence mode="wait">
          {displayedChallenges.length > 0 && (
            <motion.ol
              key="list"
              exit={{ y: -30, opacity: 0 }}
              className="challenge-items"
            >
              <AnimatePresence>
                {displayedChallenges.map(challenge => (
                  <ChallengeItem
                    key={challenge.id}
                    challenge={challenge}
                    onViewDetails={() => handleViewDetails(challenge.id!)}
                    isExpanded={expanded === challenge.id}
                  />
                ))}
              </AnimatePresence>
            </motion.ol>
          )}
          {displayedChallenges.length === 0 && (
            <motion.p
              key="fallback"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              No challenges found.
            </motion.p>
          )}
        </AnimatePresence>
      </ChallengeTabs>
    </div>
  );
}
