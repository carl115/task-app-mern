export interface Task {
  title: string;
  body: string;
  check: boolean;
}

export type CreateRequestTask = Omit<Task, "check">;
