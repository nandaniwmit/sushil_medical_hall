export type StockStatus = 'Available' | 'Limited Stock' | 'Out of Stock';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  dosage: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: StockStatus;
  description: string;
  requiresPrescription: boolean;
  indication: string;
  packSize: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  itemsCount: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'dispensary';
  imageUrl: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  icon: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineName: string;
  quantity: string;
  prescriptionAvailable: 'Yes' | 'No';
  message: string;
  preferredDeliveryTime: string;
}
