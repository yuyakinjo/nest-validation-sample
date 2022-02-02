import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { GreetingDto } from './greeting-dto';

@Controller()
export class AppController {
  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  getHello(@Query() queries: GreetingDto, @Param() params: GreetingDto) {
    return { queries, params };
  }

  @Post()
  getGreeting(@Body() greeting: GreetingDto) {
    return greeting;
  }
}
