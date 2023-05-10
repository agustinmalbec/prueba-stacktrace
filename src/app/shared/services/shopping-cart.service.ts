import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class ShoppingCartService {

    products: any[] = [];

    private cartSubjet = new BehaviorSubject<any[]>([]);
    private totalSubjet = new BehaviorSubject<number>(0);
    private quantitySubjet = new BehaviorSubject<number>(0);

    get totalAction$(): Observable<number> {
        return this.totalSubjet.asObservable();
    }
    get quantityAction$(): Observable<number> {
        return this.quantitySubjet.asObservable();
    }
    get cartAction$(): Observable<any[]> {
        return this.cartSubjet.asObservable();
    }

    updateCart(product: any): void {
        this.addToCart(product);
        this.quantityProducts();
        this.calcTotal();
    }

    private addToCart(product: any): void {
        this.products.push(product);
        this.cartSubjet.next(this.products);
    }

    private quantityProducts(): void {
        const quantity = this.products.length;
        this.quantitySubjet.next(quantity);
    }

    private calcTotal(): void {
        const total = this.products.reduce((acc, prod) => acc += parseInt(prod.mass), 0);
        this.totalSubjet.next(total);
    }
}