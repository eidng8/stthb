'use strict';

startWebServer('127.0.0.1', 'www', startTest);

function startWebServer(host, root, cb) {
    // Serve up public/ftp folder
    const serve = require('serve-static')(root);

    // Create server
    const server = require('http').createServer(
        (req, res) => serve(req, res, require('finalhandler')(req, res))
    );

    // Listen
    server.listen(
        0, host, 511, () => {
            const port = server.address().port;
            console.log(`Started web server on ${host}:${port}`);
            process.on('exit', () => stopWebServer(server));
            cb(`http://${host}:${port}`);
        }
    );
}

function stopWebServer(server) {
    server.close();
    console.log('Web server stopped');
}

function startTest(url) {
    const argv = ['--baseUrl', url]         // use the correct URL
        .concat(process.argv.slice(2));     // forward args to protractor

    require('child_process')
        .spawn('protractor', argv, {stdio: 'inherit', shell: true})
        .once('close', code => process.exit(code));
}
