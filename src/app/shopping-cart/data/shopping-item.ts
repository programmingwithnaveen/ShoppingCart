export class ShoppingCart {
  constructor() {
  }
  shoppingItem: ShoppingItem[] = new Array<ShoppingItem>();
  public name: string = '';
  public address: string= '';
  public address2:string= '';
  public city:string= '';
  public state: string= '';
  public zip:string= '';

}
export class ShoppingItem {
  public productName: string;
  public quantity: number;
  public unitPrice: number;
  public totalPrice: number;
  public imagePath: string;

}
