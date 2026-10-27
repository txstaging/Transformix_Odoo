import type { HomeContent, IconAsset } from "@/types/content";

const featureIcon = (name: string, width: number): IconAsset => ({
  src: `/icons/features/${name}.svg`,
  width,
  height: 24,
});

const contactCta = { label: "تواصل معنا", href: "/#contact" } as const;
const requestServiceCta = { label: "اطلب الخدمة الان", href: "/#contact" } as const;

/** Copy and media for the home page, in reading (RTL) order. */
export const homeContent = {
  hero: {
    badge: "شريك Odoo الرسمي المعتمد",
    titleLines: ["إدارة شركتك تبدأ من رؤية", "أوضح لكل أعمالك"],
    description:
      "نظام Odoo ERP يربط إدارات شركتك في منظومة واحدة، لتتابع الأداء، وتتحكم في العمليات، وتتخذ قراراتك بثقة تامة بفضل البيانات المتكاملة.",
    primaryCta: contactCta,
    secondaryCta: contactCta,
    media: {
      image: {
        src: "/images/hero/dashboard.png",
        alt: "لوحة تحكم لتحليلات الأعمال الذكية معروضة على جهاز لوحي",
        width: 1536,
        height: 1024,
      },
      frameWidth: 530,
      frameHeight: 358,
      crop: { left: -6.12, top: -6.79, width: 111.43, height: 109.74 },
    },
    decoration: {
      src: "/images/decor/circuit-pattern.png",
      alt: "",
      width: 300,
      height: 618,
    },
  },

  clients: [
    {
      id: "barq",
      image: { src: "/images/clients/barq-rescue-team.png", alt: "فريق برق للإنقاذ", width: 1080, height: 1080 },
      frameWidth: 66,
      frameHeight: 66,
    },
    {
      id: "circle-emblem",
      image: { src: "/images/clients/circle-emblem.png", alt: "شعار أحد عملائنا", width: 1024, height: 1024 },
      frameWidth: 70,
      frameHeight: 70,
    },
    {
      id: "thermo",
      image: { src: "/images/clients/thermo-integrated.png", alt: "Thermo Integrated", width: 1118, height: 832 },
      frameWidth: 139,
      frameHeight: 78,
      crop: { left: -0.27, top: -16.67, width: 100.54, height: 133.33 },
    },
    {
      id: "tour-guides",
      image: {
        src: "/images/clients/tour-guides-cooperative.png",
        alt: "تعاونية المرشدين السياحيين",
        width: 1536,
        height: 672,
      },
      frameWidth: 150,
      frameHeight: 64,
    },
    {
      id: "ibdl",
      image: { src: "/images/clients/ibdl.png", alt: "IBDL", width: 1696, height: 608 },
      frameWidth: 120,
      frameHeight: 43,
    },
    {
      id: "aastmt",
      image: {
        src: "/images/clients/aastmt.png",
        alt: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري",
        width: 1024,
        height: 885,
      },
      frameWidth: 85,
      frameHeight: 74,
    },
    {
      id: "al-mahmal",
      image: { src: "/images/clients/al-mahmal.png", alt: "شركة المحمل لخدمات المعتمرين", width: 1248, height: 385 },
      frameWidth: 179,
      frameHeight: 55,
    },
  ],

  benefits: {
    intro: {
      titleLines: ["تحكّم أفضل في العمليات. رؤية أوضح للأداء.", "قرارات مبنية على البيانات."],
    },
    items: [
      {
        id: "crm",
        title: "مبيعات وعلاقات عملاء أكثر تنظيمًا",
        description: "إدارة رحلة العميل من أول تواصل وحتى إتمام البيع في منصة مركزية واحدة.",
        icon: featureIcon("crm", 30),
      },
      {
        id: "growth",
        title: "مرونة تدعم نمو شركتك",
        description: "نظام قابل للتوسع يتناسب مع طموحاتك وحجم أعمالك المتنامي باستمرار.",
        icon: featureIcon("growth", 27),
      },
      {
        id: "inventory",
        title: "تحكم أفضل في المخزون والمشتريات",
        description: "مراقبة مستويات المخزون وعمليات الشراء لتقليل الهدر وتحسين التوريد.",
        icon: featureIcon("inventory", 30),
      },
      {
        id: "operations",
        title: "عمليات تشغيلية مترابطة",
        description: "ربط جميع الإدارات ببعضها البعض لضمان سلاسة تدفق المعلومات والعمل.",
        icon: featureIcon("operations", 27),
      },
      {
        id: "finance",
        title: "إدارة مالية أكثر وضوحًا",
        description: "تتبع التدفقات النقدية والميزانيات والتقارير المالية بدقة متناهية وفورية.",
        icon: featureIcon("finance", 18),
      },
      {
        id: "reports",
        title: "تقارير تدعم الإدارة",
        description: "تحليلات ذكية ولوحات بيانات تفاعلية تدعم اتخاذ القرار الاستراتيجي السليم.",
        icon: featureIcon("reports", 27),
      },
    ],
  },

  services: [
    {
      id: "implementation",
      title: "تطبيق نظام Odoo",
      description: "إعداد وتهيئة النظام ليناسب الهيكل التنظيمي لشركتك وضمان أعلى كفاءة للأداء.",
      cta: requestServiceCta,
      media: {
        image: {
          src: "/images/services/implementation.png",
          alt: "لوحة متابعة خارطة طريق التحول التقني للمؤسسة على جهاز لوحي",
          width: 1586,
          height: 992,
        },
        frameWidth: 487,
        frameHeight: 317,
        crop: { left: -3.61, top: -2.82, width: 107.89, height: 103.77 },
        rounded: false,
      },
      mediaPlacement: "end",
    },
    {
      id: "customization",
      title: "تخصيص Odoo",
      description: "تطوير ميزات إضافية وتعديل البرمجيات لتلبية المتطلبات الفريدة الخاصة بنشاطك التجاري.",
      cta: requestServiceCta,
      media: {
        image: {
          src: "/images/services/customization.png",
          alt: "لوحة تحليل أداء المبيعات والذكاء التجاري على جهاز لوحي",
          width: 1585,
          height: 992,
        },
        frameWidth: 517,
        frameHeight: 339,
        crop: { left: -6.7, top: -4.29, width: 114.23, height: 109.01 },
        rounded: true,
      },
      mediaPlacement: "start",
    },
  ],

  journey: {
    intro: {
      titleLines: ["رحلة التحول الرقمي مع ترانسفورمكس"],
      descriptionLines: [
        "نتبع منهجية دقيقة تضمن انتقال أعمالك إلى نظام Odoo بسلاسة واحترافية، مع التركيز على تقليل المخاطر وتعظيم الفائدة التشغيلية.",
      ],
    },
    steps: [
      {
        id: "analysis",
        order: "01",
        title: "تحليل الأعمال",
        description: "فهم دقيق لعملياتك الحالية وتحديد الفجوات والفرص.",
      },
      {
        id: "design",
        order: "02",
        title: "تصميم الحل",
        description: "رسم خارطة الطريق التقنية وتخصيص النظام ليناسب احتياجك.",
      },
      {
        id: "implementation",
        order: "03",
        title: "التهيئة والتطبيق",
        description: "تثبيت النظام، تهيئة الإعدادات، وبناء الواجهات والتقارير.",
      },
      {
        id: "launch",
        order: "04",
        title: "التدريب والإطلاق",
        description: "تأهيل فريقك لاستخدام النظام بكفاءة والبدء الفعلي بالعمل.",
      },
      {
        id: "support",
        order: "05",
        title: "الدعم والتطوير",
        description: "مرافقتك في مرحلة ما بعد الإطلاق لضمان الاستمرارية والنمو.",
      },
    ],
  },

  faq: {
    intro: {
      titleLines: ["أسئلة شائعة حول Odoo"],
      descriptionLines: ["جمعنا لك أكثر الأسئلة التي تشغل بال أصحاب الأعمال عند", "التفكير في الانتقال إلى نظام Odoo."],
    },
    defaultOpenId: "fit",
    items: [
      {
        id: "fit",
        question: "هل نظام Odoo مناسب لشركتي؟",
        answer:
          "نعم، يتميز Odoo بمرونة فائقة تجعله مناسباً لمختلف الأحجام والقطاعات، بدءاً من الشركات الناشئة وصولاً إلى المؤسسات الكبرى، بفضل هيكليته القائمة على التطبيقات.",
      },
      {
        id: "phased",
        question: "هل يمكن تطبيق Odoo على مراحل؟",
        answer:
          "نعم، يمكن البدء بالتطبيقات الأكثر أولوية لشركتك مثل المبيعات أو المحاسبة، ثم التوسع تدريجياً بإضافة تطبيقات جديدة وفق خطة مرحلية واضحة.",
      },
      {
        id: "customization",
        question: "هل يمكن تخصيص Odoo حسب إجراءات شركتنا؟",
        answer:
          "بالتأكيد، نقوم بتهيئة النظام وتطوير وحدات مخصصة تتوافق مع دورة العمل والإجراءات الداخلية الخاصة بشركتك.",
      },
      {
        id: "migration",
        question: "هل يمكن نقل البيانات من نظامنا الحالي؟",
        answer:
          "نعم، نتولى ترحيل بياناتك من الأنظمة الحالية أو ملفات Excel إلى Odoo مع التحقق من سلامتها ودقتها قبل الإطلاق.",
      },
      {
        id: "timeline",
        question: "كم يستغرق تطبيق نظام Odoo؟",
        answer:
          "تعتمد المدة على حجم شركتك وعدد التطبيقات المطلوبة ومستوى التخصيص، ونحدد جدولاً زمنياً واضحاً لكل مرحلة بعد الانتهاء من تحليل الأعمال.",
      },
      {
        id: "support",
        question: "هل تقدمون الدعم بعد إطلاق النظام؟",
        answer:
          "نعم، نرافقك بعد الإطلاق بخدمات الدعم الفني والصيانة والتحديثات، إلى جانب تطوير ميزات جديدة مع نمو أعمالك.",
      },
    ],
  },
} as const satisfies HomeContent;
