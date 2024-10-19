const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
    
    it('Should Input Addresses', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect(await $(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect(await $(page.toField)).toHaveValue('1300 1st St');
    })
    it('Should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportivePlan = await page.selectSupportivePlan ();
        await expect(selectSupportivePlan.parentElement()).toHaveElementClass('active');
    })
    it('should add credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.paymentMethod();
        await page.fillCardFields();
        await page.fillCardCode();
        await page.paymentModal();
        await expect(await $(page.cardAddedButton)).toBeExisting();    
    })
    it('should add message', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const message = 'Hungry';
        await page.messageField(message);
        await expect(await $(page.customerMessage)).toHaveValue(message);
    })
    it('should click blanket and handkercheif button', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectingBlankHandkercheif();
        await expect(await $(page.checkButton)).toBeChecked();
    })
    it('should add two ice creams button', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.pressPlusButton();
        await expect(await $(page.iceCreamCounter)).toBeExisting();
    })
    it ('should open car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.sendOrder();
        await expect(await $(page.carSearchModal)).toBeExisting();
        
    })
    it ('should open driver info modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.sendOrder();
        await browser.pause(40000)
        await expect(await $(page.driverModal)).toBeExisting();
    })
})
