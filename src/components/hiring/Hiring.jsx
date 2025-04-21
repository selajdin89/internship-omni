import "./Hiring.scss";
import hiringImg from "../../assets/hiringImg.png";
import Group from "../../assets/Group.png";

const Hiring = () => {
  return <div className="hiring-container">
      <div className="content-section">
        <h3>Hiring can be stressful</h3>
        <p>
          Businesses today face an uphill battle when it comes to hiring locally. <strong>Rising labor costs</strong>, fierce competition for top talent, and a <strong>shrinking skilled workforce</strong> make it increasingly <strong>difficult</strong> to find and <strong>retain the right people</strong>. Traditional hiring methods are no longer sustainable, forcing companies to either overpay for local hires or <strong>settle for less-than-ideal candidates</strong>.
        </p>
        
        <button className="talent-button">FIND TOP TALENT NOW</button>
      </div> 
      
      <div className="image-section">
        <img src={hiringImg} alt="Hiring illustration" className="main-image" />
        <img src={Group} alt="Decorative element" className="decorative-image" />
        
        <div className="offshore-section">
          <p>
            In todays world, <strong>trusting offshore resources can be a challenge</strong>.
          </p>
          <p>
            Many people associate offshore work with issues like poor English proficiency, unconventional working hours, and a perceived lack of commitment—concerns often linked to regions like India and the Philippines. However, these worries can be addressed. There is a growing pool of highly <strong>skilled talent from South America and Europe</strong>, with a strong command of the English language, strong work ethics, and solid professional backgrounds. These candidates are not only university graduates but also come with relevant job experience, making them well-equipped to handle remote roles effectively. Additionally, the significantly lower cost of living in their regions compared to North America allows businesses to access top-tier talent at a fraction of the cost.
          </p>
        </div>
      </div>
    </div>
};

export default Hiring;