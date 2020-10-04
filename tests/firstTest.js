module.exports = {
    'My first test case'(browser){
        browser
            .url('https://flysmartavia.com/')
            .expect.title().to.contain('Smartavia');
    }
}