 //eval turns the string into a variable

export function loadPage(pageId) {
    if (pageId != '') {
        $.get(`pages/${pageId}.html`, function (data) {
        console.log('data ' + data);
        $('#app').html(data);
            });
        } else {
            $.get(`pages/home.html`, function (data) {
            console.log('data ' + data);
            $('#app').html(data);
        });
        }
}


export function mixWords(firstWord, secondWord){
    let newWord = secondWord + " " + firstWord
    alert(newWord)
}