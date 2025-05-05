export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  image: string;
  education: string[];
  bio: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  doctor: string;
  isNewPatient: boolean;
  additionalInfo?: string;
}