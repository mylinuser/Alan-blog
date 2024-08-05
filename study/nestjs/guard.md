# 登录鉴权

## 本地验证

新建权限模块和用户模块
```bash
nest g resource auth
nest g resource user
```

安装密码加密依赖`bcryptjs`
```bash
npm i bcryptjs --save
```

安装本地身份认证依赖`passport`
```bash
npm install @nestjs/passport passport passport-local
npm install @types/passport @types/passport-local
```

auth根目录新增本地认证账号密码的文件`local.strategy.ts`

```ts
import { compareSync } from 'bcryptjs';
import { BadRequestException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { IStrategyOptions, Strategy } from 'passport-local';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

export class LocalStorage extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string) {
    // 因为密码是加密后的，没办法直接对比用户名密码，只能先根据用户名查出用户，再比对密码
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.username=:username', { username })
      .getOne();

    if (!user) {
      throw new BadRequestException('用户名不正确！');
    }

    if (!compareSync(password, user.password)) {
      throw new BadRequestException('密码错误！');
    }

    return user;
  }
}
```

用法
```ts{1,6}
import { AuthGuard } from '@nestjs/passport';

@ApiTags('验证')
@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  async login(@Body() user: LoginDto, @Req() req) {
    return req.user;
  }
}
```

此时的`auth.model.ts`
```ts{4,6,4,15,18}
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStorage } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    AuthModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStorage],
  exports: [AuthService],
})
export class AuthModule {}
```

## token认证

JWT token由三个部分组成，头部（header）、有效载荷（payload）、签名（signature）。

安装依赖

```bash
npm i @nestjs/jwt
```

在`auth.module.ts`中引入`JwtModule`

```ts{1,3-6,14,18}
import { JwtModule } from '@nestjs/jwt';

const jwtModule = JwtModule.register({
  secret: '123456',
  signOptions: { expiresIn: '4h' }, // 现在是4小时，后面上redis后去掉
});

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    AuthModule,
    PassportModule,
    jwtModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStorage],
  exports: [AuthService, jwtModule],
})
export class AuthModule {}
```

此时的`auth-controller.ts`

```ts
import {
  Controller,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  async login(@Body() user: LoginDto, @Req() req) {
    return await this.authService.login(req.user);
  }
}
```

此时的`auth-service.ts`

```ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // 生成token
  createToken(user: Partial<User>) {
    return this.jwtService.sign(user);
  }

  async login(user: Partial<User>) {
    const token = this.createToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });

    return { token };
  }
}
```