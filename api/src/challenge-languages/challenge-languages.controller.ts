import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { ChallengeLanguagesService } from './challenge-languages.service'
import { CreateChallengeLanguageDto, UpdateChallengeLanguageDto } from './dto'

@Controller('challenge-languages')
export class ChallengeLanguagesController {
  constructor(private challengeLanguagesService: ChallengeLanguagesService) {}
  @Get()
  async getChallengeLanguages() {
    return await this.challengeLanguagesService.getChallengeLanguages()
  }

  @Post()
  async createChallengeLanguage(@Body() data: CreateChallengeLanguageDto) {
    return await this.challengeLanguagesService.createChallengeLanguage(data)
  }

  @Get(':id')
  async getChallengeLanguage(@Param('id') id: number) {
    return await this.challengeLanguagesService.getChellengeLanguage(id)
  }

  @Patch(':id')
  async updateChallengeLanguage(
    @Param('id') id: number,
    @Body() data: UpdateChallengeLanguageDto,
  ) {
    return await this.challengeLanguagesService.updateChallengeLanguage(
      id,
      data,
    )
  }

  @Delete(':id')
  async deleteChallengeLanguage(@Param('id') id: number) {
    return await this.challengeLanguagesService.deleteChallengeLanguage(id)
  }
}
