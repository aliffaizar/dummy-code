import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Submission } from 'src/submissions/entities/submission.entity';
import { ChallengeLanguage } from 'src/challenge-languages/entities/challenge-languages.entity';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  title: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['easy', 'medium', 'hard'],
  })
  difficulty: 'easy' | 'medium' | 'hard';

  @Column({ type: 'text', nullable: false })
  instructions: string;

  @OneToMany(() => Submission, (submission) => submission.challenge)
  submissions: Submission[];

  @OneToMany(
    () => ChallengeLanguage,
    (challengeLanguage) => challengeLanguage.challenge,
  )
  challengeLanguages: ChallengeLanguage[];
}
