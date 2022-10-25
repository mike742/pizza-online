import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: Product;
  imageUrl: string;
  
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {

    const id = Number( this.route.snapshot.paramMap.get('id') );
    console.log('id = ', id);
    
    this.productService.getProduct(id).subscribe((p: any) => {
      this.product = p;
      this.imageUrl = p.imageUrl;
    })
  }
}
