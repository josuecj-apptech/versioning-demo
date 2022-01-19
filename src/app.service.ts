import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World version 1!';
  }
  getHello2(): string {
    return 'Hello World version 2!';
  }
}
