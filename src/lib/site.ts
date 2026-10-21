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

// Hourly rates for on-site and remote fixes (same for homes and businesses)
export const rates = [
  { price: "$125", label: "First hour on-site" },
  { price: "$95", label: "Each additional hour" },
  { price: "$75", label: "Per hour, remote help" },
];

export const areaText = `${site.area.join(", ")}, and surrounding areas`;

export const telHref = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
