fetch(`https://api.github.com/users/mojombo`)
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            console.log(githubUser);
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => alert(error.message));