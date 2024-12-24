import express from 'express';
import emailRoutes from './emailRoutes.js';

const routes = (app) => {
    app.get("/", (req, res) => res.status(200).send('Welcome to the Email Service API!'));

    emailRoutes(app);
}

export default routes;