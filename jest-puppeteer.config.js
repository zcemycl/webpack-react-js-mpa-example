const ci = Boolean(process.env.CI || false);

const baseOptions = {
    server: {
        command: 'npm run start',
    }
}

const ciPipelineOptions = {
    launch: {
        executablePath: '/usr/bin/google-chrome-stable',
        headless: true,
        slowMo: 100,
        args: [
            '--ignore-certificate-errors',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu'
        ]
    },
    server: baseOptions.server
}

console.log(ci)

module.exports = ci ? ciPipelineOptions : baseOptions;