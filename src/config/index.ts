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
      summary: [
        "Análise de Indicadores: Coleta, tratamento e consolidação de dados socioeconômicos e de finanças públicas utilizando as bases SIDRA, RAIS, Data IMESC e SICONFI.",
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
        "Design Centrado no Usuário: Aplicação de metodologias ágeis e técnicas de UX/UI para concepção de interfaces digitais acessíveis e intuitivas.",
        "Pesquisa e Prototipação: Realização de pesquisas de personas, testes de usabilidade e criação de protótipos de baixa e alta fidelidade para eixos de startups.",
      ],
    },
    {
      company: "Programa Inova Maranhão (SECTI & FAPEMA)",
      position: "Trilheira em Ciência de Dados – Eixo Startups / Trilhas Inova",
      startDate: "Jan 2025",
      endDate: "Jul 2025",
      summary: [
        "Capacitação & Aplicação em Ciência de Dados: Participação em programa intensivo de capacitação promovido pela Secretaria da Ciência, Tecnologia e Inovação do Maranhão (SECTI) e pela FAPEMA, abrangendo 20 cursos em Ciência de Dados, 12 em desenvolvimento de carreira e 5 em Inteligência Artificial.",
        "Desenvolvimento de competências em análise de dados, estatística, IA e uso de ferramentas tecnológicas para resolução de problemas reais, com foco em inovação e empreendedorismo."
      ],
    }
  ],
  projects: [
    {
      name: "Temporizador em Etapas",
      summary: "Apresentação em formato de pitch detalhando o projeto Temporizador em Etapas, com foco em fluxo de usuário e design de interface.",
      linkPreview: "/Temporizador em Etapas Pitch (4).pdf",
      linkSource: "https://github.com/dayyyse-Monteiro/portfolio-daysemonteiro",
      image: "/temporizadorcapa.jpg",
    },
    {
      name: "Nota Técnica: Incremento do 13º na Economia Maranhense",
      summary: "Análise técnica do impacto econômico do 13º salário na economia maranhense, destacando os setores mais beneficiados.",
      linkPreview: "/Nota-tecnica-do-13-salario.pdf",
      linkSource: "https://github.com/dayyyse-Monteiro/portfolio-daysemonteiro",
      image: "/13salario.png",
    },
    {
      name: "Caracterização Socioeconômica da Região do Conlagos",
      summary: "O presente relatório foi elaborado pelo Instituto Maranhense de Estudos Socioeconômicos e Cartográficos (IMESC) para o Consórcio Intermunicipal de Desenvolvimento Regional dos Lagos Maranhenses (CONLAGOS) com o objetivo de caracterizar os 26 municípios que compõem o consórcio.",
      linkPreview: "/Caracterizacao-Socioeconomica-da-Regiao-do-Conlagos.pdf",
      linkSource: "https://github.com/dayyyse-Monteiro/portfolio-daysemonteiro",
      image: "/conlagos.png",
    },
  ],
  about: {
    description: `Oi, meu nome é Dayse, sou estudante de Ciências Econômicas na UFMA, criativa, divertida e apaixonada por microeconomia, análise de dados e por entender o comportamento dos mercados.`,
    image: "/Daysemonteiro.pnj.jpeg",
  },
};

// #5755ff
