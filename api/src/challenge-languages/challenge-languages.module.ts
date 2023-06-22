import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ChallengeLanguage } from './entities/challenge-languages.entity'
import { ChallengeLanguagesController } from './challenge-languages.controller'
import { ChallengeLanguagesService } from './challenge-languages.service'

@Module({
  imports: [TypeOrmModule.forFeature([ChallengeLanguage])],
  controllers: [ChallengeLanguagesController],
  providers: [ChallengeLanguagesService],
})
export class ChallengeLanguagesModule {}
