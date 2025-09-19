export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(data: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = data;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return ["Name is required and must be a valid string"];
    }

    if (!email || typeof email !== "string") {
      return ["Email is required"];
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return ["Email must be a valid format"];
    }

    if (!password || typeof password !== "string") {
      return ["Password is required"];
    }

    if (password.length < 6) {
      return ["Password must be at least 6 characters"];
    }

    return [
      undefined,
      new RegisterUserDto(name.trim(), email.trim(), password),
    ];
  }
}