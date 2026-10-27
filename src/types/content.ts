/** A raster image shipped in `/public`, with its intrinsic pixel size. */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** A vector icon shipped in `/public`; size matches the SVG root attributes. */
export interface IconAsset {
  src: string;
  width: number;
  height: number;
}

/**
 * Image-fill crop as exported by Figma: the image's offset and size,
 * expressed as percentages of the frame that clips it.
 */
export interface ImageCrop {
  left: number;
  top: number;
  width: number;
  height: number;
}

/** An image rendered inside a fixed-ratio frame, optionally cropped. */
export interface FramedImage {
  image: ImageAsset;
  /** Frame size in Figma (px). Drives the aspect ratio and max width. */
  frameWidth: number;
  frameHeight: number;
  crop?: ImageCrop;
}

export interface NavItem {
  label: string;
  href: string;
}

export type CallToAction = NavItem;

/** Copy split into the lines used in the design; lines reflow on small screens. */
export type DesignLines = readonly string[];

export interface SectionIntro {
  titleLines: DesignLines;
  descriptionLines?: DesignLines;
}

export interface HeroContent {
  badge: string;
  titleLines: DesignLines;
  description: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  media: FramedImage;
  decoration: ImageAsset;
}

export interface ClientLogo extends FramedImage {
  id: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: IconAsset;
}

export interface BenefitsContent {
  intro: SectionIntro;
  items: readonly Benefit[];
}

export type MediaPlacement = "start" | "end";

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  cta: CallToAction;
  media: FramedImage & { rounded: boolean };
  /** Logical side (RTL-aware) the media sits on at desktop widths. */
  mediaPlacement: MediaPlacement;
}

export interface JourneyStep {
  id: string;
  order: string;
  title: string;
  description: string;
}

export interface JourneyContent {
  intro: SectionIntro;
  steps: readonly JourneyStep[];
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export interface FaqContent {
  intro: SectionIntro;
  items: readonly FaqEntry[];
  defaultOpenId?: string;
}

export interface HomeContent {
  hero: HeroContent;
  clients: readonly ClientLogo[];
  benefits: BenefitsContent;
  services: readonly ServiceOffering[];
  journey: JourneyContent;
  faq: FaqContent;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: readonly NavItem[];
}

export type ContactKind = "email" | "phone" | "address";

export interface ContactChannel {
  id: string;
  kind: ContactKind;
  label: string;
  href?: string;
  icon: IconAsset;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconAsset;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  locale: string;
  dir: "rtl" | "ltr";
  logo: ImageAsset;
  mainNav: readonly NavItem[];
  headerCta: CallToAction;
  footer: {
    logo: ImageAsset;
    tagline: string;
    linkGroups: readonly FooterLinkGroup[];
    contact: {
      title: string;
      channels: readonly ContactChannel[];
    };
    socials: readonly SocialLink[];
    copyright: string;
  };
}
