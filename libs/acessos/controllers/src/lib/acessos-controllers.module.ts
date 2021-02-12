import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { RolesService } from './roles/roles.service';
import { UserrolesService } from './userroles/userroles.service';
import { RolesController } from './roles/roles.controller';
import { UserrolesController } from './userroles/userroles.controller';

@Module({
  controllers: [UsersController, RolesController, UserrolesController],
  providers: [UsersService, RolesService, UserrolesService],
  exports: [],
})
export class AcessosControllersModule {}
