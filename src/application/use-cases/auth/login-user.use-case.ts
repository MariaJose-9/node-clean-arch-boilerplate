import { IAuthRepository, UserEntity } from "../../../domain";
import { LoginUserDto } from "../../dtos/auth/login-user.dto";

export class LoginUserUseCase {
    constructor(private readonly authRepository: IAuthRepository) { }

    async execute(
        data: LoginUserDto
    ): Promise<{ data: UserEntity; token: unknown; refreshToken: unknown }> {
        return await this.authRepository.login({ email: data.email, password: data.password });
    }
}