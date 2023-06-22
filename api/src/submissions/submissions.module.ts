import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SubmissionsService } from './submissions.service'
import { SubmissionsController } from './submissions.controller'
import { Submission } from './entities/submission.entity'
import { UserService } from 'src/user/user.service'
import { User } from 'src/user/entities/user.entity'
import { Challenge } from 'src/challenges/entities/challenges.entity'
import { ChallengesService } from 'src/challenges/challenges.service'

@Module({
  imports: [TypeOrmModule.forFeature([Submission, User, Challenge])],
  controllers: [SubmissionsController],
  providers: [SubmissionsService, UserService, ChallengesService],
})
export class SubmissionsModule {}
