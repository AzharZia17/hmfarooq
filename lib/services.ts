import { IMAGES } from "@/lib/images";

export type Offering = { name: string; detail: string };
export type ServiceGroup = "People" | "Building & finishing" | "Lifting & logistics";
export type ServiceImage = { src: string; alt: string };

export type Service = {
  slug: string;
  number: string;
  group: ServiceGroup;
  title: string;
  /** shorter name for lists, menus and the footer */
  short: string;
  tagline: string;
  /** one or two sentences: used in lists and on the services page */
  description: string;
  intro: string[];
  offerings: Offering[];
  suitedFor: string[];
  toBrief: string[];
  /** Only set where we hold a photograph that genuinely shows the work. */
  image?: ServiceImage;
  supportingImages: ServiceImage[];
  whatsappMessage: string;
  formValue: string;
  seoTitle: string;
  seoDescription: string;
};

const LICENSE = "HM Farooq Constructing Company, License No. 222095.";
const wa = (what: string) => `Hello HM Farooq Constructing Company, I would like to inquire about ${what}.`;

export const SERVICES: Service[] = [
  {
    slug: "manpower",
    number: "01",
    group: "People",
    title: "Manpower & Labor Supply",
    short: "Manpower & labor supply",
    tagline: "People for the work in front of you.",
    description: "Labor and skilled workers for construction projects, businesses and daily operations, arranged around your headcount and start date.",
    intro: [
      "Projects slow down when the right people are not on site. We help contractors, developers and businesses in Qatar put together the workforce their projects and daily operations need, so supervisors can concentrate on the work rather than on staffing it.",
      "Tell us the roles, headcount and start date. We confirm what we can supply, and the arrangement is agreed up front. Worker categories and availability depend on your requirement and are always confirmed with you directly.",
    ],
    offerings: [
      { name: "Construction labor", detail: "Hands for building, finishing and site preparation work." },
      { name: "General workers", detail: "Flexible support for material handling, cleaning, loading and general duties." },
      { name: "Skilled workers", detail: "Trade-skilled workers for specific tasks, subject to your requirement and availability." },
      { name: "Site support personnel", detail: "Assistants who keep a site organised and moving." },
      { name: "Project workforce support", detail: "A workforce arranged for the length of a defined project." },
      { name: "Workforce assistance", detail: "Help scaling a team up or down as workload changes." },
    ],
    suitedFor: ["Contractors and subcontractors", "Developers and property owners", "Facility and operations teams", "Businesses with project-based or seasonal workloads"],
    toBrief: ["Trades or roles needed", "Number of workers", "Start date and expected duration", "Site location", "Working hours and safety requirements"],
    image: IMAGES.serviceManpower,
    supportingImages: [
      { src: "/images/site-team-sunset.jpg", alt: "A team in safety vests and helmets inspecting a site at sunset, with cranes behind" },
      { src: "/images/hardhat-closeup.jpg", alt: "A gloved hand holding a yellow safety helmet" },
    ],
    whatsappMessage: wa("your Manpower / Labor Supply services"),
    formValue: "Manpower & Labor Supply",
    seoTitle: "Manpower & Labor Supply in Qatar",
    seoDescription: `Manpower and labor supply in Qatar for construction projects, businesses and operations: construction labor, skilled workers and site support. ${LICENSE}`,
  },
  {
    slug: "construction",
    number: "02",
    group: "Building & finishing",
    title: "Construction Contracts",
    short: "Construction contracts",
    tagline: "From scope to handover, one accountable team.",
    description: "Building, renovation and improvement works carried out to a defined scope and schedule, with one point of responsibility.",
    intro: [
      "We carry out construction works under contract, with attention to workmanship, coordination and timelines. The job might be the renovation of an existing building, an improvement to a commercial space or a package of works within a larger project.",
      "Whatever the size, we work to the scope you define, keep the site organised and keep you informed. Specialist or engineering requirements are discussed openly at the start so expectations are clear on both sides.",
    ],
    offerings: [
      { name: "Construction contracting", detail: "Works delivered under a defined contract, scope and schedule." },
      { name: "Building works", detail: "Building and finishing works carried out to your requirements." },
      { name: "General contracting", detail: "Coordination of trades and work packages with one point of responsibility." },
      { name: "Project support", detail: "Added capacity for contractors with a heavy workload." },
      { name: "Renovation and improvement", detail: "Upgrading, refurbishing and improving existing buildings." },
      { name: "Site coordination", detail: "Keeping people, materials and sequencing organised on site." },
    ],
    suitedFor: ["Owners planning renovation or improvement", "Developers and main contractors seeking support", "Businesses upgrading or fitting out premises", "Facility owners who need works done to a schedule"],
    toBrief: ["Type of building and location", "Scope of work, with drawings if available", "Desired start and completion dates", "Existing site conditions", "Any approvals or site rules to follow"],
    image: IMAGES.serviceConstruction,
    supportingImages: [
      { src: "/images/rebar-workers.jpg", alt: "Workers tying reinforcement steel at sunrise" },
      { src: "/images/construction-rebar-concrete.jpg", alt: "Worker curing a reinforced concrete deck beside a concrete pump" },
    ],
    whatsappMessage: wa("your Construction Contracts"),
    formValue: "Construction Contracts",
    seoTitle: "Construction Contractors in Qatar",
    seoDescription: `Construction contracting, building works, renovation and site coordination in Qatar. ${LICENSE}`,
  },
  {
    slug: "painting",
    number: "03",
    group: "Building & finishing",
    title: "Building Painting Contracts",
    short: "Building painting",
    tagline: "A finish that lasts as long as it looks good.",
    description: "Interior, exterior and whole-building painting delivered as a contract, from surface preparation to the final coat.",
    intro: [
      "Paint is the part of a building everyone sees and the part that protects it. In Qatar's sun, heat and dust, exterior surfaces in particular work hard. We take on painting contracts for residential, commercial and other properties, covering preparation, application and finishing as one scope of work.",
      "Good results are decided before the first coat: cleaning, repairing and priming surfaces so the paint bonds and lasts. That preparation is built into how we plan every painting job.",
    ],
    offerings: [
      { name: "Interior painting", detail: "Walls, ceilings, doors and trim in homes, offices and commercial spaces." },
      { name: "Exterior painting", detail: "Facades and external surfaces exposed to sun, heat, humidity and dust." },
      { name: "Building painting", detail: "Painting of a complete building, coordinated as a single job." },
      { name: "Surface preparation", detail: "Cleaning, filling, sanding and priming so the finish bonds properly." },
      { name: "Repainting and maintenance", detail: "Refreshing tired surfaces and periodic upkeep for managed properties." },
      { name: "Painting contract execution", detail: "A defined scope, area and schedule, delivered under contract." },
    ],
    suitedFor: ["Property owners and landlords", "Property managers and facility teams", "Contractors needing a painting subcontractor", "Businesses refreshing offices, shops and showrooms"],
    toBrief: ["Type of building and location", "Interior, exterior or both", "Approximate area, floors or number of units", "Current condition of surfaces", "Target dates and any access constraints"],
    image: IMAGES.servicePainting,
    supportingImages: [
      { src: "/images/painter-bucket.jpg", alt: "A painter in a harness rolling paint onto a building wall from a platform" },
      { src: "/images/painters-rope-pair.jpg", alt: "Two rope-access painters working down a white facade" },
    ],
    whatsappMessage: wa("your Building Painting Contracts"),
    formValue: "Building Painting Contracts",
    seoTitle: "Building Painting Contractors in Qatar",
    seoDescription: `Interior, exterior and building painting contracts in Qatar, including surface preparation and repainting. ${LICENSE}`,
  },
  {
    slug: "hospitality",
    number: "04",
    group: "People",
    title: "Hospitality Services",
    short: "Hospitality services",
    tagline: "Service people guests notice for the right reasons.",
    description: "Hospitality personnel and operational support for hotels, venues and facilities, for busy periods or ongoing daily operations.",
    intro: [
      "In hospitality, the experience guests remember is shaped by the people delivering it. We support hotels, venues and facilities with hospitality personnel and operational assistance, with the focus on professionalism, presentation and consistent service.",
      "Whether the need is a few additional team members for a busy period or ongoing support for daily operations, we start by understanding your property, your standards and your schedule.",
    ],
    offerings: [
      { name: "Hospitality manpower", detail: "Personnel to support hospitality operations." },
      { name: "Hotel and facility support", detail: "Help with the day-to-day running of hotels and facilities." },
      { name: "Service personnel", detail: "Front-of-house and service roles." },
      { name: "Operational assistance", detail: "Extra capacity for events, peak periods and operational needs." },
      { name: "Customer service support", detail: "Personnel focused on guest and customer interaction." },
    ],
    suitedFor: ["Hotels and serviced apartments", "Restaurants and venues", "Event and facility operators", "Corporate sites that need service staff"],
    toBrief: ["Type of property or venue", "Roles and number of staff", "Shift pattern and schedule", "Event, seasonal or ongoing need", "Service and presentation standards expected"],
    image: IMAGES.serviceHospitality,
    supportingImages: [{ src: "/images/hall-katara-doha.jpg", alt: "Large multi-purpose hall interior in Doha" }],
    whatsappMessage: wa("your Hospitality Services"),
    formValue: "Hospitality Services",
    seoTitle: "Hospitality Services in Qatar",
    seoDescription: `Hospitality personnel, facility support and customer service support for hotels and venues in Qatar. ${LICENSE}`,
  },
  {
    slug: "lifting-equipment",
    number: "05",
    group: "Lifting & logistics",
    title: "Lifting Services, Equipment & Operators",
    short: "Lifting equipment & operators",
    tagline: "The right equipment, with someone qualified to run it.",
    description: "Lifting equipment supplied with operators for construction and project sites, matched to the load and the conditions on site.",
    intro: [
      "Lifting is planned work. The equipment, its capacity, the operator and the conditions on site all have to fit the load before anything leaves the ground. We supply lifting equipment together with operators for construction and project requirements in Qatar.",
      "Tell us what has to be lifted, how heavy it is, where it has to go and what the site access looks like. We confirm the equipment and operator arrangement with you before mobilising, including any site safety rules we need to follow.",
    ],
    offerings: [
      { name: "Lifting equipment supply", detail: "Equipment for site and project use, matched to the load and the work." },
      { name: "Operators", detail: "Operators provided with the equipment for the duration of the job." },
      { name: "Hire for defined periods", detail: "Equipment and operators for a single task or a longer programme." },
      { name: "Site safety coordination", detail: "Working to the lifting and access rules of your site." },
    ],
    suitedFor: ["Main contractors and subcontractors", "Developers with active sites", "Facility teams with plant or equipment to move", "Projects with a short-term lifting requirement"],
    toBrief: ["What is to be lifted and its approximate weight", "Lift height and reach", "Site location and access", "Duration and working hours", "Site safety and permit requirements"],
    image: { src: "/images/project-crane-site.jpg", alt: "Building under construction with a tower crane" },
    supportingImages: [{ src: "/images/crane-sunset.jpg", alt: "An excavator and scaffolding silhouetted against a sunset" }],
    whatsappMessage: wa("your Lifting Services, Equipment and Operators"),
    formValue: "Lifting Services, Equipment & Operators",
    seoTitle: "Lifting Equipment & Operators in Qatar",
    seoDescription: `Lifting services, lifting equipment supply and operators for construction and project sites in Qatar. ${LICENSE}`,
  },
  {
    slug: "lifting-activities",
    number: "06",
    group: "Lifting & logistics",
    title: "Lifting Activities",
    short: "Lifting activities",
    tagline: "Heavy items moved into position, safely and in sequence.",
    description: "Lifting and positioning of materials and equipment on site, planned around the construction sequence.",
    intro: [
      "Where the equipment service supplies the machine and operator, lifting activities cover the work itself: raising materials to height, positioning heavy items and keeping lifts in step with what the site needs next.",
      "Lifts are planned with you in advance so that the people, the equipment and the area around the lift are ready before work begins.",
    ],
    offerings: [
      { name: "Material lifting", detail: "Raising construction materials to working levels." },
      { name: "Positioning heavy items", detail: "Placing equipment and components where they are needed." },
      { name: "Loading and unloading", detail: "Handling deliveries and dispatches at site." },
      { name: "Lift planning with the site team", detail: "Agreeing sequence, area and timing before each lift." },
    ],
    suitedFor: ["Contractors during structural and fit-out stages", "Owners installing heavy equipment", "Sites receiving large deliveries", "Projects needing lifting support on set days"],
    toBrief: ["Items to be lifted and their size and weight", "Where they start and where they must end up", "Preferred dates and working hours", "Site access and exclusion zones", "Permit or safety requirements"],
    image: { src: "/images/construction-rebar-concrete.jpg", alt: "Concrete pump boom working over a reinforced concrete deck" },
    supportingImages: [],
    whatsappMessage: wa("your Lifting Activities"),
    formValue: "Lifting Activities",
    seoTitle: "Lifting Activities for Construction Sites in Qatar",
    seoDescription: `Material lifting, positioning and loading support for construction sites in Qatar. ${LICENSE}`,
  },
  {
    slug: "gypsum-ceiling",
    number: "07",
    group: "Building & finishing",
    title: "Gypsum & Ceiling Work",
    short: "Gypsum & ceiling work",
    tagline: "Clean lines overhead and between rooms.",
    description: "Gypsum partitions and ceilings for offices, hotels and residential interiors, finished ready for painting.",
    intro: [
      "Ceilings and partitions shape how an interior feels and how it is divided. We carry out gypsum and ceiling work for new fit-outs and for changes to existing spaces, with finishing prepared for the next trade.",
      "Because we also handle painting, a gypsum package can run straight into finishing without a hand-over between companies.",
    ],
    offerings: [
      { name: "Gypsum partitions", detail: "Dividing walls for offices, rooms and commercial layouts." },
      { name: "False ceilings", detail: "Suspended ceilings to the layout and level you specify." },
      { name: "Ceiling finishing", detail: "Jointing and finishing to a surface ready for paint." },
      { name: "Repair and modification", detail: "Alterations and repairs in existing interiors." },
    ],
    suitedFor: ["Fit-out contractors", "Owners refurbishing offices and shops", "Hotels and commercial interiors", "Residential renovation projects"],
    toBrief: ["Area and room layout", "Ceiling heights and any services above", "Drawings, if available", "New work or alteration", "Target dates and access"],
    image: { src: "/images/project-interior-painter.jpg", alt: "Painter rolling paint onto a finished interior wall" },
    supportingImages: [],
    whatsappMessage: wa("your Gypsum and Ceiling Work"),
    formValue: "Gypsum & Ceiling Work",
    seoTitle: "Gypsum & Ceiling Work in Qatar",
    seoDescription: `Gypsum partitions, false ceilings and ceiling finishing for interiors in Qatar. ${LICENSE}`,
  },
  {
    slug: "ac-workers",
    number: "08",
    group: "Building & finishing",
    title: "AC Workers",
    short: "AC workers",
    tagline: "Hands for air-conditioning installation and upkeep.",
    description: "Air-conditioning technicians and helpers for installation, servicing and maintenance work.",
    intro: [
      "In Qatar's climate, air conditioning is part of how a building works. We provide AC workers to support installation, servicing and maintenance for contractors, property managers and facility teams.",
      "Roles, numbers and availability are agreed against your requirement, whether you need support for a single installation or ongoing maintenance cover.",
    ],
    offerings: [
      { name: "Installation support", detail: "Workers for fitting and commissioning support on AC works." },
      { name: "Servicing and maintenance", detail: "Routine upkeep for managed properties and facilities." },
      { name: "Technicians and helpers", detail: "The mix of roles your job needs, confirmed with you." },
      { name: "Project or ongoing cover", detail: "Short assignments or longer arrangements." },
    ],
    suitedFor: ["MEP and building contractors", "Property and facility managers", "Hotels and commercial buildings", "Owners with maintenance programmes"],
    toBrief: ["Type of work: installation, servicing or maintenance", "Roles and number of workers", "Building type and location", "Start date and duration", "Site access and safety rules"],
    image: { src: "/images/ac-worker.jpg", alt: "An AC technician in a blue helmet servicing outdoor air-conditioning units on a ladder" },
    supportingImages: [],
    whatsappMessage: wa("your AC Workers services"),
    formValue: "AC Workers",
    seoTitle: "AC Workers in Qatar",
    seoDescription: `Air-conditioning workers for installation, servicing and maintenance in Qatar. ${LICENSE}`,
  },
  {
    slug: "plumbing",
    number: "09",
    group: "Building & finishing",
    title: "Plumbing",
    short: "Plumbing",
    tagline: "Water in, waste out, with no surprises.",
    description: "Plumbing works and workers for new installations, repairs and maintenance in residential and commercial buildings.",
    intro: [
      "Plumbing sits behind walls and under floors, so it needs to be right the first time. We carry out plumbing work and supply plumbing workers for new installations, repairs and maintenance.",
      "Describe the building and the scope and we will confirm how we would staff and sequence it alongside other trades on site.",
    ],
    offerings: [
      { name: "Pipework installation", detail: "Supply and drainage pipework for new works and alterations." },
      { name: "Fixtures and fittings", detail: "Installation of sanitary fixtures and related fittings." },
      { name: "Repairs and maintenance", detail: "Fault finding, repair and upkeep in existing buildings." },
      { name: "Plumbing workers", detail: "Plumbers and helpers for contractors who need added capacity." },
    ],
    suitedFor: ["Building and fit-out contractors", "Property managers and landlords", "Hotels and commercial premises", "Homeowners planning renovation"],
    toBrief: ["New installation, repair or maintenance", "Building type and location", "Scope and approximate size", "Drawings, if available", "Dates and access"],
    image: { src: "/images/construction-site-team.jpg", alt: "Site team working beside scaffolding, with a worker fitting pipework in the foreground" },
    supportingImages: [],
    whatsappMessage: wa("your Plumbing services"),
    formValue: "Plumbing",
    seoTitle: "Plumbing Services in Qatar",
    seoDescription: `Plumbing installation, repair and maintenance works in Qatar. ${LICENSE}`,
  },
  {
    slug: "transport-logistics",
    number: "10",
    group: "Lifting & logistics",
    title: "Transportation & Logistics",
    short: "Transportation & logistics",
    tagline: "Getting people, materials and equipment where they are needed.",
    description: "Transport of workers, materials and equipment to and between sites, arranged around your schedule.",
    intro: [
      "A site only runs as well as its deliveries and its people's journeys to work. We arrange transportation and logistics support for workforce movement and for materials and equipment going to and between sites.",
      "Vehicle type, capacity and frequency are confirmed against what you need to move and the schedule you work to.",
    ],
    offerings: [
      { name: "Worker transportation", detail: "Moving teams to and from site." },
      { name: "Materials transport", detail: "Delivery of materials to project locations." },
      { name: "Equipment movement", detail: "Transporting equipment between sites and yards." },
      { name: "Site logistics support", detail: "Helping deliveries and movements fit the site's programme." },
    ],
    suitedFor: ["Contractors with several sites", "Projects with scheduled deliveries", "Businesses moving staff or equipment", "Clients combining manpower and transport"],
    toBrief: ["What is to be transported", "Pick-up and drop-off locations", "Frequency and timing", "Quantities, size and weight", "Access and site rules"],
    image: { src: "/images/workers-paving.jpg", alt: "A road crew working behind a paving machine" },
    supportingImages: [],
    whatsappMessage: wa("your Transportation and Logistics services"),
    formValue: "Transportation & Logistics",
    seoTitle: "Transportation & Logistics in Qatar",
    seoDescription: `Worker, materials and equipment transportation and site logistics in Qatar. ${LICENSE}`,
  },
];

export const SERVICE_GROUPS: { name: ServiceGroup; blurb: string }[] = [
  { name: "People", blurb: "Workforce and service personnel, supplied for the length of the need." },
  { name: "Building & finishing", blurb: "Contracted works from structure to the final surface, and the trades in between." },
  { name: "Lifting & logistics", blurb: "Equipment, operators and transport that keep a site supplied and moving." },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
