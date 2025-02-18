import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { NewCompany } from '../interfaces/company.interface';

@Entity({ name: 'companies' }) 
export class Company implements NewCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  cpfResponsavel: string;

  @Column()
  nome: string;

  @Column()
  celular: string;

  @Column({ nullable: true })
  telefone?: string;

  @Column()
  email: string;

  @Column()
  confirmarEmail: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column({ nullable: true })
  complemento?: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  estado: string;

  @Column({ default: false })
  termosAceitos: boolean;
}
