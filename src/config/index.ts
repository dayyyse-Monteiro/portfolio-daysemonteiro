import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dayse Monteiro — Economia e Negócios",
  author: "Dayse Abreu da Silva Monteiro",
  description:
    "Estudante de Economia na Universidade Federal do Maranhão, especializando-se em UX e UI Design e gestão de negócios.",
  lang: "pt-BR",
  siteLogo: "/Daysemonteiro.pnj.jpeg",
  navLinks: [
    { text: "Experiências", href: "#experiências" },
    { text: "Projetos", href: "#projetos" },
    { text: "Sobre", href: "#sobre" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/dayyyse-Monteiro" },
  
  ],
  socialImage: "/Daysemonteiro.pnj.jpeg",
  canonicalURL: "https://portfolio-daysemonteiro.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dayse Monteiro",
    specialty: "Economia e Negócios",
    summary:
      "Estudante de Economia na Universidade Federal do Maranhão, especializando-se em UX e UI Design e gestão de negócios.",
    email: "daysedasilvamt@gmail.com",
  },
  experience: [
    {
      company: "IMESC - Instituto Maranhense de Estudos Socioeconômicos e Cartográficos",
      position: "Pesquisadora do Departamento de Estudos e Pesquisas - DEP",
      startDate: "JUL 2023",
      endDate: "ABR 2025",
      summary: [ "Análise de Indicadores: Coleta, tratamento e consolidação de dados socioeconômicos e de finanças públicas utilizando as bases SIDRA, RAIS, Data IMESC e SICONFI.",
                "Relatórios Técnicos & Avaliação de Impacto: Participação na elaboração de relatórios técnicos e atuação em estudos sobre mercado de trabalho, finanças públicas e políticas públicas (e.g., 13o salário, CONLAGOS e Pesquisa de Empregabilidade Trilhas Inova).",
                "Publicações Econômicas Oficiais: Atuei como coautora no Boletim de Conjuntura Econômica Maranhense (1º Trimestre/2024), desenvolvendo análises do mercado de financiamento imobiliário e avaliação de recursos do FGTS.",
                "Estudos de Impacto Econômico: Participação em pesquisas de movimentação econômica dos grandes eventos (Carnaval, São João, Expoema e Natal) promovidos pelo governo."
      ],
    },
    {
      company: "Programa Inova Maranhão (SECTI & FAPEMA)",
      position: "Trilheira em UX Design – Eixo Startups / Trilhas Inova",
      startDate: "Set 2026",
      endDate: "Jan 2027",
      summary: [
        " Design Centrado no Usuário: Aplicação de metodologias ágeis e técnicas de UX/UI para concepção de interfaces digitais acessíveis e intuitivas.",
        " Pesquisa e Prototipação: Realização de pesquisas de personas, testes de usabilidade e criação de protótipos de baixa e alta fidelidade para eixos de startups.",
      ],
    },
    {
      company: "Programa Inova Maranhão (SECTI & FAPEMA)",
      position: "Trilheira em Ciência de Dados – Eixo Startups / Trilhas Inova",
      startDate: "Jan 2025",
      endDate: "Jul 2025",
      summary: ["Capacitação & Aplicação em Ciência de Dados: Participação em programa intensivo de capacitação promovido pela Secretaria da Ciência, Tecnologia e Inovação do Maranhão (SECTI) e pela FAPEMA, abrangendo 20 cursos em Ciência de Dados, 12 em desenvolvimento de carreira e 5 em Inteligência Artificial.",
                "Desenvolvimento de competências em análise de dados, estatística, IA e uso de ferramentas tecnológicas para resolução de problemas reais, com foco em inovação e empreendedorismo." ]
    },  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
