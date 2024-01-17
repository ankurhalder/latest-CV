import PropTypes from "prop-types";

const Resume = ({ data }) => {
  Resume.propTypes = {
    data: PropTypes.object.isRequired,
  };
  const renderEducation = () => {
    return data.education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.degree}</h3>
        <p>{edu.institution}</p>
        <p>{edu.duration}</p>
        <img src={edu.image} alt={edu.degree} />
      </div>
    ));
  };

  const renderTrainingsCourses = () => {
    return data.trainingsCourses.map((course, index) => (
      <div key={index}>
        <h3>{course.title}</h3>
        <p>{course.institution}</p>
        <p>{course.duration}</p>
        {/* <a
          href={course.certificate.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Certificate Link
        </a> */}
      </div>
    ));
  };

  const renderPortfolio = () => {
    return data.portfolio.map((project, index) => (
      <div key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Project Link
        </a>
        <img src={project.image} alt={project.title} />
      </div>
    ));
  };

  const renderSocialProfiles = () => {
    return Object.entries(data.socialProfiles).map(([profile, info]) => (
      <div key={profile}>
        <h3>{profile}</h3>
        <p>{info.link}</p>
        <img src={info.image} alt={profile} />
      </div>
    ));
  };

  return (
    <div>
      <h1>{data.personalInfo.name}</h1>
      <p>Email: {data.personalInfo.email}</p>
      <p>Phone: {data.personalInfo.phone}</p>
      <p>Location: {data.personalInfo.location}</p>
      <img src={data.personalInfo.image} alt={data.personalInfo.name} />

      <h2>Education</h2>
      {renderEducation()}

      <h2>Work Experience</h2>
      <p>{data.workExperience.job}</p>
      <p>{data.workExperience.internship.title}</p>
      {/* Add more details as needed */}

      <h2>Positions of Responsibility</h2>
      {/* Add logic to render positions of responsibility */}

      <h2>Training Courses</h2>
      {renderTrainingsCourses()}

      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Portfolio</h2>
      {renderPortfolio()}

      <h2>Social Profiles</h2>
      {renderSocialProfiles()}
    </div>
  );
};

export default Resume;
