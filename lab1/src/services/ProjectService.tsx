import { Project } from "../types/Project";

class ProjectService {
  static getAll(): Project[] {
    const projects = localStorage.getItem("projects");
    return projects ? JSON.parse(projects) : [];
  }

  static save(projects: Project[]): void {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static add(project: Project): void {
    const projects = ProjectService.getAll();
    projects.push(project);
    ProjectService.save(projects);
  }

  static update(updatedProject: Project): void {
    const projects = ProjectService.getAll();
    const index = projects.findIndex((p) => p.id === updatedProject.id);
    if (index !== -1) {
      projects[index] = updatedProject;
      ProjectService.save(projects);
    }
  }

  static delete(projectId: number): void {
    const projects = ProjectService.getAll();
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    ProjectService.save(updatedProjects);
  }
}

export default ProjectService;
