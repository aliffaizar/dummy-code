import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { compare, hash } from 'bcrypt'

import { User } from 'src/user/entities/user.entity'
import { GoogleDto, LoginDto, RegisterDto } from './dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    return await hash(password, 10)
  }

  async login(loginDto: LoginDto): Promise<User | null> {
    const { email, password } = loginDto
    const user = await this.userRepository.findOne({ where: { email } })
    if (!user) throw new UnauthorizedException('invalid credentials')

    const isValidPassword = await compare(password, user.password)
    if (!isValidPassword) throw new UnauthorizedException('invalid credentials')

    return user
  }

  async register(registerDto: RegisterDto): Promise<User> {
    const { email, password, name } = registerDto
    try {
      const hashPassword = await this.hashPassword(password)
      const user = await this.userRepository.save({
        password: hashPassword,
        email,
        name,
      })
      return user
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY')
        throw new ConflictException('email already exists')
    }
  }

  async findOrCreate(goolePayload: GoogleDto): Promise<User> {
    const { email, name, password, verified } = goolePayload
    const userInDb = await this.userRepository.findOne({
      where: { email },
    })
    if (userInDb) return userInDb

    const hashPassword = await this.hashPassword(password)
    const user = await this.userRepository.save({
      email,
      name,
      verified,
      password: hashPassword,
    })
    user.password = undefined
    return user
  }

  async findOne(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } })
    if (!user) return null
    user.password = undefined
    return user
  }
}
