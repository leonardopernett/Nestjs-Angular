"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_dto_1 = require("./dto/product.dto");
const platform_express_1 = require("@nestjs/platform-express");
const product_service_1 = require("./product.service");
const multer_1 = require("multer");
const path_1 = require("path");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProduct() {
        return this.productService.getProduct();
    }
    getOneProduct(id) {
        return this.productService.getOneProduct(id);
    }
    createProduct(res, createProductDto, image) {
        const img = '/uploads/' + image.filename;
        const { name, description, imageUrl, price, createdAt } = createProductDto;
        const newProduct = {
            name: name,
            description: description,
            imageUrl: img,
            price: price,
        };
        this.productService.createProduct(newProduct);
        return res.json('products created');
    }
    deleteTask(productID, res) {
        this.productService.deleteProduct(productID);
        return res.json({
            message: 'product deleted'
        });
    }
    updateProduct(id, createProductDto, image) {
        const img = '/uploads/' + image.filename;
        const { name, description, price } = createProductDto;
        const newProduct = {
            name: name,
            description: description,
            imageUrl: img,
            price: price
        };
        this.productService.updateProduct(id, newProduct);
        return {
            message: 'product updated'
        };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProduct", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getOneProduct", null);
__decorate([
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_1.diskStorage({
            destination: path_1.resolve('./dist/public/uploads'),
            filename: (req, file, cb) => {
                cb(null, Date.now() + path_1.extname(file.originalname));
            }
        })
    })),
    common_1.HttpCode(200),
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createProduct", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Query('productID')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "deleteTask", null);
__decorate([
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_1.diskStorage({
            destination: path_1.resolve('./dist/public/uploads'),
            filename: (req, file, cb) => {
                cb(null, Date.now() + path_1.extname(file.originalname));
            }
        })
    })),
    common_1.Put(':id/edit'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()), __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
ProductController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map