import { Module } from '@nestjs/common';
import { AdressesService } from './adresses/adresses.service';
import { AdressesController } from './adresses/adresses.controller';

@Module({
  controllers: [AdressesController],
  providers: [AdressesService],
  exports: [],
})
export class EnderecosControllersModule {}
