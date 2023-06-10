import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 100 })
  title: string;

  @Column({ nullable: false, length: 100 })
  slug: string;

  @Column({ nullable: false, length: 10, enum: ['easy', 'medium', 'hard'] })
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
}
