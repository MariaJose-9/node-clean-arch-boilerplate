export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;

    if (!email) return ["Email is required"];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return ["Email must be a valid email address"];
    }

    if (!password) return ["Password is required"];
    if (typeof password !== "string" || password.length < 6) {
      return ["Password must be at least 6 characters"];
    }

    return [undefined, new LoginUserDto(email, password)];
  }
}