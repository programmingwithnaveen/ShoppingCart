export class ShoppingCart {
  shoppingItem: ShoppingItem[] = [];
  public name: string = '';
  public address: string = '';
  public address2: string = '';
  public city: string = '';
  public state: string = '';
  public zip: string = '';

  constructor() {
  }

}

export class ShoppingItem {
  public productName: string;
  public quantity: number;
  public unitPrice: number;
  public totalPrice: number;
  public imagePath: string;

}
