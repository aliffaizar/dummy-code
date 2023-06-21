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
    const newChallenge = this.challengeRepository.create(challenge);
    return await this.challengeRepository.save(newChallenge);
  }

  async getChallenge(id: number) {
    const challenge = await this.challengeRepository.findOne({
      where: { id },
    });
    if (!challenge) throw new NotFoundException('Challenge not found');
    return challenge;
  }

  async updateChallenge(id: number, challenge: any) {
    const challengeToUpdate = await this.getChallenge(id);
    return await this.challengeRepository.save({
      ...challengeToUpdate,
      ...challenge,
    });
  }

  async deleteChallenge(id: number) {
    const challengeToDelete = await this.getChallenge(id);
    return await this.challengeRepository.remove(challengeToDelete);
  }
  async findChallengeById(id: number) {
    return await this.challengeRepository.findOneByOrFail({ id });
  }
}
