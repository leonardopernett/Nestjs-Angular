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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
let ProductService = class ProductService {
    constructor(modelProduct) {
        this.modelProduct = modelProduct;
    }
    async getProduct() {
        return await this.modelProduct.find();
    }
    async getOneProduct(id) {
        return await this.modelProduct.findOne({ _id: id });
    }
    async createProduct(product) {
        const prod = new this.modelProduct(product);
        return await prod.save();
    }
    async deleteProduct(id) {
        const product = await this.modelProduct.findByIdAndDelete(id);
        return await fs_extra_1.unlink(path_1.resolve('./dist/public' + product.imageUrl));
    }
    async updateProduct(id, createProductDto) {
        const product = await this.modelProduct.findById(id);
        await fs_extra_1.unlink(path_1.resolve('./dist/public' + product.imageUrl));
        return await this.modelProduct.findByIdAndUpdate(id, createProductDto);
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map