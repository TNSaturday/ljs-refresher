// Same logic as before but with async/await
async function showAvatar() {

    // запрашиваем информацию о пользователе из github
    let response = await fetch('https://api.github.com/users/mojombo');
    let user = await response.json();

    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = user.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return user;
}

showAvatar().then(user => {
    console.log(user);
});