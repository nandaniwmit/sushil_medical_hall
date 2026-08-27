import { ReviewItem } from '../types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rajesh Kumar Verma',
    location: 'Bodh Gaya, Bihar',
    rating: 5,
    date: 'February 2026',
    comment: 'One of the most dependable medical halls in Bodh Gaya. Whenever my father needs critical heart and diabetes medications, Sushil Medical Hall always has fresh stock with proper refrigeration.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Priyanka Kumari',
    location: 'Tikha Bigha, Bodh Gaya',
    rating: 5,
    date: 'January 2026',
    comment: 'The WhatsApp medicine ordering is very convenient. I just send the doctor prescription picture, and they prepare everything in 10 minutes. Very polite and knowledgeable staff.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Dr. A. K. Sinha (Consultant)',
    location: 'Gaya - Bodh Gaya Road',
    rating: 5,
    date: 'December 2025',
    comment: 'As a physician in the region, I appreciate their adherence to dispensing genuine medicines from accredited pharmaceutical companies. Clean storage and prompt customer care.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Manoj Pandey',
    location: 'Mastipur, Bodh Gaya',
    rating: 5,
    date: 'November 2025',
    comment: 'Fair pricing, computerized GST bills, and genuine surgical items. They also helped me choose the right Omron BP monitor for home use.',
    verified: true
  }
];

export const FAQS_DATA = [
  {
    question: "Do you deliver medicines in Bodh Gaya?",
    answer: "Yes, we provide rapid local delivery and WhatsApp order dispatch across Bodh Gaya and nearby areas around Tikha Bigha, Mastipur, and the Gaya-Bodh Gaya road corridor."
  },
  {
    question: "How do I order medicines via WhatsApp?",
    answer: "Simply click the 'WhatsApp Order' button on our website or text +91 98358 29175. Share your medicine names or send a clear photo of your doctor's prescription with your delivery address."
  },
  {
    question: "Do you require a doctor's prescription for prescription drugs?",
    answer: "Yes, in strict compliance with the Drugs and Cosmetics Act, all Schedule H and H1 prescription drugs require a valid medical prescription from a registered medical practitioner."
  },
  {
    question: "How do you maintain temperature-sensitive medicines like insulin?",
    answer: "We have commercial pharmaceutical refrigerators with 24/7 dedicated power backups to maintain the strictly regulated 2°C to 8°C cold chain for insulin, vaccines, and eye drops."
  },
  {
    question: "What are the working hours of Sushil Medical Hall?",
    answer: "We are open Monday to Sunday from 7:30 AM to 10:30 PM. For emergency prescription assistance, our helpline number 9835829175 remains reachable."
  }
];
