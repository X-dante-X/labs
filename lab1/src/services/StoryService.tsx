import { Story } from "../types/Story";

class StoryService {
  static getAll(): Story[] {
    const stories = localStorage.getItem("stories");
    return stories ? JSON.parse(stories) : [];
  }

  static save(stories: Story[]): void {
    localStorage.setItem("stories", JSON.stringify(stories));
  }

  static add(story: Story): void {
    const stories = StoryService.getAll();
    stories.push(story);
    StoryService.save(stories);
  }

  static update(updatedStory: Story): void {
    const stories = StoryService.getAll();
    const index = stories.findIndex((p) => p.id === updatedStory.id);
    if (index !== -1) {
        stories[index] = updatedStory;
      StoryService.save(stories);
    }
  }

  static delete(storyId: number): void {
    const stories = StoryService.getAll();
    const updatedProjects = stories.filter((p) => p.id !== storyId);
    StoryService.save(updatedProjects);
  }
}

export default StoryService;