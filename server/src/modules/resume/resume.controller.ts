import { Request, Response } from 'express';
import { resumeService } from './resume.service.js';

declare global {
  namespace Express {
    interface Request {
      file?: any;
      user?: { id: number; email: string };
    }
  }
}

export class ResumeController {
  async upload(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      const resume = await resumeService.upload(req.user.id, req.file);
      res.status(201).json(resume);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async list(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const resumes = await resumeService.list(req.user.id);
      res.status(200).json(resumes);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { id } = req.params;
      await resumeService.delete(parseInt(id), req.user.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export const resumeController = new ResumeController();
