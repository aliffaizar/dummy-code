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

  @Get(':id')
  challenge(@Param('id') id: number) {
    return this.challengesService.getChallenge(id);
  }

  @Patch(':id')
  updateChallenge(
    @Param('id') id: number,
    @Body() challenge: UpdateChallengeDto,
  ) {
    return this.challengesService.updateChallenge(id, challenge);
  }

  @Delete(':id')
  deleteChallenge(@Param('id') id: number) {
    return this.challengesService.deleteChallenge(id);
  }
}
