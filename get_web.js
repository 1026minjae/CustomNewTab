var request = require("request");
var cheerio = require("cheerio");

var url = "https://www.bugil.hs.kr/jsp/index/intro.jsp";

request(url, function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);

        $(".entry-title > a").each(function () {
            var post = {"title": "", "link": "", "summary": "", "category": []};
            var data = $(this);

            post["title"] = data.text();
            post["link"] = data.attr("href");
        });
    }
})
