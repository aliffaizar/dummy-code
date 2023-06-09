import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Challenge } from 'src/challenges/entities/challenges.entity'
import { Submission } from 'src/submissions/entities/submission.entity'

@Entity()
export class ChallengeLanguage {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'varchar', length: 32 })
  language: string

  @Column({ nullable: false, type: 'varchar', length: 255 })
  testCases: string

  @Column({ nullable: false, type: 'varchar', length: 255 })
  expectedResults: string

  @Column({ nullable: false, type: 'text' })
  starterCode: string

  @Column({ nullable: false, type: 'text' })
  validator: string

  @ManyToOne(() => Challenge, (challenge) => challenge.challengeLanguages)
  challenge: Challenge

  @OneToMany(() => Submission, (submission) => submission.challengeLanguage)
  submissions: Submission[]
}
