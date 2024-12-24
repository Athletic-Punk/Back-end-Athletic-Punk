import 'dotenv/config';
import app from './src/app.js';

app.listen(process.env.port, () => {
    console.log(`Server is running successfully!`);
})