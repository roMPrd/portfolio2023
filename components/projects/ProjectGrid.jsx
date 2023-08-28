import ProjectCard from './ProjectCard'
import { projects } from './ProjectDetails'
import AnimatedTexts from '@components/animations/animatedTexts'

const ProjectGrid = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">

      <AnimatedTexts
        text={ 'Check out some of my work !'}
        className={"text-[30px] font-bold text-center"}
        delay={0}
      />

      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
          stackIcon={project.stackIcon}
          stackName={project.stackName}
          github={project.github}
          website={project.website}
          color={project.color}
        />
      ))}
    </div>
  )
}

export default ProjectGrid
