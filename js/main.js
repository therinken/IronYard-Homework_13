var githubUsername = "therinken";
var url = "https://api.github.com/users/" + githubUsername;
$.get(url).then(function(data) {
    drawProfile(data);
})

function drawProfile(data) {
    document.body.innerHTML = [
        '<div class="flex-item">',
        data.name,
        '</div>',
        '<div class="flex-item">',
        ' Company: ',
        data.company,
        '</div>',
        '<div class="flex-item">',
        ' Blog: ',
        data.blog,
        '</div>',
        '<div class="flex-item">',
        ' Location: ',
        data.location,
        '</div>',
        '<div class="flex-item">',
        ' Email: ',
        data.email,
        '</div>',
        '<div class="flex-item">',
        ' Avatar:',
        data.avatar_url,
        '</div>',
        '<div class="flex-item">',
        ' Github: ',
        data.html_url,
        '</div>',
        '</div>'

    ].join('')
}
