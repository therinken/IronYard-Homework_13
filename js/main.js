_.templateSettings.interpolate = /{([\s\S]+?)}/g;

var gitProBasic = [
    '<img src="{avatar_url}">',
        '<h1>{name}</h1>',
        '<ul class="flex-container">',
            '<li class="flex-item"> email: {email} </li>',
            '<li class="flex-item"> Location: {location} </li>',
            '<li class="flex-item"> Blog: {blog} </li>',
        '</ul>'
].join('');

function writeToDom(data) {
    document.body.innerHTML = _.template(gitProBasic, data);
}

$.getJSON("https://api.github.com/users/therinken").then(writeToDom)