import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { generateCookieData } from './utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('login')
  async login(
    @Response() res,
  ) {
    try {
      const accessToken = generateCookieData(4000);
      const user = { username: 'USER' };

      res.cookie('accessToken', accessToken, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      });

      res.cookie('accessToken.1', accessToken, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      });

      res.cookie('accessToken.2', accessToken, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      });

      res.cookie('accessToken.3', accessToken, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      });

      res.cookie('accessToken.4', accessToken, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      });

      return res.send(user);
    } catch (error) {
      throw error;
    }
  }
}
