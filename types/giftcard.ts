export interface GiftCard {
  id: string;
  name: string;
  amount: number;
  brand: string;
  imageUrl: string;
  status: 'available' | 'soldout';
}