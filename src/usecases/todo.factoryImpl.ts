import { TodoDto } from './todo.dto';
import { TodoFactory } from './todo.factory';
import { TodoDto as AdapterTodoDto } from '../interfaceAdapters/todo.dto';
import { AddTodoDto } from './addTodo.dto';
import { AddTodoDto as AdapterAddTodoDto } from '../interfaceAdapters/repositories/addTodo.dto';
import { UpdateTodoDto } from './update.todo.dto';
import { UpdateTodoDto as AdapterUpdateTodoDto } from '../interfaceAdapters/repositories/updateTodo.dto';

export class TodoFactoryImpl implements TodoFactory {
  convertToTodoDto(todoDto: TodoDto): AdapterTodoDto {
    return new AdapterTodoDto(
      todoDto.getId(),
      todoDto.getTitle(),
      todoDto.getUserId(),
      todoDto.getStatus(),
      todoDto.getCreatedAt(),
      todoDto.getFinishedAt(),
    );
  }

  convertToAddTodoDto(addTodoDto: AddTodoDto): AdapterAddTodoDto {
    return new AdapterAddTodoDto(addTodoDto.getUserId(), addTodoDto.getTitle());
  }

  convertToUpdateTodoDto(todoDto: UpdateTodoDto): AdapterUpdateTodoDto {
    return new AdapterUpdateTodoDto(
      todoDto.getId(),
      todoDto.getTitle(),
      todoDto.getStatus(),
    );
  }
}