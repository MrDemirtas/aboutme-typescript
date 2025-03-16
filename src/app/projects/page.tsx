interface Project {
  name: string;
  sourceCodeLink: string;
  demoLink: string;
}

const myProjects: Project[] = [
  {
    name: "Not alma uygulaması",
    sourceCodeLink: "https://github.com/MrDemirtas/note-taking-web-app",
    demoLink: "https://note-taking-web-app-seven.vercel.app",
  },
  {
    name: "Görev takip uygulaması",
    sourceCodeLink: "https://github.com/MrDemirtas/Alfa-KanbanWepApp",
    demoLink: "https://alfa-kanban-wep-app.vercel.app",
  },
  {
    name: "Film-Dizi uygulaması",
    sourceCodeLink: "https://github.com/MrDemirtas/entertainment-web-app",
    demoLink: "https://entertainment-web-app-orpin-alpha.vercel.app",
  },
  {
    name: "Adam asmaca oyunu",
    sourceCodeLink: "https://github.com/MrDemirtas/hangman-game",
    demoLink: "https://hangman-game-liart-three.vercel.app",
  },
  {
    name: "Canlı markdown editörü",
    sourceCodeLink: "https://github.com/MrDemirtas/in-browser-markdown-editor",
    demoLink: "https://in-browser-markdown-editor-black.vercel.app",
  },
];

export default function Projects() {
  return (
    <main>
      <h1>Projelerim</h1>
      <div className="project-cards">
        {myProjects.map((project, i) => (
          <Project key={i} name={project.name} sourceCodeLink={project.sourceCodeLink} demoLink={project.demoLink} />
        ))}
      </div>
    </main>
  );
}

interface ProjectProps {
  name: string;
  sourceCodeLink: string;
  demoLink: string;
}

const Project = (props: ProjectProps) => {
  return (
    <div className="project-card">
      <h2>{props.name}</h2>
      <div className="project-card-links">
        <a href={props.sourceCodeLink} target="_blank">
          Kaynak Kodları
        </a>
        <a href={props.demoLink} target="_blank">
          Projenin Demosu
        </a>
      </div>
    </div>
  );
};
