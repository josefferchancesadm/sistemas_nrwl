import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  getMensagem() : string {
    return 'Testes controle users.... aqui';
  }

}
