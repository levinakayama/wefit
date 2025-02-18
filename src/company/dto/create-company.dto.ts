import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEmail, Length } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @Length(14, 18) 
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 14) 
  cpfResponsavel: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  celular: string;

  @IsString()
  @IsOptional()
  telefone?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  confirmarEmail: string;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @IsString()
  @IsNotEmpty()
  numero: string;

  @IsString()
  @IsOptional()
  complemento?: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsBoolean()
  @IsNotEmpty()
  termosAceitos: boolean;
}
