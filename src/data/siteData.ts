export interface NavItem {
  label: string
  href: string
  id: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  formValue: string
  iconName: 'home' | 'building' | 'briefcase' | 'sparkles' | 'droplets' | 'layers'
  tag: string
}

export interface BenefitItem {
  title: string
  description: string
  iconName: 'leaf' | 'heart' | 'check' | 'building2'
}

export interface StepItem {
  number: string
  title: string
  description: string
}

export interface GalleryItem {
  id: string
  title: string
  category: string
  src: string
  alt: string
}

export const BUSINESS_INFO = {
  name: 'Shannon’s Cleaning Service',
  location: 'Calgary, Alberta, Canada',
  shortLocation: 'Calgary, Alberta',
  phoneDisplay: '403-619-0729',
  phoneHref: 'tel:+14036190729',
  disclaimer:
    'Independent website concept created by Alira Digital for demonstration purposes only. This is not the official website of Shannon’s Cleaning Service and is not affiliated with or endorsed by the business.',
} as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const TRUST_HIGHLIGHTS = [
  {
    title: 'Eco-Conscious Approach',
    detail: 'Eco-friendly positioning',
    iconName: 'leaf' as const,
  },
  {
    title: 'Pet- and Kid-Friendly Cleaning',
    detail: 'Described for family homes',
    iconName: 'paw' as const,
  },
  {
    title: 'Residential Cleaning',
    detail: 'Houses & apartments in Calgary',
    iconName: 'home' as const,
  },
  {
    title: 'Commercial Cleaning',
    detail: 'Workplaces & commercial spaces',
    iconName: 'building' as const,
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    description:
      'Keep your home feeling fresh, comfortable, and welcoming with residential cleaning support.',
    formValue: 'House Cleaning',
    iconName: 'home',
    tag: 'Residential',
  },
  {
    id: 'apartment-cleaning',
    title: 'Apartment Cleaning',
    description:
      'Thoughtful cleaning for apartments and smaller living spaces.',
    formValue: 'Apartment Cleaning',
    iconName: 'building',
    tag: 'Residential',
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    description:
      'Help maintain a clean and welcoming environment for your workplace or commercial space.',
    formValue: 'Commercial Cleaning',
    iconName: 'briefcase',
    tag: 'Commercial',
  },
  {
    id: 'dusting-surface-care',
    title: 'Dusting & Surface Care',
    description:
      'Give everyday surfaces and living spaces the attention they need.',
    formValue: 'Dusting',
    iconName: 'sparkles',
    tag: 'Detail Care',
  },
  {
    id: 'hand-wash-floor-cleaning',
    title: 'Hand-Wash Floor Cleaning',
    description:
      'Careful hand-wash floor cleaning for a refreshed living environment.',
    formValue: 'Hand-Wash Floor Cleaning',
    iconName: 'droplets',
    tag: 'Hand-Washed',
  },
  {
    id: 'baseboard-wall-cleaning',
    title: 'Baseboard & Wall Cleaning',
    description:
      'Detailed attention to baseboards and walls to help refresh the overall appearance of your space.',
    formValue: 'Baseboard / Wall Cleaning',
    iconName: 'layers',
    tag: 'Detail Care',
  },
]

export const WHY_CHOOSE_BENEFITS: BenefitItem[] = [
  {
    title: 'Eco-Friendly Approach',
    description:
      'A cleaning approach that considers your home and the environment.',
    iconName: 'leaf',
  },
  {
    title: 'Pet- and Kid-Friendly Focus',
    description:
      'Cleaning methods described by the business listing as pet- and kid-friendly.',
    iconName: 'heart',
  },
  {
    title: 'Attention to Detail',
    description:
      'Cleaning options that include dusting, floors, baseboards, and walls.',
    iconName: 'check',
  },
  {
    title: 'Residential & Commercial',
    description:
      'Cleaning services for both homes and commercial spaces.',
    iconName: 'building2',
  },
]

export const ABOUT_HIGHLIGHTS = [
  'Residential & commercial cleaning across Calgary, Alberta',
  'Eco-conscious approach with pet- and kid-friendly cleaning methods',
  'Detailed options including dusting, hand-wash floors, baseboards, and walls',
]

export const PROCESS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Share a few details about your space and the cleaning service you are interested in.',
  },
  {
    number: '02',
    title: 'Discuss Your Estimate',
    description:
      'Get in touch to discuss your requirements and estimate.',
  },
  {
    number: '03',
    title: 'Plan Your Cleaning',
    description:
      'Coordinate the next steps directly with the business.',
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'living-room',
    title: 'Bright Living Rooms',
    category: 'Residential Spaces',
    src: './images/gallery-living-room.jpg',
    alt: 'Illustrative photo of a bright, spotless modern living room with natural morning light and clean hardwood floors',
  },
  {
    id: 'kitchen',
    title: 'Clean Kitchens',
    category: 'Surface Care',
    src: './images/gallery-kitchen.jpg',
    alt: 'Illustrative photo of a fresh, spotless modern kitchen with clean white countertops and warm cabinetry',
  },
  {
    id: 'bathroom',
    title: 'Fresh Bathrooms',
    category: 'Home Comfort',
    src: './images/gallery-bathroom.jpg',
    alt: 'Illustrative photo of a crisp, clean modern bathroom with neatly folded white towels and bright natural light',
  },
  {
    id: 'apartment',
    title: 'Neat Apartment Interiors',
    category: 'Apartment Living',
    src: './images/gallery-apartment.jpg',
    alt: 'Illustrative photo of a tidy, sunlit modern apartment interior with clean floors and open living space',
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    category: 'Workplace Care',
    src: './images/gallery-commercial.jpg',
    alt: 'Illustrative photo of a clean, welcoming contemporary office and commercial workspace bathed in daylight',
  },
  {
    id: 'cleaning-care',
    title: 'Detailed Hand-Wash Care',
    category: 'Floors & Baseboards',
    src: './images/gallery-cleaning-care.jpg',
    alt: 'Illustrative photo of careful hand-wash baseboard and hardwood floor cleaning using a clean soft microfiber cloth',
  },
]

export const PROPERTY_TYPES = ['House', 'Apartment', 'Commercial'] as const

export const SERVICE_OPTIONS = [
  'House Cleaning',
  'Apartment Cleaning',
  'Commercial Cleaning',
  'Dusting',
  'Hand-Wash Floor Cleaning',
  'Baseboard / Wall Cleaning',
  'Other / Not Sure',
] as const
