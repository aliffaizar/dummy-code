import { Controller, Get, Post } from '@nestjs/common';

import { ChallengeLanguagesService } from './challenge-languages.service';

@Controller('challenge-languages')
export class ChallengeLanguagesController {
  constructor(private challengeLanguagesService: ChallengeLanguagesService) {}
  @Get()
  async getChallengeLanguages() {
    return await this.challengeLanguagesService.getChallengeLanguages();
  }

  @Post()
  async createChallengeLanguage() {
    return 'createChallengeLanguage';
  }
}
