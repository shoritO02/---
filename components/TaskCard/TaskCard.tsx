'use client';

import { useState } from 'react';
import styles from './TaskCard.module.css';

type Props = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export default function TaskCard({ id, userId, title, completed }: Props) {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div className={styles.card} onClick={() => setIsCompleted(!isCompleted)}>
      <div className={styles.left}>
        <div className={`${styles.circle} ${isCompleted ? styles.circleCompleted : ''}`}>
          {isCompleted && '✓'}
        </div>
        <div>
          <p className={`${styles.title} ${isCompleted ? styles.titleCompleted : ''}`}>{title}</p>
          <p className={styles.meta}>ID: {id} • User: {userId}</p>
        </div>
      </div>
      <span className={`${styles.badge} ${isCompleted ? styles.badgeCompleted : ''}`}>
        {isCompleted ? 'Completed' : 'In Progress'}
      </span>
    </div>
  );
}