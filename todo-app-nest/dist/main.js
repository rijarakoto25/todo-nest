"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const PORT = 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ credentials: true, origin: "http://localhost:4200" });
    await app.listen(PORT, () => console.log(`Server started`));
}
bootstrap();
//# sourceMappingURL=main.js.map