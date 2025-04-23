import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entities/user.entity';
// import { UsersController } from './users.controller';
// import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { UsersController } from 'src/controller/user.controller';
import { UserService } from '../service/user.service';
import { MailService } from 'src/service/mailer.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Startup } from 'src/entities/businessprofileentities/startup.entity';
import { InvestorService } from 'src/service/businessprofileservice/investor.service';
import { Investor } from 'src/entities/businessprofileentities/investor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Startup,Startup,Investor]), JwtModule.register({
    secret: process.env.JWT_SECRET,
  }),],
  controllers: [UsersController],
  providers: [UserService, MailService, JwtService,InvestorService],
  exports: [UserService], // export UserService so other modules can use it
})
export class UsersModule {}
