// Styling
import "./styles/cv.css";
import "@fontsource/open-sans" // Defaults to weight 400 with normal variant.
import "@fontsource/noto-serif" // Defaults to weight 400 with normal variant.

// Components
import List from "./components/list";
import Tagline from "./components/tagline";
import ProjectCard from "./components/project-card";

// Data
import { SkillsLanguages, SkillsSoftware, SkillsMisc } from "./data/skills";
import projects from "./data/projects";

let WorkHistory = [
	"Web Designer & Developer - Adtrak Media Ltd - 2018 - Present",
	"Junior Web Designer & Developer - Adtrak Media Ltd - 2017 - 2018",
	"Trainee Web Designer & Developer - Adtrak Media Ltd - 2016 - 2017",
	"Senior Team Member - Greggs - 2012 - 2016",
	"Assistant Manager - Card Factory 2010 - 2011",
	"Team Member - Card Factory - 2008 - 2010"
]

let EducationHistory = [
	"BA Hons Top-up - Nottingham Trent University - 2015 - 2016 - 2:1",
	"Foundation Degree - New College Nottingham - 2013 - 2015 - Merit"
]

function App() {
	let AllProjects = projects.map((value, index) => {
		return <ProjectCard title={value[0]} description={value[1]} link={value[2]} logo={value[3]} key={index}></ProjectCard>
	})
	return (
	<div className="App p-4 md:p-8 lg:p-12 xl:p-16">
		<div className="w-full">

			<h1 className="font-serif text-7xl mb-4 md:mb-8 xl:mb-12"><span class="block font-semibold text-red-500">Hi JH!</span> My name is Ed.</h1>
			<p className="w-full font-sans-serif leading-loose mb-4 max-w-3xl">I am a Nottingham based Front-End web designer &amp; developer. I develop websites using the latest technologies, to the highest of standards.</p>

			<p className="w-full font-sans-serif leading-loose mb-4 md:mb-8 xl:mb-12 max-w-3xl">Having worked in the Web Design industry for the last 4 years, I have learnt a lot about the varying different aspects of web design. I can design websites from scratch, as well as develop them using the latest technologies. As part of my current role, my focus is on Wordpress Theme development, I am now looking for a new challenge.</p>

			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">

				<div>
					<Tagline tagline="Skillset" header="Languages"></Tagline>
					<List items={SkillsLanguages}></List>
				</div>

				<div>
					<Tagline tagline="Skillset" header="Software"></Tagline>
					<List items={SkillsSoftware}></List>
				</div>

				<div>
					<Tagline tagline="Skillset" header="Misc."></Tagline>
					<List items={SkillsMisc}></List>
				</div>

			</div>


			<Tagline tagline="Learning" header="Education"></Tagline>
			<p className="w-full font-sans-serif leading-loose mb-4 max-w-3xl">I decided to start my path into the industry later on life, starting by taking my Foundation degree in Digital Media at New College Nottingham. I then topped this up to a Full BA Hons.</p>
			<List items={EducationHistory} boldFirst="font-semibold text-red-500 mb-2"></List>

			<Tagline tagline="From Past to Present" header="Work History"></Tagline>
			<p className="w-full font-sans-serif leading-loose mb-4 max-w-3xl">Before moving into the industry, I spent my time working in the retail industry. I feel this stoof me in good stead for working in the Web Design industry, as it taught my patience, communication skils &amp; time management skills amongst many other things.</p>
			<List items={WorkHistory} boldFirst="font-semibold text-red-500 mb-2"></List>

			<Tagline tagline="Downtime" header="Hobbies &amp; Interests"></Tagline>

			<p className="w-full font-sans-serif leading-loose mb-4 md:mb-8 xl:mb-12 max-w-3xl">In my spare time I like to spend it with my family as much as possible. Outside of this, I love to play games on my Xbox, where you can normally find me hidden in the blocky world of Minecraft, amongst many other titles. I also love to spend time at the beach, normally the Yorkshire town of Whitby.</p>

			<Tagline tagline="Projects" header="Examples of work"></Tagline>

			<p className="w-full font-sans-serif leading-loose mb-4 md:mb-8 xl:mb-12 max-w-3xl">All work on show here was designed/developed whilst under my current employement by Adtrak Media Ltd. All work belongs to them &amp; their respective clients.</p>

			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8 xl:mb-12">
				{AllProjects}
			</div>

			<Tagline tagline="Extras" header="Useful Links"></Tagline>
			<a href="https://gist.github.com/edwardjosephbennett" target="_blank" rel="noreferrer" className="mb-4 text-red-500 hover:text-blue-500 transition duration-300 ease-in-out">My Gists</a>
			<a href="https://github.com/edwardjosephbennett" target="_blank" rel="noreferrer" className="mb-4 text-red-500 hover:text-blue-500 transition duration-300 ease-in-out">Github</a>

			<p className="text-sm text-gray-300">Built with React using create-react-app. Styling handled using TailwindCSS. Hosted on Vercel</p>

		</div>
	</div>
	);
}

export default App;
