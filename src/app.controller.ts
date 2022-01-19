import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller({ path: 'hello' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('1')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Uncomment if want to use HEADER versioning in swagger
  // @ApiHeader({
  //   name: 'Version-header',
  //   enum: ['1', '2'],
  //   description: 'Select a version',
  //   required: true,
  // })
  @Version('2')
  @Get()
  getHello2(): string {
    return this.appService.getHello2();
  }

  @Version(VERSION_NEUTRAL)
  @Get('neutral')
  getExample(): string {
    return 'This method is independent from a version';
  }
}
