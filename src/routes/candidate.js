import express from 'express';
import controller from '../controllers/candidate';

const router = express.Router();

router.get('/:username', controller.get);

export default router;
