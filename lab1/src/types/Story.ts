import { Project } from "./Project";

export interface Story
{
    id: number;
    name: string;
    description: string;
    priority: "low" | "mid" | "high";
    project: Project;
    createdAt: Date;
    condition: "todo" | "doing" | "done";
    userId: number
}