import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const users = require('../users.json');

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signinLocal(dto: AuthDto) {
    // retrive user
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('Incorect Credentials');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Incorect Credentials');

    return user;
  }

  // signupLocal(dto: AuthDto) {}
}
