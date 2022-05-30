import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.configService.get('NODE_ENV'));
    return this.appService.getHello();
  }
}
