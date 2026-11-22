/**
 * Central image manifest. Replace a file in /public/images (same name) or change `src` here.
 * Photos are either (a) supplied by the company, or (b) freely licensed photographs from
 * Wikimedia Commons, credited on /credits as their licences require.
 */
export type Img = { src: string; alt: string };

type Credit = { by: string; license: string; source?: string };
const COMPANY_SUPPLIED: Credit = { by: "Supplied by HM Farooq Constructing Company", license: "All rights reserved by owner" };
const WIKI = "https://commons.wikimedia.org/wiki/File:";
export const CREDITS = {
  westBay: { by: "Zairon", license: "CC BY 4.0", source: `${WIKI}Doha_Skyline_24.jpg` },
  corniche: { by: "Zairon", license: "CC BY 4.0", source: `${WIKI}Doha_Corniche_Skyline_View_2.jpg` },
  lusail: { by: "Alwaleed Khaled", license: "CC BY 4.0", source: `${WIKI}Lusail_City.jpg` },
  towers: { by: "Zairon", license: "CC BY 4.0", source: `${WIKI}Doha_Skyline_26.jpg` },
  katara: { by: "Zairon", license: "CC BY 4.0", source: `${WIKI}Doha_Katara_Cultural_Village_Multi_Purpose_Hall_Interior_08.jpg` },
  sheraton: { by: "Alex Sergeev", license: "CC BY-SA 3.0", source: `${WIKI}Entrance_to_iconic_Sheraton_Hotel_in_Doha,_Qatar.jpg` },
} as const satisfies Record<string, Credit>;

export const IMAGES = {
  hero: { src: "/images/doha-west-bay.jpg", alt: "West Bay skyline in Doha, Qatar" },
  pageHeader: { src: "/images/doha-corniche.jpg", alt: "Doha skyline seen from the Corniche" },
  about: { src: "/images/workers-masonry.jpg", alt: "Construction workers in safety helmets and high-visibility vests on a site in Qatar" },
  cta: { src: "/images/lusail-city.jpg", alt: "Modern towers in Lusail City, Qatar" },
  towers: { src: "/images/doha-towers.jpg", alt: "Office and residential towers in Doha, Qatar" },
  serviceManpower: { src: "/images/workers-groundwork.jpg", alt: "Workers in safety gear laying groundwork with cranes in the background" },
  servicePainting: { src: "/images/painting-facade-rope.jpg", alt: "Painters working on a building facade" },
  serviceHospitality: { src: "/images/hotel-sheraton-doha.jpg", alt: "Hotel entrance in Doha, Qatar" },
  serviceConstruction: { src: "/images/construction-steel-structure.jpg", alt: "Workers on a steel-frame building site" },
} as const satisfies Record<string, Img>;

export type GalleryCategory = "Construction" | "Painting" | "Manpower" | "Hospitality";
export const GALLERY_CATEGORIES: GalleryCategory[] = ["Construction", "Painting", "Manpower", "Hospitality"];

export type GalleryItem = Img & { id: string; category: GalleryCategory; title: string; credit: string; creditInfo: Credit; isCompanyProject: boolean; caption: string };

const g = (id: string, category: GalleryCategory, title: string, file: string, alt: string, c: Credit, caption: string, isCompanyProject = false): GalleryItem => ({
  id, category, title, caption, src: `/images/${file}`, alt, creditInfo: c, credit: c.by === COMPANY_SUPPLIED.by ? "Image supplied by the company" : `Photo: ${c.by} · ${c.license}`, isCompanyProject,
});

// Set isCompanyProject = true once an image is confirmed as an actual HM Farooq project.
export const GALLERY: GalleryItem[] = [
  g("c1", "Construction", "Steel-frame building works", "construction-steel-structure.jpg", "Workers on a steel-frame building site", COMPANY_SUPPLIED, "Steel framing and access platforms: the stage where a structure takes its shape."),
  g("c2", "Construction", "Concrete and reinforcement", "construction-rebar-concrete.jpg", "Worker curing a reinforced concrete deck beside a concrete pump", COMPANY_SUPPLIED, "Reinforcement laid and concrete curing, the unseen strength inside a slab."),
  g("c3", "Construction", "Site works and services", "construction-site-team.jpg", "Site team working on a building with scaffolding and a crane", COMPANY_SUPPLIED, "A working site: scaffolding, services and trades coordinated side by side."),
  g("c4", "Construction", "Lusail City, Qatar", "lusail-city.jpg", "Modern towers in Lusail City, Qatar", CREDITS.lusail, "Lusail, one of Qatar's newest districts, where new buildings keep rising."),
  g("p1", "Painting", "Facade painting", "painting-facade-rope.jpg", "Painters working on a building facade", COMPANY_SUPPLIED, "Facade painting at height, where preparation and technique matter most."),
  g("p2", "Painting", "Exterior wall painting", "painting-suspended-platform.jpg", "Painters rolling paint onto an exterior wall from a suspended platform", COMPANY_SUPPLIED, "A suspended platform lets crews finish tall exterior walls evenly."),
  g("p3", "Painting", "Scaffold painting", "painting-scaffold.jpg", "Painters in white overalls working on a scaffold", COMPANY_SUPPLIED, "Scaffold access for careful window-line and trim work."),
  g("m1", "Manpower", "Skilled site workforce", "workers-masonry.jpg", "Workers in safety helmets and high-visibility vests on a site", COMPANY_SUPPLIED, "Protective gear and teamwork on a masonry and finishing task."),
  g("m2", "Manpower", "Groundwork crew", "workers-groundwork.jpg", "Workers in safety gear laying groundwork", COMPANY_SUPPLIED, "A groundwork crew preparing the base for what comes next."),
  g("m3", "Manpower", "Paving crew", "workers-paving.jpg", "Road crew with paving machinery", COMPANY_SUPPLIED, "Paving work, where a coordinated crew keeps a road moving to schedule."),
  g("h2", "Hospitality", "Events hall interior, Doha", "hall-katara-doha.jpg", "Large multi-purpose hall interior at Katara Cultural Village, Doha", CREDITS.katara, "A large events hall in Doha, where the setting depends on the people running it."),
  g("h1", "Hospitality", "Hotel in Doha", "hotel-sheraton-doha.jpg", "Hotel entrance in Doha, Qatar", CREDITS.sheraton, "A Doha hotel entrance: the first point of contact for every guest."),
];

export const ALL_CREDITS: { title: string; credit: Credit }[] = [
  { title: "Hero image — West Bay, Doha", credit: CREDITS.westBay },
  { title: "Page headers — Doha Corniche skyline", credit: CREDITS.corniche },
  { title: "Doha towers", credit: CREDITS.towers },
  ...GALLERY.map((x) => ({ title: x.title, credit: x.creditInfo })),
];
