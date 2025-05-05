import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Medical Director",
    specialty: "Cardiology",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600",
    education: [
      "M.D. Johns Hopkins University",
      "Residency at Mayo Clinic",
      "Fellowship in Cardiology at Cleveland Clinic"
    ],
    bio: "Dr. Johnson has over 15 years of experience in cardiology with a special focus on preventive cardiac care and interventional procedures. She is passionate about patient education and empowering individuals to take control of their heart health."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Senior Physician",
    specialty: "Neurology",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
    education: [
      "M.D. Stanford University",
      "Residency at UCSF Medical Center",
      "Fellowship in Neurology at Massachusetts General Hospital"
    ],
    bio: "Dr. Chen specializes in neurological disorders and stroke prevention. His research in innovative treatments for Parkinson's disease has been published in leading medical journals. He combines cutting-edge treatments with compassionate care."
  },
  {
    id: 3,
    name: "Dr. Amara Patel",
    title: "Physician",
    specialty: "Pediatrics",
    image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=600",
    education: [
      "M.D. University of Pennsylvania",
      "Residency at Children's Hospital of Philadelphia",
      "Board Certified in Pediatrics"
    ],
    bio: "Dr. Patel has dedicated her career to children's health. She focuses on developmental pediatrics and adolescent medicine, providing comprehensive care from infancy through the teenage years. Her gentle approach puts both parents and young patients at ease."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Specialist",
    specialty: "Orthopedics",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600",
    education: [
      "M.D. Duke University",
      "Residency at Hospital for Special Surgery",
      "Fellowship in Sports Medicine at Andrews Institute"
    ],
    bio: "Dr. Wilson is an orthopedic surgeon specializing in sports medicine and joint replacement. Having worked with professional athletes, he brings elite-level care to patients of all activity levels. His minimally invasive techniques promote faster recovery times."
  }
];