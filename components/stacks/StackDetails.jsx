import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRuby,
  SiRubyonrails,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
  SiPuppeteer,
  SiJavascript,
  SiPostgresql,
  SiGithub,
  SiGit,
  SiHeroku,
  SiFigma,
} from "react-icons/si";

export const frontEnd = {
  stackName: ["JS", "ReactJS", "NextJS", "TailwindCSS", "Bootstrap", "SASS", "FramerMotion", "Figma"],
  stackIcon: [SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiSass, SiFramer, SiFigma],
}

export const backEnd = {
  stackName: ["Ruby", "RubyonRails", "PostgreSQL"],
  stackIcon: [SiRuby, SiRubyonrails, SiPostgresql],
}

export const others = {
  stackName: ["Github", "Git", "Puppeteer", "Heroku"],
  stackIcon: [SiGithub, SiGit, SiPuppeteer, SiHeroku],
}
