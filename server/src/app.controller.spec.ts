import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('Controller: App', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getCountries', () => {
    it('should call', () => {
      expect(appController.getCountries()).toHaveBeenCalled();
    });
  });

  describe('getSummary', () => {
    it('should call', () => {
      expect(appController.getSummary()).toHaveBeenCalled();
    });
  });
});
