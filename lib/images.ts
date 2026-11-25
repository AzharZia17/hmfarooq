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
  g("c1", "Construction", "Tower crane and concrete frame", "project-crane-site.jpg", "Building under construction with a tower crane", COMPANY_SUPPLIED, "A concrete frame rising beneath a tower crane: the lifting and sequencing that keeps a build moving."),
  g("c2", "Construction", "Steel frame", "project-steel-frame.jpg", "Structural steel frame of a building under construction", COMPANY_SUPPLIED, "Steelwork in place, the skeleton every later trade builds on."),
  g("c3", "Construction", "Scaffolded building", "project-scaffolding.jpg", "Scaffolding around a building under construction", COMPANY_SUPPLIED, "Scaffolding gives safe access to every level while works progress."),
  g("c4", "Construction", "Concrete building works", "project-concrete-building.jpg", "Multi-storey concrete building under construction", COMPANY_SUPPLIED, "A multi-storey building taking shape, floor by floor."),
  g("p1", "Painting", "Facade painting", "painting-facade-rope.jpg", "Painters working on a building facade", COMPANY_SUPPLIED, "Rope access on a tall facade, where preparation and technique matter most."),
  g("p2", "Painting", "Exterior wall finishing", "project-roller-painting.jpg", "Gloved hand rolling white paint onto an exterior wall", COMPANY_SUPPLIED, "A first coat going on: even, careful rolling on a prepared surface."),
  g("p3", "Painting", "Interior painting", "project-interior-painter.jpg", "Painter in overalls rolling paint onto an interior wall", COMPANY_SUPPLIED, "Interior walls painted clean and even in a finished room."),
  g("p4", "Painting", "Finished exterior panels", "project-painted-panels.jpg", "Exterior wall finished in contrasting grey and white panels", COMPANY_SUPPLIED, "The result: crisp colour panels on a completed exterior wall."),
  g("m1", "Manpower", "Site team", "project-worker-team.jpg", "Five workers in safety helmets and high-visibility vests facing a building site", COMPANY_SUPPLIED, "A team briefed and ready, in protective gear, before work begins."),
  g("m2", "Manpower", "Safety first", "project-helmets-scaffold.jpg", "Yellow and white safety helmets in front of scaffolding with workers behind", COMPANY_SUPPLIED, "Protective equipment is the starting point of every site assignment."),
  g("m3", "Manpower", "Groundwork crew", "workers-groundwork.jpg", "Workers in safety gear laying groundwork", COMPANY_SUPPLIED, "A groundwork crew preparing the base for what comes next."),
  g("h2", "Hospitality", "Events hall interior, Doha", "hall-katara-doha.jpg", "Large multi-purpose hall interior at Katara Cultural Village, Doha", CREDITS.katara, "A large events hall in Doha, where the setting depends on the people running it."),
  g("h1", "Hospitality", "Hotel in Doha", "hotel-sheraton-doha.jpg", "Hotel entrance in Doha, Qatar", CREDITS.sheraton, "A Doha hotel entrance: the first point of contact for every guest."),
];

export const ALL_CREDITS: { title: string; credit: Credit }[] = [
  { title: "Hero image — West Bay, Doha", credit: CREDITS.westBay },
  { title: "Page headers — Doha Corniche skyline", credit: CREDITS.corniche },
  { title: "Doha towers", credit: CREDITS.towers },
  { title: "Call-to-action background — Lusail City", credit: CREDITS.lusail },
  ...GALLERY.map((x) => ({ title: x.title, credit: x.creditInfo })),
];
