import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Challenge } from './entities/challenges.entity';

@Injectable()
export class ChallengesService {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}

  async getChallenges() {
    return await this.challengeRepository.find();
  }

  async createChallenge(challenge: any) {
    return await this.challengeRepository.save(challenge);
  }

  async getChallenge(slug: string) {
    const challenge = await this.challengeRepository.findOne({
      where: { slug },
    });
    if (!challenge) throw new NotFoundException('Challenge not found');
    return challenge;
  }

  async updateChallenge(slug: string, challenge: any) {
    const challengeToUpdate = await this.getChallenge(slug);
    return await this.challengeRepository.save({
      ...challengeToUpdate,
      ...challenge,
    });
  }

  async deleteChallenge(slug: string) {
    const challengeToDelete = await this.getChallenge(slug);
    return await this.challengeRepository.remove(challengeToDelete);
  }
  async findChallengeById(id: string) {
    return await this.challengeRepository.findOneByOrFail({ id });
  }
}
