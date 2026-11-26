export const COMPANY = {
  name: "HM FAROOQ CONSTRUCTING COMPANY",
  shortName: "HM Farooq Constructing Company",
  licenseNo: "222095",
  country: "Qatar",
  phones: [
    { display: "+974 50857073", tel: "+97450857073" },
    { display: "+974 77463757", tel: "+97477463757" },
  ],
  whatsappNumber: "97450857073",
  defaultWhatsAppMessage:
    "Hello HM Farooq Constructing Company, I would like to inquire about your services.",
  slogan: "Building a Better Tomorrow.",
  tagline: "Reliable construction, manpower and specialist trade services supporting projects and properties across Qatar.",
} as const;

// Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.your-domain.com)
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export function whatsappLink(message: string = COMPANY.defaultWhatsAppMessage) {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = (tel: string) => `tel:${tel}`;

export const NAV_LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export const COMMITMENTS = [
  { title: "Scope agreed before work starts", text: "What is included, who is responsible for what and when it should be done are settled at the outset, not discovered halfway through a job." },
  { title: "Straight answers", text: "If a job is outside what we can do well, or a date is not realistic, we say so early. Clients can then plan around what we tell them." },
  { title: "Safety is part of the job", text: "Protective equipment, safe methods and respect for each site's rules come before the deadline, on every assignment." },
  { title: "A person to call", text: "Two phone lines and WhatsApp reach the team directly. You can talk a requirement through before committing to anything." },
] as const;

export const PROCESS_STEPS = [
  { title: "Inquiry", text: "Call, message on WhatsApp or send the form. Tell us what you need, where, and by when." },
  { title: "Requirements review", text: "We go through the detail with you: scope, quantities, site conditions, schedule, and any safety or access rules." },
  { title: "Planning", text: "We confirm what we can deliver and how it will be organised, covering people, materials, sequence and timing, before anything starts." },
  { title: "Execution", text: "Teams mobilise and the work is coordinated and checked as it progresses, with you kept informed along the way." },
  { title: "Handover", text: "We complete the assignment, review the result with you and remain available if anything needs attention." },
] as const;

export const FAQS = [
  { q: "What should I include in my inquiry?", a: "The more specific, the faster we can respond: what you need (roles, trades or type of work), how much of it, where the site is, and your start date and duration." },
  { q: "Can I combine services on one project?", a: "Yes. A renovation might need construction works, gypsum and painting; a hotel might need hospitality staff and plumbing or AC support. Describe the whole picture and we will plan it together." },
  { q: "Which areas do you serve?", a: "We are a Qatar-based company serving requirements in Qatar. Tell us your site location and we will confirm how we can support it." },
  { q: "Can I just call instead of using the form?", a: "Of course. Call +974 50857073 or +974 77463757, or message us on WhatsApp. The form is there for clients who prefer to write things down." },
  { q: "How do I confirm who you are?", a: "HM Farooq Constructing Company operates under Qatar business license number 222095, which you can quote to us at any time." },
] as const;
