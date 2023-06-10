import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ChallengesService } from './challenges.service';
import { CreateChallengeDto, UpdateChallengeDto } from './dto';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Get()
  challenges() {
    return this.challengesService.getChallenges();
  }

  @Post()
  createChallenge(@Body() challenge: CreateChallengeDto) {
    return this.challengesService.createChallenge(challenge);
  }

  @Get(':slug')
  challenge(@Param() slug: string) {
    return this.challengesService.getChallenge(slug);
  }

  @Patch(':slug')
  updateChallenge(
    @Param() slug: string,
    @Body() challenge: UpdateChallengeDto,
  ) {
    return this.challengesService.updateChallenge(slug, challenge);
  }

  @Delete(':slug')
  deleteChallenge(@Param() slug: string) {
    return this.challengesService.deleteChallenge(slug);
  }
}
