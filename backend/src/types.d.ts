export interface TaskData {
    title: string,
    body: string,
    check: boolean
}

type TaskRequest = Omit<TaskData, 'check'>  