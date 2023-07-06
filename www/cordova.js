function openInBrowser() {
    var url = 'https://www.google.com';
    var target = '_system';
    var options = 'location=yes,hidden=yes';
    console.log(options)
    var ref = cordova.InAppBrowser.open(url, target, options);

    ref.addEventListener('loadstart', function (event) {
        console.log('loadstart: ' + event.url);
    });

    ref.addEventListener('loadstop', function (event) {
        console.log('loadstop: ' + event.url);
        ref.show();
    });

    ref.addEventListener('exit', function (event) {
        console.log('exit');
    });
}

openInBrowser();