import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'

import { SubmissionsService } from './submissions.service'
import { CreateSubmissionDto, UpdateSubmissionDto } from './dto'

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return this.submissionsService.create(createSubmissionDto)
  }

  @Get()
  findAll() {
    return this.submissionsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.submissionsService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSubmissionDto: UpdateSubmissionDto,
  ) {
    return this.submissionsService.update(id, updateSubmissionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.submissionsService.remove(id)
  }
}
