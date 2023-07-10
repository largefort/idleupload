var progressElement = document.getElementById('upload-progress');
var uploadedDataElement = document.getElementById('uploaded-data');
var uploadSpeedElement = document.getElementById('upload-speed');
var creditsElement = document.getElementById('credits');
var upgradeButton = document.getElementById('upgrade-button');
var uploadButton = document.getElementById('upload-button');

var progress = 0;
var uploadedData = 0;
var uploadSpeed = 0;
var credits = 0;
var fileManagers = 0;
var earningRate = 0.2;

function startUpload() {
    uploadButton.disabled = true;

    var uploadInterval = setInterval(function() {
        progress += uploadSpeed;
        uploadedData += uploadSpeed;
        uploadSpeed = Math.floor(Math.random() * 10) + 1;

        if (progress >= 100) {
            progress = 100;
            clearInterval(uploadInterval);
            credits += Math.floor(uploadedData * earningRate);
            creditsElement.textContent = 'Credits: ' + credits;
            uploadButton.disabled = false;
            progress = 0;
            uploadedData = 0;
            uploadSpeed = 0;
            progressElement.textContent = progress + '%';
            uploadedDataElement.textContent = 'Uploaded Data: ' + uploadedData + ' MB';
            uploadSpeedElement.textContent = 'Upload Speed: ' + uploadSpeed + ' MB/s';
        }

        progressElement.textContent = progress + '%';
        uploadedDataElement.textContent = 'Uploaded Data: ' + uploadedData + ' MB';
        uploadSpeedElement.textContent = 'Upload Speed: ' + uploadSpeed + ' MB/s';
    }, 1000);
}
