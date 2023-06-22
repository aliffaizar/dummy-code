import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ChallengeLanguage } from './entities/challenge-languages.entity'
import { CreateChallengeLanguageDto, UpdateChallengeLanguageDto } from './dto'
import { ChallengesService } from 'src/challenges/challenges.service'

@Injectable()
export class ChallengeLanguagesService {
  constructor(
    @InjectRepository(ChallengeLanguage)
    private challengeLanguage: Repository<ChallengeLanguage>,
    private challengeService: ChallengesService,
  ) {}

  async getChallengeLanguages() {
    return await this.challengeLanguage.find()
  }

  async createChallengeLanguage(data: CreateChallengeLanguageDto) {
    const { challengeId } = data
    const challenge = await this.challengeService.getChallenge(challengeId)
    return await this.challengeLanguage.save({ ...data, challenge })
  }

  async getChellengeLanguage(id: number) {
    try {
      const data = await this.challengeLanguage.findOneOrFail({ where: { id } })
      return data
    } catch (error) {
      throw new NotFoundException('Challenge language not found')
    }
  }

  async updateChallengeLanguage(id: number, data: UpdateChallengeLanguageDto) {
    const challenge = await this.getChellengeLanguage(id)
    return await this.challengeLanguage.save({ ...challenge, ...data })
  }

  async deleteChallengeLanguage(id: number) {
    const challenge = await this.getChellengeLanguage(id)
    return await this.challengeLanguage.remove(challenge)
  }
}
