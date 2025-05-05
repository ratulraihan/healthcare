import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and Medicare. Please contact our office to verify coverage before your appointment.",
    category: "Insurance"
  },
  {
    id: 2,
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling our office, using our online booking system on the appointments page, or through the patient portal if you're an existing patient.",
    category: "Appointments"
  },
  {
    id: 3,
    question: "What should I bring to my first appointment?",
    answer: "Please bring your insurance card, photo ID, a list of current medications, relevant medical records if available, and any referral forms if required by your insurance.",
    category: "New Patients"
  },
  {
    id: 4,
    question: "Do you offer telehealth appointments?",
    answer: "Yes, we offer telehealth appointments for certain types of visits. Please call our office to determine if your medical issue is appropriate for a virtual visit.",
    category: "Services"
  },
  {
    id: 5,
    question: "What are your office hours?",
    answer: "Our office is open Monday through Friday from 8:00 AM to 5:00 PM. We also offer extended hours on Tuesdays until 7:00 PM and are open on Saturdays from 9:00 AM to 12:00 PM for urgent care needs.",
    category: "General"
  },
  {
    id: 6,
    question: "How do I refill my prescription?",
    answer: "The easiest way to refill a prescription is through our patient portal. Alternatively, you can call our office or have your pharmacy send us an electronic refill request.",
    category: "Medications"
  }
];