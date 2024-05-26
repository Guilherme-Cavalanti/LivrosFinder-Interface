const topicos = [
    {
        "topic_descr": "Business",
        "topic_id_hl": 1
    },
    {
        "topic_descr": "Biology",
        "topic_id_hl": 12
    },
    {
        "topic_descr": "Geography",
        "topic_id_hl": 32
    },
    {
        "topic_descr": "Geology",
        "topic_id_hl": 38
    },
    {
        "topic_descr": "Housekeeping, leisure",
        "topic_id_hl": 41
    },
    {
        "topic_descr": "Art",
        "topic_id_hl": 57
    },
    {
        "topic_descr": "History",
        "topic_id_hl": 64
    },
    {
        "topic_descr": "Computers",
        "topic_id_hl": 69
    },
    {
        "topic_descr": "Literature",
        "topic_id_hl": 102
    },
    {
        "topic_descr": "Mathematics",
        "topic_id_hl": 113
    },
    {
        "topic_descr": "Medicine",
        "topic_id_hl": 147
    },
    {
        "topic_descr": "Science (General)",
        "topic_id_hl": 178
    },
    {
        "topic_descr": "Education",
        "topic_id_hl": 183
    },
    {
        "topic_descr": "Other Social Sciences",
        "topic_id_hl": 189
    },
    {
        "topic_descr": "Psychology",
        "topic_id_hl": 198
    },
    {
        "topic_descr": "Religion",
        "topic_id_hl": 205
    },
    {
        "topic_descr": "Technique",
        "topic_id_hl": 210
    },
    {
        "topic_descr": "Physics",
        "topic_id_hl": 264
    },
    {
        "topic_descr": "Physical Education and Sport",
        "topic_id_hl": 289
    },
    {
        "topic_descr": "Chemistry",
        "topic_id_hl": 296
    },
    {
        "topic_descr": "Economy",
        "topic_id_hl": 305
    },
    {
        "topic_descr": "Linguistics",
        "topic_id_hl": 314
    }
]

const linguas = [
    "Deutsch", "English", "French", "German", "Italian", "Japonese",
    "Korean", "Latin", "Mandarin", "Portuguese", "Russian", "Spanish"
]

const subtopicos = {
    "Business": [
        "Accounting",
        "Logistics",
        "Marketing",
        "Marketing Advertising",
        "Management",
        "Management Project Management",
        "MLM",
        "Responsibility and Business Ethics",
        "Trading",
        "E-Commerce"
    ],
    "Biology": [
        "Estestvoznananie",
        "Anthropology",
        "Anthropology Evolution",
        "Biostatistics",
        "Biotechnology",
        "Biophysics",
        "Biochemistry",
        "Biochemistry enologist",
        "Virology",
        "Genetics",
        "Zoology",
        "Zoology Paleontology",
        "Zoology Fish",
        "Microbiology",
        "Molecular",
        "Molecular Bioinformatics",
        "Plants Botany",
        "Plants Agriculture and Forestry",
        "Ecology"
    ],
    "Geography": [
        "Geodesy. Cartography",
        "Local History",
        "Local history Tourism",
        "Meteorology Climatology",
        "Russia"
    ],
    "Geology": [
        "Hydrogeology",
        "Mining"
    ],
    "Housekeeping, leisure": [
        "Aquaria",
        "Astrology",
        "Pet",
        "Games Board Games",
        "Games Chess",
        "Collecting",
        "Beauty image",
        "Cooking",
        "Fashion Jewelry",
        "Hunting and Game Management",
        "Benefits Homebrew",
        "Professions and Trades",
        "Handicraft",
        "Handicraft Cutting and Sewing",
        "Garden garden"
    ],
    "Art": [
        "Design Architecture",
        "Graphic Arts",
        "Cinema",
        "Music",
        "Music Guitar",
        "Photo"
    ],
    "History": [
        "American Studies",
        "Archaeology",
        "Military History",
        "Memoirs Biographies"
    ],
    "Computers": [
        "Web-design",
        "Algorithms and Data Structures",
        "Algorithms and Data Structures Cryptography",
        "Algorithms and Data Structures Image Processing",
        "Algorithms and Data Structures Pattern Recognition",
        "Algorithms and Data Structures Digital watermarks",
        "Databases",
        "Security",
        "Information Systems",
        "Information Systems EC businesses",
        "Cybernetics",
        "Cybernetics Artificial Intelligence",
        "Cryptography",
        "Lectures monographs",
        "Media",
        "Operating Systems",
        "Organization and Data Processing",
        "Programming",
        "Programming Libraries API",
        "Programming Games",
        "Programming Compilers",
        "Programming Modeling languages",
        "Programming Programming Languages",
        "Programs TeX LaTeX",
        "Software Office software",
        "Software Adobe Products",
        "Software Macromedia Products",
        "Software CAD",
        "Software Systems scientific computing",
        "Networking",
        "Networking Internet",
        "System Administration"
    ],
    "Literature": [
        "Fiction",
        "Library",
        "Detective",
        "Children",
        "Comics",
        "Literary",
        "Poetry",
        "Prose",
        "Folklore",
        "Fantasy"
    ],
    "Mathematics": [
        "Algebra",
        "Algebra Linear Algebra",
        "Algorithms and Data Structures",
        "Analysis",
        "Wavelets and signal processing",
        "Probability",
        "Computational Mathematics",
        "Geometry and Topology",
        "Puzzle",
        "Dynamical Systems",
        "Discrete Mathematics",
        "Differential Equations",
        "Combinatorics",
        "The complex variable",
        "Computer Algebra",
        "Lectures",
        "Logic",
        "Mathematicsematical Statistics",
        "Mathematicsematical Physics",
        "Continued fractions",
        "Fuzzy Logic and Applications",
        "Optimal control",
        "Optimization. Operations Research",
        "Applied Mathematicsematics",
        "Symmetry and group",
        "Automatic Control Theory",
        "Graph Theory",
        "Game Theory",
        "Operator Theory",
        "Number Theory",
        "Functional Analysis",
        "Numerical Analysis",
        "Elementary"
    ],
    "Medicine": [
        "Anatomy and physiology",
        "Anesthesiology and Intensive Care",
        "Diseases",
        "Diseases Internal Medicine",
        "Histology",
        "Homeopathy",
        "Dermatology",
        "Diabetes",
        "immunology",
        "Infectious diseases",
        "Yoga",
        "Cardiology",
        "Chinese Medicine",
        "Clinical Medicine",
        "Molecular Medicine",
        "Natural Medicine",
        "Popular scientific literature",
        "Neurology",
        "Oncology",
        "ENT",
        "Ophthalmology",
        "Pediatrics",
        "Dentistry Orthodontics",
        "Trial",
        "Therapy",
        "Pharmacology",
        "Feng Shui",
        "Surgery Orthopedics",
        "Endocrinology",
        "Epidemiology"
    ],
    "Science (General)": [
        "International Conferences and Symposiums",
        "Science of Science",
        "Scientific-popular",
        "Scientific and popular Journalism"
    ],
    "Education": [
        "Theses abstracts",
        "International Conferences and Symposiums",
        "self-help books",
        "Elementary",
        "Encyclopedia"
    ],
    "Other Social Sciences": [
        "Journalism Media",
        "Cultural",
        "Politics",
        "Politics International Relations",
        "Sociology",
        "Philosophy",
        "Philosophy Critical Thinking",
        "Ethnography"
    ],
    "Psychology": [
        "Hypnosis",
        "The art of communication",
        "Love erotic",
        "Neuro-Linguistic Programming",
        "Pedagogy",
        "Creative Thinking"
    ],
    "Religion": [
        "Buddhism",
        "kabbalah",
        "Orthodoxy",
        "Esoteric Mystery"
    ],
    "Technique": [
        "Automation",
        "Aerospace Equipment",
        "Water Treatment",
        "Military equipment",
        "Military equipment Weapon",
        "Publishing",
        "Space Science",
        "Light Industry",
        "Materials",
        "Mechanical Engineering",
        "Metallurgy",
        "Metrology",
        "Safety and Security",
        "Nanotechnology",
        "Oil and Gas Technologies",
        "Oil and Gas Technologies Pipelines",
        "Regulatory Literature",
        "Patent Business. Ingenuity. Innovation",
        "Food Manufacturing",
        "Instrument",
        "Industry Metallurgy",
        "industrial equipment and technology",
        "Missiles",
        "Communication",
        "Communication Telecommunications",
        "Construction",
        "Construction Ventilation and Air Conditioning",
        "Construction Renovation and interior design",
        "Construction Renovation and interior design Saunas",
        "Construction Cement Industry",
        "Heat",
        "Fuel Technology",
        "Transport",
        "Transportation Aviation",
        "Transportation Cars motorcycles",
        "Transportation Rail",
        "Transportation Ships",
        "Refrigeration",
        "Electronics",
        "Electronics Hardware",
        "Electronics Fiber Optics",
        "Electronics Home Electronics",
        "Electronics Microprocessor Technology",
        "Electronics Signal Processing",
        "Electronics Radio",
        "Electronics Robotics",
        "Electronics VLSI",
        "Electronics TV. Video",
        "Electronics Telecommunications",
        "Electronics Electronics",
        "Energy",
        "Energy Renewable Energy"
    ],
    "Physics": [
        "Astronomy",
        "Astronomy Astrophysics",
        "Geophysics",
        "Quantum Mechanics",
        "Quantum Physics",
        "Crystal Physics",
        "Mechanics",
        "Mechanics Oscillations and Waves",
        "Mechanics Mechanics of deformable bodies",
        "Mechanics Fluid Mechanics",
        "Mechanics Nonlinear dynamics and chaos",
        "Mechanics Strength of Materials",
        "Mechanics Theory of Elasticity",
        "General courses",
        "Optics",
        "Spectroscopy",
        "Theory of Relativity and Gravitation",
        "Thermodynamics and Statistical Mechanics",
        "Physics of the Atmosphere",
        "Physics of lasers",
        "Plasma Physics",
        "Solid State Physics",
        "Electricity and Magnetism",
        "Electrodynamics"
    ],
    "Physical Education and Sport": [
        "Bodybuilding",
        "Martial Arts",
        "Bike",
        "Survival",
        "Sport fishing",
        "Fencing"
    ],
    "Chemistry": [
        "Analytical Chemistry",
        "Materials",
        "Inorganic Chemistry",
        "Organic Chemistry",
        "Pyrotechnics and explosives",
        "Pharmacology",
        "Physical Chemistry",
        "Chemical"
    ],
    "Economy": [
        "Investing",
        "Mathematical Economics",
        "Popular",
        "Markets",
        "Econometrics",
        "Criminology Forensic Science",
        "Criminology Court. examination",
        "Law"
    ],
    "Linguistics": [
        "Foreign",
        "Foreign English",
        "Foreign French",
        "Comparative Studies",
        "Linguistics",
        "Rhetoric",
        "Russian Language",
        "Dictionaries",
        "Stylistics"
    ],
    "": []
}
export default {
    topicos,
    linguas,
    subtopicos
}