import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const { access_token } = request.cookies
    if (!access_token) return false
    try {
      const { name, email, id } = await this.jwtService.verifyAsync(
        access_token,
      )
      request.user = { name, email, id }
      return true
    } catch {
      throw new ForbiddenException()
    }
  }
}
