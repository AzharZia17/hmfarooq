import type { LucideIcon } from "lucide-react";
import { Brush, Building2, ConciergeBell, Users } from "lucide-react";
import { IMAGES } from "@/lib/images";

export type Offering = { name: string; detail: string };

export type Service = {
  slug: "manpower" | "painting" | "hospitality" | "construction";
  number: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  /** one-line summary used on cards */
  description: string;
  /** longer copy used on the services page and detail page */
  intro: string[];
  offerings: Offering[];
  suitedFor: string[];
  toBrief: string[];
  image: { src: string; alt: string };
  supportingImages: { src: string; alt: string }[];
  whatsappMessage: string;
  formValue: string;
  seoTitle: string;
  seoDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "manpower",
    number: "01",
    icon: Users,
    title: "Manpower Supply",
    tagline: "People for the work in front of you.",
    description: "Dependable manpower and labor solutions to support construction projects, businesses and operations across Qatar.",
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
      { src: "/images/workers-masonry.jpg", alt: "Workers in safety helmets and high-visibility vests handling building materials" },
      { src: "/images/workers-paving.jpg", alt: "Road crew working beside paving machinery" },
    ],
    whatsappMessage: "Hello HM Farooq Constructing Company, I would like to inquire about your Manpower Supply / Labor Supply services.",
    formValue: "Manpower Supply",
    seoTitle: "Manpower & Labor Supply in Qatar",
    seoDescription: "Manpower and labor supply in Qatar for construction projects, businesses and operations: construction labor, skilled workers and site support. HM Farooq Constructing Company, License No. 222095.",
  },
  {
    slug: "painting",
    number: "02",
    icon: Brush,
    title: "Building Painting Contracts",
    tagline: "A finish that lasts as long as it looks good.",
    description: "Interior, exterior and whole-building painting delivered as a contract, from preparation to final coat.",
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
      { src: "/images/painting-suspended-platform.jpg", alt: "Painters rolling paint onto an exterior wall from a suspended platform" },
      { src: "/images/painting-scaffold.jpg", alt: "Painters in white overalls working on scaffolding" },
    ],
    whatsappMessage: "Hello HM Farooq Constructing Company, I would like to inquire about your Building Painting Contracts.",
    formValue: "Building Painting",
    seoTitle: "Building Painting Contractors in Qatar",
    seoDescription: "Interior, exterior and building painting contracts in Qatar, including surface preparation and repainting. HM Farooq Constructing Company, License No. 222095.",
  },
  {
    slug: "hospitality",
    number: "03",
    icon: ConciergeBell,
    title: "Hospitality Services",
    tagline: "Service people guests notice for the right reasons.",
    description: "Hospitality personnel and operational support for hotels, venues and facilities.",
    intro: [
      "In hospitality, the experience guests remember is shaped by the people delivering it. We support hotels, venues and facilities with hospitality personnel and operational assistance, with the focus on professionalism, presentation and consistent service.",
      "Whether the need is a few additional team members for a busy period or ongoing support for daily operations, we start by understanding your property, your standards and your schedule.",
    ],
    offerings: [
      { name: "Hospitality manpower", detail: "Personnel to support hospitality operations." },
      { name: "Hotel and facility support", detail: "Help with the day-to-day running of hotels and facilities." },
      { name: "Service personnel", detail: "Front-of-house and service roles." },
      { name: "Hospitality operational assistance", detail: "Extra capacity for events, peak periods and operational needs." },
      { name: "Customer service support", detail: "Personnel focused on guest and customer interaction." },
    ],
    suitedFor: ["Hotels and serviced apartments", "Restaurants and venues", "Event and facility operators", "Corporate sites that need service staff"],
    toBrief: ["Type of property or venue", "Roles and number of staff", "Shift pattern and schedule", "Event, seasonal or ongoing need", "Service and presentation standards expected"],
    image: IMAGES.serviceHospitality,
    supportingImages: [{ src: "/images/hall-katara-doha.jpg", alt: "Large multi-purpose hall interior in Doha" }],
    whatsappMessage: "Hello HM Farooq Constructing Company, I would like to inquire about your Hospitality Services.",
    formValue: "Hospitality Services",
    seoTitle: "Hospitality Services in Qatar",
    seoDescription: "Hospitality personnel, facility support and customer service support for hotels and venues in Qatar. HM Farooq Constructing Company, License No. 222095.",
  },
  {
    slug: "construction",
    number: "04",
    icon: Building2,
    title: "Construction Contracts",
    tagline: "From scope to handover, one accountable team.",
    description: "Building, renovation and improvement works delivered to a defined scope and schedule.",
    intro: [
      "We carry out construction works under contract, with attention to workmanship, coordination and timelines. The job might be the renovation of an existing building, an improvement to a commercial space or a package of works within a larger project.",
      "Whatever the size, we work to the scope you define, keep the site organised and keep you informed. Specialist or engineering requirements are discussed openly at the start so expectations are clear on both sides.",
    ],
    offerings: [
      { name: "Construction contracting", detail: "Works delivered under a defined contract, scope and schedule." },
      { name: "Building works", detail: "Building and finishing works carried out to your requirements." },
      { name: "General contracting", detail: "Coordination of trades and work packages with one point of responsibility." },
      { name: "Project support", detail: "Added capacity for contractors with a heavy workload." },
      { name: "Renovation and improvement works", detail: "Upgrading, refurbishing and improving existing buildings." },
      { name: "Site coordination", detail: "Keeping people, materials and sequencing organised on site." },
    ],
    suitedFor: ["Owners planning renovation or improvement", "Developers and main contractors seeking support", "Businesses upgrading or fitting out premises", "Facility owners who need works done to a schedule"],
    toBrief: ["Type of building and location", "Scope of work, with drawings if available", "Desired start and completion dates", "Existing site conditions", "Any approvals or site rules to follow"],
    image: IMAGES.serviceConstruction,
    supportingImages: [
      { src: "/images/construction-rebar-concrete.jpg", alt: "Worker curing a reinforced concrete deck beside a concrete pump" },
      { src: "/images/construction-site-team.jpg", alt: "Site team working beside scaffolding and a crane" },
    ],
    whatsappMessage: "Hello HM Farooq Constructing Company, I would like to inquire about your Construction Contracts.",
    formValue: "Construction Contracts",
    seoTitle: "Construction Contractors in Qatar",
    seoDescription: "Construction contracting, building works, renovation and site coordination in Qatar. HM Farooq Constructing Company, License No. 222095.",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
