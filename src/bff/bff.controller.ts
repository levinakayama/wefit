import { Controller, Get } from '@nestjs/common';
import { UserService } from '../users/users.service';

@Controller('bff')
export class BffController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async getUsers() {
    const users = await this.userService.getUsers();
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }
}
