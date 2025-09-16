import auth from './auth.js';

const adminAuth = async (req, res, next) => {
  auth(req, res, () => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
    }
    next();
  });
};

export default adminAuth;