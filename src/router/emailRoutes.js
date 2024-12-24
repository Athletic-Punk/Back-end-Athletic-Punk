import emailControllers from '../controller/emailControllers.js';

const emailRoutes = (app) => {
  app.post('/welcome', emailControllers.welcomeEmail);
}

export default emailRoutes;