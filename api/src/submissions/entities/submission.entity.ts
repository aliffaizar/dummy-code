import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Challenge } from 'src/challenges/entities/challenges.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  stdout: string;

  @Column({ nullable: true })
  stderr: string;

  @Column({ type: 'text' })
  status: string;

  @Column({ type: 'decimal' })
  time: number;

  @Column({ type: 'varchar', length: 64 })
  token: string;

  @Column({ type: 'int' })
  languageId: number;

  @ManyToOne(() => User, (user) => user.submissions)
  user: User;

  @ManyToOne(() => Challenge, (challenge) => challenge.submissions)
  challenge: string;
}
