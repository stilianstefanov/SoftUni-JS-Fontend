function solve(inputArr) {
    let articles = {};
    let users = [];

    for (const commandInfo of inputArr) {
        if (commandInfo.includes('user')) {
            const userName = commandInfo.split('user ')[1];
            users.push(userName);
            
        } else if(commandInfo.includes('article')) {
            const articleName = commandInfo.split('article ')[1];
            articles[articleName] = [];

        } else {
            let [userArticleInfo, commentInfo] = commandInfo.split(': ');
            let [userName, articleName] = userArticleInfo.split(' posts on ');
            let [commentTitle, commentContent] = commentInfo.split(', ');

            if (users.includes(userName) && articles.hasOwnProperty(articleName)) {
                let comment = {
                    title: commentTitle,
                    content: commentContent,
                    user: userName
                }
                articles[articleName].push(comment);
            }
        }
    }
    let sortedArticles = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);

    for (const [article, comments] of sortedArticles) {
        console.log(`Comments on ${article}`);

        for (const comment of comments.sort((a, b) => a.user.localeCompare(b.user))) {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`)
        }
    }
}