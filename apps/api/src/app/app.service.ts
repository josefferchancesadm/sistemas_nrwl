import { Injectable } from '@nestjs/common';
import { Message } from '@sistemas/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'bem vindo a api!' };
  }
}
