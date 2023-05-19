import { Controller, Get, Post, Request, Response } from '@nestjs/common';
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
  async login(@Request() req, @Response() res) {
    try {
      const accessToken = generateCookieData(4000);
      const cookies = JSON.stringify(req.cookies);

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

      return res.send(cookies);
    } catch (error) {
      throw error;
    }
  }

  @Post('cookies')
  async cookies(@Request() req, @Response() res) {
    const cookies = JSON.stringify(req.cookies);

    return res.send(cookies);
  }
}
