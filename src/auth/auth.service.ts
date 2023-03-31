import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'User has signed up' };
  }

  signin() {
    return { msg: 'User has signed in' };
  }
}
