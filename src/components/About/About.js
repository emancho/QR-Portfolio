import { useContext } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { ThemeContext } from '../../contexts/theme'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, subDescription, resume, social } = about
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {/* The section for the image */}
      <div className="card-with-border">
            {
              themeName === 'dark' ? 
              <img src='https://pubaccessbucket.s3.amazonaws.com/images/headshot-dark.jpg' alt='Header in black and white'/> : 
              <img src='https://pubaccessbucket.s3.amazonaws.com/images/headshot-light.PNG' alt='Header in color'/>
            }
      </div>

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>
        {description && description}
        <br/><br/>
        {subDescription && subDescription}
      </p>
      {/* <p className='about__sub'>{subDescription && subDescription}</p> */}
      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
