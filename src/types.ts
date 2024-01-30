export type childrenProp = { children: React.ReactNode };

export interface Challenge {
  title: string;
  description: string;
  deadline: string;
  image: imageType;
  id?: string;
  status?: Status;
}
export type Status = 'active' | 'completed' | 'failed';

export interface imageType {
  src: string;
  alt: string;
}

export interface ChallengesCtxType {
  challenges: Challenge[];
  addChallenge: (challenge: Challenge) => void;
  deleteChallenge: (challengeId: string) => void;
  updateChallengeStatus: (challengeId: string, newStatus: Status) => void;
}

export interface ChallengeItemProps {
  challenge: Challenge;
  onViewDetails: () => void;
  isExpanded: boolean;
}

export interface NewChallengeProps {
  onDone: () => void;
}

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export interface BadgeProps {
  caption: number;
}

export interface TabProps {
  isSelected: boolean;
  onSelect: () => void;
  badgeCaption: number;
  children: string;
}
export interface ChallengeTabsProps {
  selectedType: string;
  onSelectType: (newType: Status) => void;
  challenges: {
    active: Challenge[];
    completed: Challenge[];
    failed: Challenge[];
  };
  children: React.ReactNode;
}
