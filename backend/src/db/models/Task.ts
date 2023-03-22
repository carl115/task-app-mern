import { Schema, model } from 'mongoose'
import { TaskData } from '../../types'

const TaskSchema = new Schema<TaskData>(
    {
        title: { type: String },
        body: { type: String },
        check: { type: Boolean, default: false }
    }
)

export const Task = model<TaskData>('Task', TaskSchema)