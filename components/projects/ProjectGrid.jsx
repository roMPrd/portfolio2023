import ProjectCard from './ProjectCard'
import { projects } from './ProjectDetails'

const ProjectGrid = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
          stacks={project.stacks}
          github={project.github}
          website={project.website}
          color={project.color}
        />
      ))}
    </div>
  )
}

export default ProjectGrid
