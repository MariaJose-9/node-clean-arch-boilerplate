import { IAuthRepository } from "../../../domain";

export class RefreshTokenUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(token: string): Promise<{ token: string }> {
    return await this.authRepository.refreshToken(token);
  }
}