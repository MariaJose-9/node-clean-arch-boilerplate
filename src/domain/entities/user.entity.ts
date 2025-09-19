export class UserEntity {
  constructor(
    public id: number,
    public name: string,
    public password: string,
    public email: string,
    private failedAttempts: number,
    private isBlocked: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  static fromObject(object: { [key: string]: any }): UserEntity {
    return new UserEntity(
      object.id,
      object.name,
      object.password,
      object.email,
      object.failedAttempts ?? 0,
      object.isBlocked ?? false,
      object.createdAt,
      object.updatedAt
    );
  }

  public toResponse() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  public getFailedAttempts(): number {
    return this.failedAttempts;
  }

  public getIsBlocked(): boolean {
    return this.isBlocked;
  }

  public blockUser(): void {
    this.isBlocked = true;
  }

  public resetFailedAttempts(): void {
    this.failedAttempts = 0;
  }

  public incrementFailedAttempts(): void {
    this.failedAttempts += 1;
  }
}