import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ChallengeLanguage } from './entities/challenge-languages.entity'
import { ChallengeLanguagesController } from './challenge-languages.controller'
import { ChallengeLanguagesService } from './challenge-languages.service'
import { Challenge } from 'src/challenges/entities/challenges.entity'
import { ChallengesService } from 'src/challenges/challenges.service'

@Module({
  imports: [TypeOrmModule.forFeature([ChallengeLanguage, Challenge])],
  controllers: [ChallengeLanguagesController],
  providers: [ChallengeLanguagesService, ChallengesService],
})
export class ChallengeLanguagesModule {}
