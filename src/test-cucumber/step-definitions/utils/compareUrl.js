export default async function compareUrl(destPage){
    
    const currentUrl = await browser.getUrl();
    const baseUrl = 'https://www.saucedemo.com';
    const expectedUrl = baseUrl + '/' + destPage.toLowerCase() + '.html';

    switch (destPage.toLowerCase()){
        case "inventory":
            return await expect(currentUrl).toEqual(expectedUrl.toLowerCase());
        default:
            throw Error(`${destPage} is not a valid page`);
    }
}