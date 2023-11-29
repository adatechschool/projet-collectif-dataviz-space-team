/*initialisation des dépendances*/

const puppeteer = require('puppeteer');

const fs = require('fs');


const scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const urls = [
        "https://www.simplyscience.ch/fr/enfants/xa/une-annee-sur-terre-sur-mars-ou-sur-les-autres-planetes",
        "https://guydoyen.fr/2021/10/27/temperatures-sur-chaque-planete-du-systeme-solaire"
    ]

    for (const url of urls) {
        await page.goto(url);
    
        
    }
    
    const data = { titles };
    const jsonData = JSON.stringify(data, null, 2);
}

