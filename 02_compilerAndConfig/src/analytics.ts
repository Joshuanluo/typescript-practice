console.log('Sending data...');

let logged;

function sendAnalytics(data: string){
    console.log(data);
    logged=true;
}

sendAnalytics('the data')