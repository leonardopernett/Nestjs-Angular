import { Product } from './interface/product.interface';
import { CreateProductDto } from './dto/product.dto';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly modelProduct;
    constructor(modelProduct: Model<Product>);
    getProduct(): Promise<Product[]>;
    getOneProduct(id: string): Promise<Product>;
    createProduct(product: CreateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<any>;
    updateProduct(id: string, createProductDto: CreateProductDto): Promise<Product>;
}
