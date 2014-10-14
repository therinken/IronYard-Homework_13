var githubUsername = "therinken";
var url = "https://api.github.com/users/" + githubUsername;
$.get(url).then(function(data) {
    drawProfile(data);
})

function drawProfile(data) {
    document.body.innerHTML = [
        '<li><a href="#">',
        data.name,
        '</a></li>',
        '<li><a href="#">',
        ' Company: ',
        data.company,
        '</a></li>',
        '<li><a href="#">',
        ' Blog: ',
        data.blog,
        '</a></li>',
        '<li><a href="#">',
        ' Location: ',
        data.location,
        '</a></li>'
        '<li><a href="#">',
        ' Email: ',
        data.email,
        '</a></li>',
        '<li><a href="#">',
        ' Avatar:',
        data.avatar_url,
        '</a></li>',
        '<li><a href="#">'
        ' Github: ',
        data.html_url,
        '</a></li>'

    ].join('')
}
