import { BadgeProps } from '../types.ts';

export default function Badge({ caption }: BadgeProps) {
  return <span className="badge">{caption}</span>;
}
