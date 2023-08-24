import ProjectCard from './ProjectCard'
import { projects } from './ProjectDetails'

const ProjectGrid = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col">
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
