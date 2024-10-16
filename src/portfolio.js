const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Professional Portfolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Edward Mancho',
  role: 'Software Engineer + Creative',
  description:
    "I'm a software engineer with four years of experience working at companies like Cruise Automation, Microsoft, and Intel. The roles I've held during those years are: Software Engineer, Site Reliability Engineer, Infrastructure/DevOps Engineer, and Scrum Master. I’ve worked on both backend and frontend development, gaining expertise in full-stack development, API creation, automation, and DevOps practices.",
  subDescription: "I thrive on creating innovative solutions that merge cutting-edge technology with thoughtful design. My passion for continuous learning drives me to tackle complex challenges. I’m eager to bring this problem-solving mindset to collaborate with diverse teams and push the boundaries of what’s possible.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/edward-mancho',
    github: 'https://github.com/emancho',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Cruise Automation',
    img: 'https://pubaccessbucket.s3.amazonaws.com/images/cruise-logo.png',
    alt:'The company logo for Cruise Automation',
    description:
      'Tech Stack',
    stack: ['Go', 'Buffalo', 'Git','ZenDesk'],
  },
  {
    name: 'Microsoft',
    img:'https://pubaccessbucket.s3.amazonaws.com/images/microsoft_logo.png',
    alt:'The company logo for Microsoft',
    description:
      'Tech Stack',
    stack: ['.NET', 'Azure DevOps', 'GitHub', 'VMs', 'VS Studio'],
  },
  {
    name: 'Intel',
    img: 'https://pubaccessbucket.s3.amazonaws.com/images/intel_logo.png',
    alt:'The company logo for Intel',
    description:
      'Tech Stack',
    stack: ['React', 'JavaScript', 'F5', 'Jira', 'GitHub', 'DevOps'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'React',
  'HTML',
  'CSS',
  'JavaScript',
  'Front-End',
  'Back-End',
  'DevOps',
  'C#',
  'Go',
  'APIs',
  'Scrum',
  'GitHub',
  'Jira',
  'Agile',
  'AWS',
  'Leadership'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'eddmancho@gmail.com',
}

export { header, about, projects, skills, contact }
