function upload() {
    const progressElement = document.getElementById('uploadProgress');
    const fileInput = document.getElementById("uploadInput");
    const su = new SmashUploader({ region: "us-east-1", 
         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZkODE0ZjdiLTQzNWYtNDhmYy1iMDU0LTcxYmQzMjMwNWJiNy1ldSIsInVzZXJuYW1lIjoiMjk0ZmRiNTMtOWZmOS00YWVlLWFkODgtNjcwZGM1Y2Y3MGZmIiwicmVnaW9uIjoidXMtZWFzdC0xIiwiaXAiOiIyODA0OjE0YzpkZTg1Ojg0YTY6NDQ2NzpmYmM0OjI1NzQ6OThkIiwic2NvcGUiOiJOb25lIiwiYWNjb3VudCI6ImZlZjM2ODk3LTBlYTItNDhhMy1iZGUwLTBjNTA0YTJiYjIzZi1lYSIsImlhdCI6MTcyNDY4OTQzMCwiZXhwIjo0ODgwNDQ5NDMwfQ.7UerYuIKJsKvVpbbvvQC9mQy7VmNrZRSjIcF6P5z1Fk" });

    progressElement.hidden = false;

    su.upload({ files: [...fileInput.files] })
        .then(transfer => {
             console.log("Transfer", transfer);
             progressElement.value = 100; 
            })
        .catch(error => {
             console.log("Error", error); 
             progressElement.hidden = true;
            });

            su.on('progress', (event) => {
                const progressData = event.data && event.data.progress;
               
                if (progressData && progressData.percent !== undefined) {
                    progressElement.value = progressData.percent;
                    console.log('Progress:', progressData.percent)
                } else {
                    console.log('deu merda')
                }
            })

    //su.on('progress', (event) => { console.log(event.data.progress.percent); });
}