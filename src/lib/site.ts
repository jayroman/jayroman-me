// Contact details used across the site. Fill these in and redeploy.
export const site = {
  name: "Jay Roman",
  tagline: "Tech help for Plateau homes and local businesses",
  // e.g. "(828) 555-1234" — leave empty to hide
  phone: "(828) 482-7550",
  // e.g. "jay@jayroman.me" — leave empty to hide
  email: "jay@jayroman.me",
  // Formspree form ID (the part after /f/). If empty, the form opens an email instead.
  formspreeId: "",
  area: ["Cashiers", "Sapphire", "Highlands", "Glenville", "Lake Toxaway"],
};

// "Cashiers, Sapphire, Highlands, Glenville, Lake Toxaway, and surrounding areas"
export const areaText = `${site.area.join(", ")}, and surrounding areas`;

export const telHref = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
