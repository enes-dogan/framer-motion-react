import { useContext, useRef, useState } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';
import { ChallengesContext } from '../store/challenges-context.tsx';
import { NewChallengeProps, imageType, ChallengesCtxType } from '../types.ts';

import Modal from './Modal.tsx';
import images from '../assets/images.ts';

export default function NewChallenge({ onDone }: NewChallengeProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const deadline = useRef<HTMLInputElement>(null);

  const [scope, animate] = useAnimate();

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
      animate(
        'input, textarea',
        { x: [-10, 0, 10, 0] },
        { type: 'spring', duration: 0.2, delay: stagger(0.05) }
      );
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
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

        <motion.ul
          id="new-challenge-images"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {images.map(image => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 1.3, 1] },
              }}
              exit={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' }}
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

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
