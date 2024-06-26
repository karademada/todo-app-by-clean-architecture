import { StatusType } from 'src/entities/status.type';

export class AddTodoDto {
  private user_id: number;
  private title: string;
  private status: StatusType;

  constructor(user_id: number, title: string, status: StatusType) {
    this.user_id = user_id;
    this.title = title;
    this.status = status;
  }

  getUserId(): number {
    return this.user_id;
  }

  getTitle(): string {
    return this.title;
  }

  getStatus(): StatusType {
    return this.status;
  }
}
