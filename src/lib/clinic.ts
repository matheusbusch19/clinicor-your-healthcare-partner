export const clinic = {
  name: "Clínica Médica Nova Esperança",
  brand: "Clinicor",
  phone: "(44) 3252-9222",
  phoneHref: "tel:+554432529222",
  instagram:
    "https://www.instagram.com/clinicor_nova_esperanca?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  address: {
    street: "Rua Governador Manoel Ribas, 110",
    district: "Centro",
    city: "Nova Esperança",
    state: "PR",
    zip: "87600-000",
    plusCode: "RQ6X+QX Nova Esperança, Paraná",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Governador+Manoel+Ribas%2C+110+-+Centro%2C+Nova+Esperan%C3%A7a+-+PR%2C+87600-000",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua%20Governador%20Manoel%20Ribas%2C%20110%2C%20Centro%2C%20Nova%20Esperan%C3%A7a%20-%20PR%2C%2087600-000&output=embed",
  rating: { value: "3,8", scale: "5", count: 4 },
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
