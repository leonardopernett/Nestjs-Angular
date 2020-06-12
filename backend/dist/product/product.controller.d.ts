import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProduct(): Promise<import("./interface/product.interface").Product[]>;
    getOneProduct(id: string): Promise<import("./interface/product.interface").Product>;
    createProduct(res: any, createProductDto: CreateProductDto, image: any): any;
    deleteTask(productID: any, res: any): any;
    updateProduct(id: string, createProductDto: CreateProductDto, image: any): {
        message: string;
    };
}
