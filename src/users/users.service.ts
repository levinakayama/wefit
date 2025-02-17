import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(data);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async updateUser(id: number, data: UpdateUserDto): Promise<void> {
    await this.userRepository.updateUser(id, data);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
