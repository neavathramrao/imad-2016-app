var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
'article-one': {
    title: "Article one | Ramarao Nenavath",
    heading: "Article One",
    date: "sep 30",
    content: `
        <p>this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article
         </p>
         <p>this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article
       </p>
        <p>this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article. this is the content fot my first article
        </p> `
    
},
'artcle-two': {
    title: "Article two | Ramarao Nenavath",
    heading: "Article two",
    date: "sep 30, 2016",
    content: `
       <p> Hey, this is second article, have fun buddy. Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy. </p>
       <p> Hey, this is second article, have fun buddy. Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy. </p>
       <p> Hey, this is second article, have fun buddy. Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy. </p>
       <p> Hey, this is second article, have fun buddy. Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy.  Hey, this is second article, have fun buddy. </p>
       `
    },
'article-three': {
    title: "Article three | Ramarao Nenavath",
    heading: "Article three",
    date: "sep 31, 2016",
    content: `
        <p>My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, 
         </p>
         <p>My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, 
       </p>
        <p>My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, My third article, yeas it is my third article, 
        </p> `
    }
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name= "vieport" content = "width-device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
        
        <body>
            <div class = "container">
                <div>
                    <a href= "/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                    </p>
                </div>
            </div>
        </body>
    </html>
    
    `;
    return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/:articleName", function(req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
} );


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
