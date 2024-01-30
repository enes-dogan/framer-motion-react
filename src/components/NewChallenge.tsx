import { useContext, useRef, useState } from 'react';
import { NewChallengeProps, imageType, ChallengesCtxType } from '../types.ts';

import { ChallengesContext } from '../store/challenges-context.tsx';
import Modal from './Modal.tsx';
import images from '../assets/images.ts';

export default function NewChallenge({ onDone }: NewChallengeProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const deadline = useRef<HTMLInputElement>(null);

  const [selectedImage, setSelectedImage] = useState<imageType>();
  const { addChallenge } = useContext(ChallengesContext) as ChallengesCtxType;

  function handleSelectImage(image: imageType) {
    setSelectedImage(image);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const challenge = {
      title: title.current!.value,
      description: description.current!.value,
      deadline: deadline.current!.value,
      image: selectedImage!,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <ul id="new-challenge-images">
          {images.map(image => (
            <li
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image} />
            </li>
          ))}
        </ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
