import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Submission } from 'src/submissions/entities/submission.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ default: false })
  verified: boolean;

  @Column({
    nullable: false,
    default: 'user',
    type: 'enum',
    enum: ['user', 'admin'],
  })
  role: 'user' | 'admin';

  @OneToMany(() => Submission, (submission) => submission.user)
  submissions: Submission[];
}
