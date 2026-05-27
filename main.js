import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const { Client, LocalAuth } = pkg;

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
    console.log('Autenticado!');
});

client.on('ready', () => {
    console.log('Cliente pronto!');
});

client.on('auth_failure', msg => {
    console.log('Erro auth:', msg);
});

client.on('loading_screen', (percent, message) => {
    console.log(percent, message);
});

client.initialize();