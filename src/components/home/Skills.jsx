import skillsData from '../../data/skills.json'

const Skills = () => {
    return (
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid mx-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{skill.title}</h3>
              <img src={skill.icons} alt={`My ${skill.title} skills`} style={{ width: '200%' }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Skills