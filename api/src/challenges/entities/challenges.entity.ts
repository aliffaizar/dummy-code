import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Submission } from 'src/submissions/entities/submission.entity';
import { ChallengeLanguage } from 'src/challenge-languages/entities/challenge-languages.entity';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 100 })
  title: string;

  @Column({ nullable: false, length: 100 })
  slug: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['easy', 'medium', 'hard'],
  })
  difficulty: 'easy' | 'medium' | 'hard';

  @Column({ type: 'text', nullable: false })
  instructions: string;

  @Column({ type: 'varchar', nullable: false })
  testCases: string;

  @Column({ type: 'varchar', nullable: false })
  expectedResults: string;

  @Column({ type: 'text', nullable: false })
  starterCode: string;

  @Column({ type: 'text', nullable: false })
  validator: string;

  @OneToMany(() => Submission, (submission) => submission.challenge)
  submissions: Submission[];

  @OneToMany(
    () => ChallengeLanguage,
    (challengeLanguage) => challengeLanguage.challenge,
  )
  challengeLanguages: ChallengeLanguage[];
}
