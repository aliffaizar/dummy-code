import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { Challenge } from './entities/challenges.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Challenge])],
  controllers: [ChallengesController],
  providers: [ChallengesService],
})
export class ChallengesModule {}
