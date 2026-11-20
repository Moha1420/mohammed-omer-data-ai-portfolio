import { ArrowDown, ArrowUpRight, BarChart3, BrainCircuit, Database, Github, Linkedin, Mail, Menu, Workflow, Code2, FileDown, ExternalLink, Search } from "lucide-react";

const projects = [
  {
    title: "ESS Automated Data Reconciliation",
    category: "Data Engineering",
    status: "In development",
    description: "A survey-data reconciliation workflow using DuckDB and Snowflake, with validation rules, discrepancy detection, and quality reporting.",
    stack: ["Python", "SQL", "DuckDB", "Snowflake"],
    repo: null,
    note: "Project brief is known; implementation repository and final results have not been supplied."
  },
  {
    title: "Ethiopian Crop Yield Prediction",
    category: "Machine Learning",
    status: "Hackathon project",
    description: "A smallholder crop-yield prediction application using plot survey, weather, and market-price data across five Ethiopian regions and five crops.",
    stack: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    repo: "https://github.com/Moha1420/team-four-main",
    note: "Known repository: team-four-main. Confirm the deployed app URL and final evaluation metrics before publishing."
  },
  {
    title: "House Price Prediction",
    category: "Machine Learning",
    status: "Completed prototype",
    description: "A regression workflow comparing model and preprocessing combinations, with a Gradient Boosting model exposed through a Flask prediction API.",
    stack: ["Python", "Pandas", "Scikit-learn", "Flask"],
    repo: null,
    note: "Known benchmark: best reported R² was 0.8086. Repository URL has not been provided."
  },
  {
    title: "Power BI Sales & KPI Reporting",
    category: "Business Intelligence",
    status: "Portfolio case study",
    description: "An interactive reporting case study covering data modeling, DAX measures, SQL analysis, KPI tracking, slicers, and bookmarks.",
    stack: ["Power BI", "DAX", "Power Query", "SQL"],
    repo: null,
    note: "Add the actual PBIX file, dataset, dashboard screenshots, and verified business findings."
  },
  {
    title: "Python Exploratory Data Analysis",
    category: "Data Analytics",
    status: "Portfolio case study",
    description: "A reproducible analysis workflow for data profiling, cleaning, exploratory analysis, and communicating findings from structured datasets.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    repo: null,
    note: "Add the source notebook, dataset source, and project-specific findings."
  },
  {
    title: "SQL Analytics & Database Design",
    category: "Data Analytics",
    status: "Portfolio case study",
    description: "SQL-based analytical workflows using joins, aggregations, window functions, schema design, and data-quality checks.",
    stack: ["SQL", "PostgreSQL", "DuckDB"],
    repo: null,
    note: "Add a representative SQL repository and sample schema before presenting this as a completed deliverable."
  },
  {
    title: "Customer Churn & Segmentation",
    category: "Machine Learning",
    status: "Training / project work",
    description: "Machine-learning exercises covering churn prediction, model comparison, feature engineering, customer segmentation, and evaluation.",
    stack: ["Python", "Scikit-learn", "XGBoost", "K-Means"],
    repo: null,
    note: "Specific dataset, final model metrics, and repository link need confirmation."
  },
  {
    title: "A/B Testing & Statistical Analysis",
    category: "Data Analytics",
    status: "Practical case study",
    description: "An experiment-analysis workflow for comparing variants, defining hypotheses, selecting statistical tests, and interpreting results.",
    stack: ["Python", "Pandas", "SciPy", "Statistics"],
    repo: null,
    note: "Add experiment data, test assumptions, confidence intervals, and measured outcome."
  },
  {
    title: "Data Pipelines & ETL Workflows",
    category: "Data Engineering",
    status: "Learning / implementation track",
    description: "A practical pipeline blueprint for ingesting, validating, transforming, and loading survey or business data into analytical storage.",
    stack: ["Python", "SQL", "DuckDB", "Apache Airflow"],
    repo: null,
    note: "Confirm which pipeline components have been implemented and add a runnable repository."
  }
];

const categories = ["All", "Data Analytics", "Business Intelligence", "Data Engineering", "Machine Learning"];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <article className="project-card">
      <div className="project-topline"><span className="project-category">{project.category}</span><span className="status">{project.status}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="project-bottom">
        {project.repo ? <a className="text-link" href={project.repo} target="_blank" rel="noreferrer"><Github size={15}/> Source code <ExternalLink size={13}/></a> : <span className="muted-link">Repository link not supplied</span>}
      </div>
      <details className="project-note"><summary>Project details to complete</summary><p>{project.note}</p></details>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home"><span className="brand-mark">MO</span><span>MOHAMMED OMER<span className="brand-sub">DATA & AI PORTFOLIO</span></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="mailto:omerm5482@gmail.com">Let&apos;s connect <ArrowUpRight size={15}/></a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> OPEN TO DATA & AI OPPORTUNITIES</div>
          <h1>Turning data into <span>intelligence.</span><br/>Building solutions that matter.</h1>
          <p className="hero-text">I&apos;m Mohammed Omer, an Information Systems graduate focused on Data Analytics, Business Intelligence, Data Engineering, and Machine Learning. I use Python, SQL, and modern data tools to turn complex data into useful decisions.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a><a className="button secondary" href="mailto:omerm5482@gmail.com"><Mail size={16}/> Contact me</a></div>
          <div className="socials"><a href="https://github.com/Moha1420" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/mohammed-omer-12097740b/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="mailto:omerm5482@gmail.com"><Mail size={17}/> Email</a></div>
        </div>
        <div className="hero-panel">
          <div className="panel-head"><span className="panel-dot"/> DATA WORKFLOW <span className="panel-live">PORTFOLIO</span></div>
          <div className="workflow">
            <div className="workflow-node"><Database/><div><b>Collect & prepare</b><small>Python · SQL · ETL</small></div></div><div className="flow-line"/>
            <div className="workflow-node"><BarChart3/><div><b>Analyze & understand</b><small>EDA · Statistics · BI</small></div></div><div className="flow-line"/>
            <div className="workflow-node"><BrainCircuit/><div><b>Model & predict</b><small>Machine Learning · AI</small></div></div><div className="flow-line"/>
            <div className="workflow-node final"><Workflow/><div><b>Deliver insights</b><small>Dashboards · Applications</small></div></div>
          </div>
          <div className="panel-foot"><span>DATA → INSIGHT → IMPACT</span><span className="tiny-bars"><i/><i/><i/><i/><i/><i/><i/></span></div>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip"><div className="shell strip-inner"><span>BASED IN ADDIS ABABA, ETHIOPIA</span><span>PYTHON <i/> SQL <i/> POWER BI <i/> DUCKDB <i/> MACHINE LEARNING</span></div></section>

      <section className="section shell" id="about">
        <div className="section-kicker">01 / ABOUT</div><div className="about-grid"><div><h2>Curious about data.<br/><span>Driven by real-world impact.</span></h2></div><div className="about-copy"><p>I have a background in Information Systems from Addis Ababa University and a practical interest in building reliable data workflows, insightful dashboards, and machine-learning applications.</p><p>My work connects analytical thinking with implementation: from cleaning and exploring datasets to designing data pipelines, training predictive models, and presenting results clearly.</p><a className="text-link" href="https://github.com/Moha1420" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15}/></a></div></div>
      </section>

      <section className="section expertise-section" id="expertise"><div className="shell"><div className="section-kicker">02 / EXPERTISE</div><div className="section-heading"><h2>What I work with</h2><p>A practical toolkit across the data lifecycle.</p></div>
        <div className="expertise-grid">
          <div className="expertise-card"><BarChart3/><h3>Data Analytics</h3><p>Transforming raw datasets into clear findings and measurable insights.</p><div className="tags"><span>Python</span><span>Pandas</span><span>NumPy</span><span>SQL</span><span>Statistics</span></div></div>
          <div className="expertise-card"><Workflow/><h3>Business Intelligence</h3><p>Designing analytical models and interactive reports for decision support.</p><div className="tags"><span>Power BI</span><span>DAX</span><span>Power Query</span><span>Data Modeling</span></div></div>
          <div className="expertise-card"><Database/><h3>Data Engineering</h3><p>Building structured workflows for ingestion, transformation, and validation.</p><div className="tags"><span>SQL</span><span>DuckDB</span><span>ETL</span><span>Airflow</span><span>Snowflake</span></div></div>
          <div className="expertise-card"><BrainCircuit/><h3>Machine Learning</h3><p>Developing predictive models and evaluating their performance.</p><div className="tags"><span>Scikit-learn</span><span>XGBoost</span><span>Feature Engineering</span><span>Streamlit</span></div></div>
        </div>
      </div></section>

      <section className="section shell" id="projects"><div className="section-kicker">03 / SELECTED WORK</div><div className="section-heading project-heading"><div><h2>Projects & case studies</h2><p>Selected work across analytics, BI, engineering, and machine learning.</p></div><span className="project-count">09 PROJECT ENTRIES</span></div>
        <div className="filter-note"><Search size={16}/> Browse projects by domain. Entries marked as case studies need supporting artifacts before publication as completed work.</div>
        <div className="category-list">{categories.map(c => <a key={c} href={`#${c === "All" ? "projects" : c.toLowerCase().replaceAll(" ", "-")}`}>{c}</a>)}</div>
        <div className="project-grid">{projects.map(p => <ProjectCard key={p.title} project={p}/>)}</div>
      </section>

      <section className="section education-section" id="experience"><div className="shell education-grid"><div><div className="section-kicker">04 / BACKGROUND</div><h2>Education & development</h2></div><div className="timeline"><div><span className="timeline-date">2021 — 2025</span><h3>BSc in Information Systems</h3><p>Addis Ababa University · College of Natural and Computational Sciences</p></div><div><span className="timeline-date">2026</span><h3>Qiyas AI / Data Science Training</h3><p>Practical learning in data science, machine learning, analytics, and applied projects.</p></div><div><span className="timeline-date">CONTINUOUS LEARNING</span><h3>Data & AI development</h3><p>Building practical capability in analytics, BI, data engineering, and AI-enabled solutions.</p></div></div></div></section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><div className="section-kicker">05 / CONTACT</div><h2>Let&apos;s turn your next<br/><span>data challenge into impact.</span></h2><p>Interested in data analytics, BI, data engineering, or AI opportunities? I&apos;d be glad to connect.</p><a className="button primary" href="mailto:omerm5482@gmail.com">Get in touch <ArrowUpRight size={17}/></a><div className="contact-links"><a href="mailto:omerm5482@gmail.com"><Mail/> omerm5482@gmail.com</a><a href="https://github.com/Moha1420" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/mohammed-omer-12097740b/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div></div></section>
      <footer className="footer shell"><a className="brand" href="#home"><span className="brand-mark">MO</span><span>MOHAMMED OMER<span className="brand-sub">DATA & AI PORTFOLIO</span></span></a><span>© 2026 Mohammed Omer. Built with purpose.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}