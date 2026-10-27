import type { IconAsset, SiteConfig } from "@/types/content";

const contactIcons = {
  mail: { src: "/icons/contact/mail.svg", width: 24, height: 24 },
  phone: { src: "/icons/contact/phone.svg", width: 24, height: 24 },
  mapPin: { src: "/icons/contact/map-pin.svg", width: 24, height: 24 },
} as const satisfies Record<string, IconAsset>;

const socialIcon = (name: string): IconAsset => ({
  src: `/icons/social/${name}.svg`,
  width: 40,
  height: 40,
});

export const siteConfig = {
  name: "Transformix",
  title: "ترانسفورمكس | شريك Odoo الرسمي المعتمد",
  description:
    "نظام Odoo ERP يربط إدارات شركتك في منظومة واحدة، لتتابع الأداء، وتتحكم في العمليات، وتتخذ قراراتك بثقة تامة بفضل البيانات المتكاملة.",
  locale: "ar",
  dir: "rtl",
  logo: {
    src: "/images/brand/logo.png",
    alt: "Transformix Digital Solution",
    width: 2172,
    height: 724,
  },
  mainNav: [
    { label: "الرئيسية", href: "/" },
    { label: "أعمالنا", href: "/#clients" },
    { label: "تواصل معنا", href: "/#contact" },
  ],
  headerCta: { label: "تواصل معنا", href: "/#contact" },
  footer: {
    logo: {
      src: "/images/brand/logo-mark.svg",
      alt: "Transformix",
      width: 173,
      height: 110,
    },
    tagline: "حلول رقمية متكاملة تدعم نمو أعمالك",
    linkGroups: [
      {
        id: "company",
        title: "الشركة",
        links: [
          { label: "من نحن", href: "#" },
          { label: "اعمالنا", href: "/#clients" },
          { label: "المدونة", href: "#" },
        ],
      },
      {
        id: "services",
        title: "الخدمات",
        links: [
          { label: "علوم البيانات", href: "#" },
          { label: "الذكاء الاصطناعي", href: "#" },
          { label: "استديو الابداع", href: "#" },
          { label: "انظمة ERP", href: "/#services" },
          { label: "تطوير المواقع", href: "#" },
        ],
      },
      {
        id: "industries",
        title: "الصناعات",
        links: [
          { label: "السياحة", href: "#" },
          { label: "التعليم", href: "#" },
        ],
      },
    ],
    contact: {
      title: "تواصل معنا",
      channels: [
        {
          id: "email",
          kind: "email",
          label: "Info@thetransformix.com",
          href: "mailto:Info@thetransformix.com",
          icon: contactIcons.mail,
        },
        {
          id: "phone",
          kind: "phone",
          label: "+966567623953",
          href: "tel:+966567623953",
          icon: contactIcons.phone,
        },
        {
          id: "jeddah",
          kind: "address",
          label: "المملكة العربية السعودية، جدة",
          icon: contactIcons.mapPin,
        },
        {
          id: "sharjah",
          kind: "address",
          label: "الامارات المتحدة، الشارقة",
          icon: contactIcons.mapPin,
        },
      ],
    },
    socials: [
      { id: "facebook", label: "Facebook", href: "#", icon: socialIcon("facebook") },
      { id: "instagram", label: "Instagram", href: "#", icon: socialIcon("instagram") },
      { id: "linkedin", label: "LinkedIn", href: "#", icon: socialIcon("linkedin") },
      { id: "behance", label: "Behance", href: "#", icon: socialIcon("behance") },
    ],
    copyright: "©جميع الحقوق محفوظة لشركة Transformix",
  },
} as const satisfies SiteConfig;
