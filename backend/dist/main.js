"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, 'public'));
    app.enableCors();
    await app.listen(3000);
    console.log(' 🔐 server on port 3000');
}
main();
//# sourceMappingURL=main.js.map