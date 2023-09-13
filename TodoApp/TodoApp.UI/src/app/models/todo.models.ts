export interface Todo {
  id: string;
  title: string;
  createdAt: Date;
  isCompleted: boolean;
  completedAt: Date;
  isDeleted?: boolean;
  deletedDate?: Date;
}
