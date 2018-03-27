export class ShoppingCart {
  constructor() {
  }
  shoppingItem: ShoppingItem[] = new Array<ShoppingItem>();
  public name: string ;
}
export class ShoppingItem {
  public productName: string;
  public quantity: number;
  public unitPrice: number;
  public totalPrice: number;

}
