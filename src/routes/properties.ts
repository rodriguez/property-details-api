import express, { Express, Request, Response } from 'express';
const router = express.Router();

// sanity check for this router
router.get('/', function(req: Request, res: Response, next: any) {
  res.send({ message: 'chu' });
});

router.get('/', function(req: Request, res: Response, next: any) {
  res.send({ message: 'chu' });
});


export const propertyRouter = router;