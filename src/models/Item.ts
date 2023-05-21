type Item = {
  name: string;
  price: number;
};

export default Item;

/* export default class Item {
  constructor(private namem: string, private pricem = 0) {
    this.namem = namem;
    this.pricem = pricem;
  }

  get price(): number {
    return this.pricem;
  }

  set price(p: number) {
    this.pricem = p;
  }

  get name() {
    return this.namem;
  }
}
 */
