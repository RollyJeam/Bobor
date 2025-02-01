import './App.css';
import ToggleSection from './ToggleSection';
import resumeData from './data/data.json';
import neilPic from './images/neil.jpg'


const App = () => {
  return (
    <div className="flex-all">
      <div className="container">
        <h1>NEIL PATRICK ABLEN</h1>
        <div className="profile-image">
          <img src={neilPic} alt="NEIL" />
        </div>
        <p><strong>Mailing Address:</strong></p>
        <p>Purok 5, Brgy. R.M. Tan</p>
        <p>Ormoc City, Leyte, Philippines</p>
        <p><strong>Cell:</strong> 09283763053</p>
        <p><strong>Mail:</strong> <a href="mailto:neilpatrickablen29@gmail.com">neilpatrickablen29@gmail.com</a></p>

        <ToggleSection title="CAREER VISION"><div className='vision'>{resumeData.careerVision}</div></ToggleSection>

        <ToggleSection title="PERSONAL PROFILE">
          {Object.entries(resumeData.personalProfile).map(([key, value]) => (
            <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</p>
          ))}
        
        </ToggleSection>
        <ToggleSection title="ACADEMIC ATTAINMENTS">
          {Object.entries(resumeData.academicAttainments).map(([key, value]) => (
            <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</p>
          ))}
        </ToggleSection>
        <ToggleSection title="EXPERIENCE">
          {resumeData.experience.map((exp, index) => (
            <p key={index}><strong>{exp.title}:</strong> {exp.company} ({exp.year})</p>
          ))}
        </ToggleSection>
        <ToggleSection title="SKILLS">
          <ul>
            {resumeData.skills.map((skill, index) => (
              <li key={index}>• {skill}</li>
            ))}
          </ul>
        </ToggleSection>
        <ToggleSection title="CHARACTER REFERENCE">
          {resumeData.characterReference.map((ref, index) => (
            <p key={index}><strong>{ref.name}</strong> - {ref.position}, {ref.location}</p>
          ))}
        </ToggleSection>
      </div>
    </div>
  );
};

export default App;