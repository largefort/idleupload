var progressElement = document.getElementById('upload-progress');
var uploadedDataElement = document.getElementById('uploaded-data');
var uploadSpeedElement = document.getElementById('upload-speed');
var creditsElement = document.getElementById('credits');
var upgradeButton = document.getElementById('upgrade-button');
var hireButton = document.getElementById('hire-button');

var progress = 0;
var uploadedData = 0;
var uploadSpeed = 0;
var credits = 0;
var fileManagers = 0;
var earningRate = 0.2;

function startUpload() {
    var uploadButton = document.getElementById('upload-button');
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

function upgradeSpeed() {
    if (credits >= 10) {
        credits -= 10;
        uploadSpeed += 1;
        creditsElement.textContent = 'Credits: ' + credits;
        uploadSpeedElement.textContent = 'Upload Speed: ' + uploadSpeed + ' MB/s';
    }
}

function hireFileManager() {
    var hiringCost = Math.floor(fileManagers * 10 + 10);
    if (credits >= hiringCost) {
        credits -= hiringCost;
        fileManagers += 1;
        creditsElement.textContent = 'Credits: ' + credits;
        updateEarningRate();
    }
}

function updateEarningRate() {
    earningRate = 0.2 + fileManagers * 0.1;
}
