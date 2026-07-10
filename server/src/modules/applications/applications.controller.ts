import { Request, Response } from 'express';
import { applicationsService } from './applications.service.js';
import { ApplyJobInput } from './applications.schema.js';

export class ApplicationsController {
  async list(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const applications = await applicationsService.list(req.user.id);
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { id } = req.params;
      const application = await applicationsService.getById(parseInt(id), req.user.id);
      res.status(200).json(application);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  async apply(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const data: ApplyJobInput = req.body;
      const application = await applicationsService.apply(req.user.id, data);
      res.status(201).json(application);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export const applicationsController = new ApplicationsController();
