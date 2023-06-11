import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
}
