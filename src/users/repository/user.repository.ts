import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    return this.repository.save(user);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async updateUser(id: number, data: Partial<User>): Promise<void> {
    await this.repository.update(id, data);
  }

  async deleteUser(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
