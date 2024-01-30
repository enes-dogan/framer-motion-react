import Header from '../components/Header.tsx';
import Challenges from '../components/Challenges.tsx';
import ChallengesContextProvider from '../store/challenges-context.ts';

export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
