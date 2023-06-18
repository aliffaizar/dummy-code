import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSubmissionDto, UpdateSubmissionDto } from './dto';
import { Submission } from './entities/submission.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submission)
    private submissionsRepository: Repository<Submission>,
    private usersService: UserService,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto) {
    const user = await this.usersService.findById(createSubmissionDto.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.submissionsRepository.save({
      ...createSubmissionDto,
      user,
    });
  }

  findAll() {
    return `This action returns all submissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} submission`;
  }

  update(id: number, updateSubmissionDto: UpdateSubmissionDto) {
    return `This action updates a #${id} submission`;
  }

  remove(id: number) {
    return `This action removes a #${id} submission`;
  }
}
