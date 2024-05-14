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
exports.GetController = void 0;
const common_1 = require("@nestjs/common");
const get_outputform_1 = require("./get.outputform");
let GetController = class GetController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    run(user_id) {
        const taskDto = this.todoService.getTodoList(user_id);
        return taskDto.map((task) => {
            return new get_outputform_1.GetOutputForm(task.getId(), user_id, task.getTitle(), task.getCreatedAt());
        });
    }
};
exports.GetController = GetController;
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Query)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], GetController.prototype, "run", null);
exports.GetController = GetController = __decorate([
    (0, common_1.Controller)('todo'),
    __param(0, (0, common_1.Inject)('TodoService')),
    __metadata("design:paramtypes", [Object])
], GetController);
//# sourceMappingURL=get.controller.js.map