export interface Task {
  title: string;
  body: string;
  check: boolean;
}

export interface LocalTask {
  id: string;
  title: string;
  body: string;
  check: boolean;
}

export type CreateRequestTask = Omit<Task, "check">;
