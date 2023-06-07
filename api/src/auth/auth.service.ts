import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/user/entities/user.entity';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async login(loginDto: LoginDto): Promise<User | null> {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('invalid credentials');

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword)
      throw new UnauthorizedException('invalid credentials');

    return user;
  }

  async register(registerDto: RegisterDto): Promise<User> {
    const { email, password, name } = registerDto;
    const hashPassword = await this.hashPassword(password);
    const user = await this.userRepository.save({
      password: hashPassword,
      email,
      name,
    });
    return user;
  }
}
