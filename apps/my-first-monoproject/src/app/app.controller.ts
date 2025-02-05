import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('protected')
  @UseGuards(AuthGuard('keycloak'))
  getProtectedData() {
    return { message: 'You have access to protected data' };
  }

}
