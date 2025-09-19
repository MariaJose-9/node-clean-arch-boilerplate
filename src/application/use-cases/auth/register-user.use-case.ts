import { AuthResult, IAuthRepository, UserEntity } from "../../../domain";
import { RegisterUserDto } from "../../dtos/auth/register-user.dto";

export class RegisterUserUseCase {
    constructor(private readonly authRepository: IAuthRepository) { }

    async execute(data: RegisterUserDto): Promise<AuthResult> {
        const dataRegister = new UserEntity(2, "string", "string", "string", 4, true, new Date(), new Date());
        return await this.authRepository.register(dataRegister);
    }
}