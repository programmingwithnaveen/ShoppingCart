export class ShoppingCart {
  shoppingItem?: ShoppingItem[] = [];
  public username: string;
  public address: string;
  public address2: string;
  public city: string;
  public state: string;
  public zip: string;
  public role?: string;
  public email?: string;
  public orderDate?: string;
  public deliveryDate?: string;
  public totalPrice?: number;

  constructor() {
  }

}

export class ShoppingItem {
  public productName: string;
  public quantity: number;
  public unitPrice: number;
  public totalPrice: number;
  public productURL: string;
  public productType: string;
  public productCode: number;
}

export class ProductItem {
  public productName: string = '';
  public productType: string = '';
  public productURL: string = '';
  public unitPrice: number;
  public uom: string = '';
  public productCode: number;

}
