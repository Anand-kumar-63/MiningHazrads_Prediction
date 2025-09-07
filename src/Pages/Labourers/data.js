
const skills = ["Welder", "Electrician", "Carpenter", "Plumber", "Painter", "Mason", "Fitter", "Driver", "Helper", "Supervisor", "Blaster", "Surveyor", "Foreman", "Mechanic", "Loader Operator"];
const statuses = ["Active", "Inactive"];
const locations = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Pune", "Jaipur", "Lucknow", "Ahmedabad", "Goa", "Ranchi", "Nagpur", "Surat", "Indore"];
const companies = ["ABC Mining Co.", "Global Minerals", "BuildWell Pvt Ltd", "UrbanWorks", "Mega Mines Ltd", "RockSolid Inc.", "Prime Excavators", "DeepEarth Corp."];

function getGallery(id) {
  return Array.from({ length: 4 }, (_, i) => `https://randomuser.me/api/portraits/men/${(id + i) % 100}.jpg`);
}

function getPastProjects(id) {
  return [
    {
      title: `Project ${id}-A`,
      company: companies[id % companies.length],
      location: locations[(id + 2) % locations.length],
      years: `20${10 + (id % 10)}-20${12 + (id % 10)}`,
      description: `Worked on ${skills[id % skills.length]} operations, improved safety and efficiency.`
    },
    {
      title: `Project ${id}-B`,
      company: companies[(id + 3) % companies.length],
      location: locations[(id + 5) % locations.length],
      years: `20${13 + (id % 10)}-20${15 + (id % 10)}`,
      description: `Led a team for ${skills[(id + 1) % skills.length]} tasks, completed ahead of schedule.`
    }
  ];
}

const labourersData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Labourer ${i + 1}`,
  skill: skills[i % skills.length],
  status: statuses[i % statuses.length],
  image: `https://randomuser.me/api/portraits/men/${(i % 100)}.jpg`,
  age: 20 + (i % 25),
  experience: 1 + (i % 10),
  location: locations[i % locations.length],
  bio: `Experienced ${skills[i % skills.length]} from ${locations[i % locations.length]} with ${1 + (i % 10)} years in the field. Reliable and hardworking.`,
  gallery: getGallery(i + 1),
  pastProjects: getPastProjects(i + 1)
}));

export default labourersData;
