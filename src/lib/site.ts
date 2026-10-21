// Contact details and routes used across the site.
export const site = {
  name: "Jay Roman",
  tagline: "Tech help for Plateau homes and local businesses",
  phone: "(828) 482-7550",
  email: "jay@jayroman.me",
  // Formspree form ID (the part after /f/). If empty, the form opens an email instead.
  formspreeId: "",
  area: ["Cashiers", "Sapphire", "Highlands", "Glenville", "Lake Toxaway"],
};

// Where each page lives. Option 1: home tech at "/". Option 2: home tech at "/home".
export const paths = {
  home: "/home",
  business: "/business",
};

export const areaText = `${site.area.join(", ")}, and surrounding areas`;

export const telHref = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
