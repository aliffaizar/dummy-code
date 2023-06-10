import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { AuthGuard } from './auth.guard';
import { RequestWithUser } from 'src/types';
import { GoogleGuard } from './auth-google.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() loginDto: LoginDto,
  ) {
    const user = await this.authService.login(loginDto);
    const payload = { email: user.email, id: user.id, name: user.name };
    const token = this.jwtService.sign(payload);

    response.cookie('access_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });

    user.password = undefined;
    return user;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
    user.password = undefined;
    return user;
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('access_token');
    return { message: 'success' };
  }

  @Get('me')
  @UseGuards(AuthGuard)
  async me(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email } = req?.user;
    const user = await this.authService.findOne(email);
    if (!user) {
      res.clearCookie('access_token');
      throw new UnauthorizedException(`user doesn't exist`);
    }
    return user;
  }

  @Get('google')
  @UseGuards(GoogleGuard)
  googleAuth() {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(GoogleGuard)
  async googleAuthRedirect(@Req() req: RequestWithUser, @Res() res: Response) {
    // handles the Google OAuth2 callback
    const { name, email, id } = req?.user;
    const token = this.jwtService.sign({ name, email, id });
    res.cookie('access_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
    return res.redirect('/');
  }
}
