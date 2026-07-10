import { Router } from 'express';
import { profileController } from '../profile.controller.js';
import { authenticate } from '../../../common/middleware/auth.js';
import { validate } from '../../../common/middleware/validate.js';
import { updateProfileSchema, experienceSchema, educationSchema, skillSchema } from '../profile.schema.js';

const router = Router();

router.get('/', authenticate, profileController.getProfile);
router.put('/', authenticate, validate(updateProfileSchema), profileController.updateProfile);
router.post('/experience', authenticate, validate(experienceSchema), profileController.addExperience);
router.post('/education', authenticate, validate(educationSchema), profileController.addEducation);
router.post('/skills', authenticate, validate(skillSchema), profileController.addSkill);

export default router;
