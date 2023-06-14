import express, { Express, Request, Response } from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: any) {
  res.send('respond with a resource');
});

export const usersRouter = router;
