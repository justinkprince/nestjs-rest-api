import { Injectable } from '@nestjs/common';
import * as showdown from 'showdown';
import { readFile } from 'fs/promises';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const markdown = await readFile('./README.md', 'utf-8');
    const converter = new showdown.Converter();

    return converter.makeHtml(markdown);
  }
}
