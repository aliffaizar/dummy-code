import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengeLanguage } from './entities/challenge-languages.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChallengeLanguagesService {
  constructor(
    @InjectRepository(ChallengeLanguage)
    private challengeLanguage: Repository<ChallengeLanguage>,
  ) {}

  async getChallengeLanguages() {
    return await this.challengeLanguage.find();
  }
}
