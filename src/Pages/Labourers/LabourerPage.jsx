import React from "react";
import { useParams } from "react-router-dom";
import labourersData from "./data";
import { FaHardHat, FaCertificate, FaTools, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';

const LabourerPage = () => {
  const { id } = useParams();
  const labourer = labourersData.find(l => l.id === Number(id));

  // Dynamically populated data to make the page more professional and realistic for a mining laborer
  const specializedSkills = [
    "Blasting and Explosives Handling",
    "Ground Support (Rock Bolting, Shotcrete)",
    "Ventilation Systems Management",
    "Underground Utility Installation"
  ];

  const certifications = [
    "MSHA Part 48 Certified (Surface & Underground)",
    "First Aid & CPR Certified",
    "Confined Space Entry",
    "Forklift Operator License"
  ];
  
  const pastProjects = [
    { title: "New Underground Tunneling Project", company: "ABC Mining Co.", location: "Delhi", years: "2018-2020", description: "Successfully supervised a 15-person team to complete a new 3km tunnel for gold ore extraction. Achieved project milestones ahead of schedule." },
    { title: "Open-Pit Operations Expansion", company: "Global Minerals", location: "Mumbai", years: "2016-2018", description: "Oversaw the expansion of an open-pit mine, implementing new safety protocols that reduced incidents by 30%." }
  ];

  const equipmentProficiency = [
    "Jumbo Drill Rig",
    "Scooptram (LHD)",
    "Dump Truck (CAT 777)",
    "Explosives Handling Systems"
  ];

  // Dummy gallery images - still using randomuser for demonstration
  const gallery = Array.from({ length: 4 }, (_, i) => `https://randomuser.me/api/portraits/men/${(labourer?.id + i) % 100}.jpg`);

  if (!labourer) {
    return (
      <div className="p-8 text-center text-red-600 text-xl">Labourer not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-2xl mt-10 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center border-b pb-8 mb-8">
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <img
            src={labourer.image}
            alt={labourer.name}
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-md"
            onError={e => { e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg'; }}
          />
          <h2 className="text-3xl font-extrabold text-blue-800 mb-1">{labourer.name}</h2>
          <div className="text-sm text-gray-500 mb-2">ID: <span className="font-mono">{labourer.id}</span></div>
          <div className={`mb-2 px-3 py-1 rounded-full text-sm font-bold ${labourer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{labourer.status}</div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-700 text-lg leading-relaxed italic">
            Experienced Supervisor from Ahmedabad with 10 years in the field. Reliable and hardworking.
          </p>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
            <div className="flex items-center gap-2"><FaHardHat className="text-blue-500" /> <span className="font-semibold">{labourer.skill}</span></div>
            <div className="flex items-center gap-2"><FaTools className="text-blue-500" /> <span className="font-semibold">{labourer.experience} years</span></div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-500" /> <span className="font-semibold">{labourer.location}</span></div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2"><FaHardHat /> Specialized Skills</h3>
          <ul className="space-y-2 text-gray-700 list-none pl-0">
            {specializedSkills.map((skill, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-block text-blue-500 mr-2">&bull;</span> {skill}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4 flex items-center gap-2"><FaCertificate /> Certifications</h3>
          <ul className="space-y-2 text-gray-700 list-none pl-0">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-block text-blue-500 mr-2">&bull;</span> {cert}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4 flex items-center gap-2"><FaTools /> Equipment Proficiency</h3>
          <ul className="space-y-2 text-gray-700 list-none pl-0">
            {equipmentProficiency.map((equip, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-block text-blue-500 mr-2">&bull;</span> {equip}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2">
          {/* Professional Summary */}
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2"><FaFileAlt /> Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A dedicated and highly-skilled mining supervisor with over 10 years of hands-on experience in both underground and open-pit mining environments. Proven expertise in leading and mentoring teams to exceed production targets while strictly adhering to safety protocols. A proactive problem-solver with a strong background in operating and maintaining specialized mining equipment.
          </p>
          
          {/* Past Projects Section */}
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2"><FaMapMarkerAlt /> Past Projects & Experience</h3>
          <div className="space-y-6">
            {pastProjects.map((project, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                <div className="text-sm text-gray-500 mb-2">{project.company} | {project.location} | {project.years}</div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default LabourerPage;