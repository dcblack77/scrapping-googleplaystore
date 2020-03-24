const request = require('request-promise');
const cheerio = require('cheerio');
const json2xls = require('json2xls')
const fs = require('fs');
//const writeStream = fs.createWriteStream('quotes.csv');


// Get Data from app page
async function onlyScrap(link) {
    try {
        const $ = await request({
            uri: `https://play.google.com${link}`,
            transform: body => cheerio.load(body)
        });
        let information = $('.hAyfc')
        return data = {
            title: $('.AHFaub span').text(),
            description: $('.DWPxHb').text(),
            update: information.find('.IQ1z0d .htlgb').html(),
            size: information.next().find('.IQ1z0d .htlgb').html(),
            downloads: information.next().next().find('.IQ1z0d .htlgb').html(),
            version: information.next().next().next().find('.IQ1z0d .htlgb').html(),
            req: information.next().next().next().next().find('.IQ1z0d .htlgb').html(),
            class: information.next().next().next().next().next().find('.IQ1z0d .htlgb div').html(),
            price: information.next().next().next().next().next().next().find('.IQ1z0d .htlgb').html(),
            offer: information.next().next().next().next().next().next().next().next().next().find('.IQ1z0d .htlgb').html(),
            dev: information.next().next().next().next().next().next().next().next().next().next().find('.IQ1z0d .htlgb .hrTbp').attr('href'),
        }
    } catch (error) {
        console.log(error)
    }
}



// Get 50 first URL from Search page on Google Play Store and create xls file
let scrap = async(req, res) => {
    try {
        const date = Date.now();
        const $ = await request({
            uri: req.body.url,
            transform: body => cheerio.load(body)
        });

        const datas = [];
        const data = await $('.ImZGtf').each(async(i, el) => {
            const link = $(el).find('a').attr('href');

            datas.push(await onlyScrap(link));

            let xls = json2xls(datas)
            let file = `xls/scrap-${date}.xlsx`
            fs.writeFileSync(`${file}`, xls, 'binary');

        });

        res.json({
            ok: true
        })



    } catch (err) {
        res.json({
            ok: false,
            err
        });
    }

}

module.exports = {
    scrap
};