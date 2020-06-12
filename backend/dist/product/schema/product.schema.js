"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date, default: Date.now()
    }
}, {
    timestamps: true
});
//# sourceMappingURL=product.schema.js.map