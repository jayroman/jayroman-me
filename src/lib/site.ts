// Contact details used across the site. Fill these in and redeploy.
export const site = {
  name: "Jay Roman",
  tagline: "Tech help for Plateau homes and local businesses",
  // e.g. "(828) 555-1234" — leave empty to hide
  phone: "",
  // e.g. "jay@jayroman.me" — leave empty to hide
  email: "",
  // Formspree form ID (the part after /f/). If empty, the form opens an email instead.
  formspreeId: "",
  area: ["Cashiers", "Sapphire", "Highlands", "Glenville", "Lake Toxaway"],
};

export const telHref = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
