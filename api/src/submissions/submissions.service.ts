import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateSubmissionDto, UpdateSubmissionDto } from './dto'
import { Submission } from './entities/submission.entity'
import { UserService } from 'src/user/user.service'
import { ChallengesService } from 'src/challenges/challenges.service'

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submission)
    private submissionsRepository: Repository<Submission>,
    private usersService: UserService,
    private challengesService: ChallengesService,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto) {
    const user = await this.usersService.findById(createSubmissionDto.userId)
    if (!user) {
      throw new NotFoundException('User not found')
    }
    const challengeId = createSubmissionDto.challengeId
    const challenge = await this.challengesService.findChallengeById(
      challengeId,
    )
    if (!challenge) {
      throw new NotFoundException('Challenge not found')
    }
    return this.submissionsRepository.save({
      ...createSubmissionDto,
      challengeId: challenge.id,
      user,
    })
  }

  findAll() {
    return `This action returns all submissions`
  }

  findOne(id: number) {
    return `This action returns a #${id} submission`
  }

  update(id: number, updateSubmissionDto: UpdateSubmissionDto) {
    return `This action updates a #${id} submission`
  }

  remove(id: number) {
    return `This action removes a #${id} submission`
  }
}
