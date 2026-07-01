import {
  IconShipping,
  IconReturns,
  IconWarranty,
  IconBrochure,
} from '../components/PageIcons'

export const INFO_PAGES = {
  'shipping-delivery': {
    path: '/shipping-delivery',
    label: 'Logistics',
    title: 'Shipping & delivery',
    description:
      'Reliable fulfilment across Qatar — from order confirmation to on-site delivery, with clear timelines and professional handling.',
    icon: IconShipping,
    sections: [
      {
        title: 'Delivery coverage',
        paragraphs: [
          'INDOVENTURE Trading delivers throughout Qatar, including Doha and major industrial zones. Delivery schedules are confirmed at the time of order based on product availability, order volume, and destination.',
        ],
        list: [
          'Standard delivery across Doha and surrounding areas',
          'Coordinated delivery for large or bulk orders',
          'Site delivery for construction and industrial projects',
        ],
      },
      {
        title: 'Processing & lead times',
        paragraphs: [
          'Orders are processed once payment terms and product availability are confirmed. Lead times vary by category — stocked items are typically dispatched faster, while specialised or imported products may require additional sourcing time.',
        ],
        list: [
          'Order acknowledgement within one business day',
          'Lead time confirmed before dispatch',
          'Advance notice provided for scheduled deliveries',
        ],
      },
      {
        title: 'Shipping charges',
        paragraphs: [
          'Delivery charges depend on order size, weight, destination, and urgency. Quotations include delivery terms where applicable. For recurring supply contracts, preferential delivery arrangements can be discussed.',
        ],
      },
      {
        title: 'Receiving your order',
        paragraphs: [
          'Please ensure an authorised representative is available to receive and inspect goods on delivery. Report any visible damage or discrepancies at the time of receipt so we can resolve the matter promptly.',
        ],
        list: [
          'Verify quantities against the delivery note',
          'Inspect packaging for visible damage',
          'Contact us immediately if items are missing or damaged',
        ],
      },
    ],
  },
  'returns-policy': {
    path: '/returns-policy',
    label: 'Customer care',
    title: 'Returns policy',
    description:
      'Fair and transparent returns process — designed to protect both our clients and product integrity while resolving issues efficiently.',
    icon: IconReturns,
    sections: [
      {
        title: 'Eligibility for returns',
        paragraphs: [
          'Returns may be accepted for defective, damaged, or incorrectly supplied products, subject to inspection. Items must be returned in their original condition, with packaging and documentation where applicable.',
        ],
        list: [
          'Manufacturing defects or transit damage reported promptly',
          'Incorrect items supplied due to our error',
          'Products unused and in resaleable condition',
        ],
      },
      {
        title: 'Non-returnable items',
        paragraphs: [
          'Certain products cannot be returned once dispatched due to safety, hygiene, or custom-order requirements.',
        ],
        list: [
          'Opened or used PPE and safety consumables',
          'Custom-cut cables, fabricated, or made-to-order items',
          'Products without original packaging or traceability labels',
        ],
      },
      {
        title: 'How to request a return',
        paragraphs: [
          'Contact our sales team with your order reference, product details, and reason for return. We will review the request and provide instructions for collection or return within Qatar.',
        ],
        list: [
          'Email sales@indoventure-trading.com or call +974 7740 9009',
          'Provide invoice or delivery note reference',
          'Include photos for damage or defect claims where helpful',
        ],
      },
      {
        title: 'Refunds & replacements',
        paragraphs: [
          'Approved returns are resolved by replacement, credit note, or refund as agreed with the client. Resolution timelines depend on product inspection and supplier confirmation where manufacturer warranties apply.',
        ],
      },
    ],
  },
  warranty: {
    path: '/warranty',
    label: 'Product assurance',
    title: 'Warranty',
    description:
      'Manufacturer-backed warranties on eligible products — with INDOVENTURE support to help you claim and resolve warranty matters efficiently.',
    icon: IconWarranty,
    sections: [
      {
        title: 'Warranty coverage',
        paragraphs: [
          'Many products supplied by INDOVENTURE Trading carry manufacturer warranties covering defects in materials and workmanship under normal use. Warranty duration and terms vary by brand and product category.',
        ],
        list: [
          'Electrical equipment — per manufacturer specification',
          'Power tools — standard manufacturer warranty periods',
          'Safety equipment — subject to brand and certification terms',
        ],
      },
      {
        title: 'What is covered',
        paragraphs: [
          'Warranties typically cover faults arising from manufacturing defects. Coverage does not extend to misuse, improper installation, unauthorised modification, or normal wear and tear.',
        ],
      },
      {
        title: 'What is not covered',
        paragraphs: [
          'The following are generally excluded from standard warranty claims unless otherwise stated in writing.',
        ],
        list: [
          'Damage from misuse, neglect, or improper storage',
          'Wear parts and consumables (blades, filters, bulbs, etc.)',
          'Damage caused by power surges or incorrect installation',
          'Products with removed or altered serial numbers',
        ],
      },
      {
        title: 'Making a warranty claim',
        paragraphs: [
          'To initiate a claim, contact us with proof of purchase, product details, serial number (if applicable), and a description of the fault. We will coordinate with the manufacturer and advise on repair, replacement, or next steps.',
        ],
        list: [
          'Original invoice or delivery documentation required',
          'Product may need to be inspected before approval',
          'Turnaround times depend on manufacturer processes',
        ],
      },
    ],
  },
  brochure: {
    path: '/brochure',
    label: 'Product catalogue',
    title: 'Brochure',
    description:
      'Explore INDOVENTURE Trading\'s full product range — safety, electrical, civil consumables, hand tools, and facility supplies for Qatar\'s industries.',
    icon: IconBrochure,
    sections: [
      {
        title: 'About our catalogue',
        paragraphs: [
          'Our brochure provides an overview of INDOVENTURE Trading\'s five core product categories and the industries we serve across Qatar. It is designed to help procurement teams and project managers identify the right solutions quickly.',
        ],
      },
      {
        title: 'What\'s inside',
        paragraphs: [
          'The brochure covers our complete supply capability — from personal protective equipment and fire safety to electrical systems, construction consumables, precision hand tools, and facility products.',
        ],
        list: [
          'Category 01 — Safety products & PPE',
          'Category 02 — Electrical products & power tools',
          'Category 03 — Civil consumables & construction materials',
          'Category 04 — Hand tools & measuring equipment',
          'Category 05 — Facility & hospitality supplies',
        ],
      },
      {
        title: 'Request a copy',
        paragraphs: [
          'Contact our team to receive the latest INDOVENTURE Trading product brochure. We can email a digital copy or arrange a consultation to discuss your project requirements in detail.',
        ],
      },
    ],
    cta: {
      label: 'Request brochure',
      to: '/contact',
      secondary: {
        label: 'Email sales team',
        href: 'mailto:sales@indoventure-trading.com?subject=Brochure%20Request',
      },
    },
  },
}

export const FOOTER_INFO_LINKS = [
  { label: 'Shipping & Delivery', to: INFO_PAGES['shipping-delivery'].path },
  { label: 'Returns Policy', to: INFO_PAGES['returns-policy'].path },
  { label: 'Warranty', to: INFO_PAGES.warranty.path },
  { label: 'Brochure', to: INFO_PAGES.brochure.path },
]
