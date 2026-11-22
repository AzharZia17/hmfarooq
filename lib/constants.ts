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
  tagline: "Reliable manpower, painting, hospitality, and construction contracting services in Qatar.",
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
  { key: "why", label: "Why Choose Us", href: "/why-choose-us" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export const VALUES = [
  { name: "Reliability", meaning: "When we agree to a date or a headcount, we plan around it. Clients should be able to build their own schedules on ours." },
  { name: "Professionalism", meaning: "Clear communication, tidy conduct on site and straight answers, including when the answer is that we cannot take a job on." },
  { name: "Quality", meaning: "A finished surface, a completed structure or a well-run service floor is judged by details. We treat them as the job itself." },
  { name: "Safety", meaning: "Protective equipment, safe working methods and respect for site rules come first, whatever the deadline." },
  { name: "Commitment", meaning: "We stay with an assignment until it is properly finished, and we remain reachable afterwards." },
  { name: "Customer Satisfaction", meaning: "Repeat work and recommendations matter more to us than any single contract." },
] as const;

export const STRENGTHS = [
  { icon: "Layers", title: "One company, four needs", text: "Manpower, painting, hospitality support and construction contracts are handled under one roof, so a project that needs more than one has a single point of contact.", points: ["One brief and one point of contact", "Combine services on a single project", "The same standards across every service"] },
  { icon: "BadgeCheck", title: "Registered and open about it", text: "Our Qatar business license number, 222095, is shown across this site because clients should be able to check who they are dealing with.", points: ["License No. 222095 shown on every page", "Company name and contact details always visible", "You always know who you are contracting with"] },
  { icon: "PhoneCall", title: "Direct access", text: "Two phone lines and WhatsApp. You can speak to us before you commit to anything, without filling in a form first.", points: ["Two phone lines and WhatsApp", "Talk to the team before you commit to anything", "A written inquiry form if you prefer it"] },
  { icon: "ClipboardList", title: "Scope in plain terms", text: "What is included, who is responsible for what and when it should be done are agreed before work starts, not discovered halfway through.", points: ["Scope, responsibilities and schedule agreed first", "Questions raised early, not halfway through", "Clear communication through to handover"] },
  { icon: "HardHat", title: "Safety and finish, not extras", text: "Protective equipment and clean, careful workmanship are part of every assignment rather than something clients have to ask for.", points: ["Protective equipment as standard", "Surface preparation and detail work built in", "Organised, tidy sites"] },
  { icon: "Handshake", title: "Built for repeat work", text: "We would rather earn your next project than simply win this one, which shapes how we communicate and how we finish.", points: ["We plan for your next project, not just this one", "Straight answers, even when the answer is no", "Open to long-term working arrangements"] },
] as const;

export const COMPARISON = {
  without: ["Four briefs to write, four contacts to chase", "Gaps and hand-offs between trades", "Different standards from each supplier", "Updates you have to ask for"],
  with: ["One conversation covers every service you need", "One team coordinating the whole job", "A single standard of workmanship and conduct", "Clear communication from inquiry to handover"],
} as const;

export const PROCESS_STEPS = [
  { title: "Inquiry", text: "Call, message on WhatsApp or send the form. Tell us what you need, where, and by when." },
  { title: "Requirements review", text: "We go through the detail with you: scope, quantities, site conditions, schedule, and any safety or access rules." },
  { title: "Planning", text: "We confirm what we can deliver and how it will be organised, covering people, materials, sequence and timing, before anything starts." },
  { title: "Execution", text: "Teams mobilise and the work is coordinated and checked as it progresses, with you kept informed along the way." },
  { title: "Handover", text: "We complete the assignment, review the result with you and remain available if anything needs attention." },
] as const;

export const AUDIENCES = [
  { title: "Contractors and developers", text: "Extra hands and subcontract capacity when a programme gets tight." },
  { title: "Property owners and managers", text: "Painting, renovation and maintenance for buildings that need looking after." },
  { title: "Hotels and hospitality operators", text: "Service personnel and operational support for properties and venues." },
  { title: "Businesses and facility teams", text: "Workforce and works for premises, offices and operational sites." },
] as const;

// Testimonials: leave empty until REAL, permission-granted client testimonials exist.
// Section renders nothing while this array is empty.
export type Testimonial = { quote: string; name: string; role?: string; company?: string };
export const TESTIMONIALS: Testimonial[] = [];

export const FAQS = [
  { q: "What should I include in my inquiry?", a: "The more specific, the faster we can respond: what you need (roles, trades or type of work), how much of it, where the site is, and your start date and duration." },
  { q: "Can I combine services on one project?", a: "Yes. A renovation might need construction works and painting; a hotel might need hospitality staff and maintenance support. Describe the whole picture and we will plan it together." },
  { q: "Which areas do you serve?", a: "We are a Qatar-based company serving requirements in Qatar. Tell us your site location and we will confirm how we can support it." },
  { q: "Can I just call instead of using the form?", a: "Of course. Call +974 50857073 or +974 77463757, or message us on WhatsApp. The form is there for clients who prefer to write things down." },
  { q: "How do I confirm who you are?", a: "HM Farooq Constructing Company operates under Qatar business license number 222095, which you can quote to us at any time." },
] as const;
