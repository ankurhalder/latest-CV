import { Fragment } from "react";
import ankurHalder from "../data/ankurHalder";

function Resume() {
  return (
    <Fragment>
      <div className="wrapper">
        <h1>{ankurHalder.personalInfo.name}&apos;s Resume</h1>
        <section>
          <h2>Personal Information</h2>
          <ul>
            {Object.entries(ankurHalder.personalInfo).map(([key, value]) => (
              <li key={key}>
                {key === "image" ? (
                  <img
                    src={value}
                    alt={`${ankurHalder.personalInfo.name}'s ${key}`}
                  />
                ) : (
                  <Fragment>
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>{" "}
                    {value}
                  </Fragment>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          {ankurHalder.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>
                <strong>Institution:</strong> {edu.institution}
              </p>
              <p>
                <strong>Duration:</strong> {edu.duration}
              </p>
              {edu.percentage && (
                <p>
                  <strong>Percentage:</strong> {edu.percentage}
                </p>
              )}
              {edu.image && <img src={edu.image} alt={`${edu.degree} Image`} />}
            </div>
          ))}
        </section>

        <section>
          <h2>Work Experience</h2>
          <p>
            <strong>Job:</strong> {ankurHalder.workExperience.job}
          </p>
          {ankurHalder.workExperience.internship && (
            <div>
              <h3>Internship</h3>
              <p>
                <strong>Title:</strong>{" "}
                {ankurHalder.workExperience.internship.title}
              </p>
              <p>
                <strong>Company:</strong>{" "}
                {ankurHalder.workExperience.internship.company}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {ankurHalder.workExperience.internship.description}
              </p>
              <p>
                <strong>Duration:</strong>{" "}
                {ankurHalder.workExperience.internship.duration}
              </p>
              <p>
                <strong>Type:</strong>{" "}
                {ankurHalder.workExperience.internship.type}
              </p>
              <p>
                <strong>Topic:</strong>{" "}
                {ankurHalder.workExperience.internship.topic}
              </p>
              {ankurHalder.workExperience.internship.image && (
                <img
                  src={ankurHalder.workExperience.internship.image}
                  alt={`${ankurHalder.workExperience.internship.title} Image`}
                />
              )}
              <a
                href={ankurHalder.workExperience.internship.certification.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          )}
        </section>

        <section>
          <h2>Positions of Responsibility</h2>
          {ankurHalder.positionsOfResponsibility.map((position, index) => (
            <div key={index}>
              <h3>{position.position}</h3>
              <p>
                <strong>Description:</strong> {position.description}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2>Training Courses</h2>
          {ankurHalder.trainingsCourses.map((course, index) => (
            <div key={index}>
              <h3>{course.title}</h3>
              <p>
                <strong>Institution:</strong> {course.institution}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              {course.certificate && (
                <Fragment>
                  <a
                    href={course.certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                  {course.skills && (
                    <ul>
                      <strong>Skills:</strong>
                      {course.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </Fragment>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            {ankurHalder.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          {ankurHalder.projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>
                <strong>Description:</strong> {project.description}
              </p>
              {project.image && (
                <img src={project.image} alt={`${project.title} Image`} />
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </div>
          ))}
        </section>

        <section>
          <h2>Social Profiles</h2>
          <ul>
            {Object.values(ankurHalder.socialProfiles).map((profile, index) => (
              <li key={index}>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={profile.image} alt={`${profile} icon`} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Fragment>
  );
}

export default Resume;
