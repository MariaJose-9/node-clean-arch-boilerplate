import { UserEntity } from "../entities/user.entity";

export interface AuthResult {
  data: UserEntity;
  token: unknown;
  refreshToken: unknown;
}

interface loginData {
  email: string;
  password: string;
}

// src/domain/repositories/AuthRepository.ts
export interface IAuthRepository {
  register(data: UserEntity): Promise<AuthResult>;

  login(data: loginData): Promise<AuthResult>;
  generarTokens(data: { [key: string]: any }): Promise<{
    accessToken: string | null;
    refreshToken: string | null;
  }>;

  refreshToken(token: string): Promise<{ token: string }>;

  validateEmail(email: string): Promise<boolean>;

  encryptPassword(password: string): Promise<string>;

  comparePasswords(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}