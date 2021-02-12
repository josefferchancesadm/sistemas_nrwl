import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

//import { Users, Roles, UserRoles } from '@sistemas/acessos-entities'
import { ACESSOS_ENTITIES } from '@sistemas/acessos-entities';
import { AcessosControllersModule } from '@sistemas/acessos-controllers';

import { Clients } from '@sistemas/clientes-entities'
import { ClientesControllersModule } from '@sistemas/clientes-controllers';

import { Adresses } from '@sistemas/enderecos-entities';
import { EnderecosControllersModule } from '@sistemas/enderecos-controllers';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'sisprogserver',
      port: 1433,
      username: 'sa',
      password: 'sisprog',
      database: 'db_teste',
      "options": {
          "encrypt": true,
          "enableArithAbort": true
      },
      entities: [
                 //Users,
                 //Roles,
                 //UserRoles,
                 ...ACESSOS_ENTITIES,
                 Clients,
                 Adresses],
      //synchronize: true,
    }),
    AcessosControllersModule,
    ClientesControllersModule,
    EnderecosControllersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
