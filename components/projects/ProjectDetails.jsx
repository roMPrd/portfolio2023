
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
} from "react-icons/si";

export const projects = [

  {
    id: 2,
    name: "Portfolio 2023",
    description: "This is my portfolio for 2023 so far",
    image: "Portfolio2023.jpeg",
    stackName: ["ReactJS", "NextJS", "TailwindCSS", "FramerMotion"],
    stackIcon: [SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    github: "https://github.com/roMPrd/portfolio2023",
    website: "",
    color: "D2D4D5",
  },
  {
    id: 1,
    name: "Batch #1030",
    description: "Scraping github contributions of the bootcamp's students",
    image: "Batch1030.jpeg",
    stackName: ["JS", "NodeJS", "Puppeteer"],
    stackIcon: [SiJavascript, SiNodedotjs, SiPuppeteer],
    github: "https://github.com/roMPrd/batch-1030",
    website: "https://romprd.github.io/batch-1030/",
    color: "D2D4D5",
  },
  {
    id: 0,
    name: "Code Hunter",
    description: "School project: a platform to post code problem and be paid when solving it with crypto money via MetaMask",
    image: "CodeHunter.jpeg",
    stackName: ["Ruby", "RubyonRails", "SASS","Bootstrap", "JS", "PostgreSQL"],
    stackIcon: [SiRuby, SiRubyonrails, SiSass, SiBootstrap, SiJavascript, SiPostgresql],
    github: "https://github.com/roMPrd/RubyHunters",
    website: "",
    color: "D2D4D5",
  }
];
