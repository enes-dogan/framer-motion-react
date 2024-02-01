export type Status = 'active' | 'completed' | 'failed';

export interface Challenge {
  title: string;
  description: string;
  deadline: string;
  image: imageType;
  id?: string;
  status?: Status;
}

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

export interface TabProps extends childrenProp {
  isSelected: boolean;
  onSelect: () => void;
  badgeCaption: number;
}

export interface ChallengeTabsProps extends childrenProp {
  selectedType: string;
  onSelectType: (newType: Status) => void;
  challenges: {
    active: Challenge[];
    completed: Challenge[];
    failed: Challenge[];
  };
}

export interface ModalProps extends childrenProp {
  title: string;
  onClose: () => void;
}

export interface BadgeProps {
  caption: number;
}

export type childrenProp = { children: React.ReactNode };
