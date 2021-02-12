import { Controller, Get, Res, HttpException } from '@nestjs/common';
import { Response } from 'express';

import { UsersService } from './users.service';

@Controller('acessos/users')
export class UsersController {

  constructor (private readonly entityService: UsersService){
  }

  @Get('findAll')
  public async findAll(@Res() res: Response) {
    //this.entityService.getMensagem()
    try {
      res.json(this.entityService.getMensagem()).end();
    } catch (error) {
      throw new HttpException(error, 401);
    }
  }

}
