import { validationResult } from 'express-validator';

export const signUp = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return;
  }

  const { name, email, password } = req.body;
};
