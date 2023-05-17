import { Injectable } from '@nestjs/common';
import * as showdown from 'showdown';
import { readFile } from 'fs/promises';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const rawMarkdown = await readFile('./README.md', 'utf-8');
    const markdown = rawMarkdown.replace(/http:\/\/localhost:3000\//ig, 'https://whispering-brook-89076.herokuapp.com/');
    const converter = new showdown.Converter();

    return converter.makeHtml(markdown);
  }
}
