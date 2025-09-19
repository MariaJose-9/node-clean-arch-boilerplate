import { Request, Response } from "express";
import {
  LoginUserDto,
  RegisterUserDto,
  RegisterUserUseCase,
} from "../../application";
import { IAuthRepository } from "../../domain";
import { HandleError } from "../shared/handle.error";
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.use-case";
import { RefreshTokenUseCase } from "../../application/use-cases/auth/refresh-token.use-case";

export class AuthController {
  //*DI
  constructor(private readonly authRepository: IAuthRepository) {}

  loginUser = (req: Request, res: Response) => {
    const [error, dto] = LoginUserDto.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    new LoginUserUseCase(this.authRepository)
      .execute(dto!)
      .then((data) =>
        res.json({
          ...data,
          data: data.data.toResponse(),
          message: "User logueado!",
        })
      )
      .catch((error) => HandleError.handle(error, res));
  };

  registerUser = (req: Request, res: Response) => {
    const [error, dto] = RegisterUserDto.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    new RegisterUserUseCase(this.authRepository)
      .execute(dto!)
      .then((data) => {
        console.log(data);
        res.json({
          ...data,
          data: data.data.toResponse(),
          message: "User created!",
        });
      })
      .catch((error) => HandleError.handle(error, res));
  };

  refresehToken = (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(401).json({ error: "RefreshToken is required" });
      return;
    }

    new RefreshTokenUseCase(this.authRepository)
      .execute(refreshToken)
      .then((data) => res.json(data))
      .catch((error) => HandleError.handle(error, res));
  };
}