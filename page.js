module.exports = {
    // These are the Locators
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    creditCardField:'#number',
    cardCodeField: '.card-code-input #code',
    customerMessage: '#comment',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    linkCardButton: 'button=Link',
    selectSupportivePlanButton: 'div=Supportive',
    selectSleepyPlanButton: 'div=Sleepy',
    paymentMethodButton: '.pp-text',
    cardAddedButton: 'div=Card',
    addCardButton: 'div=Add card',
    handkercheifButton: '.switch',
    checkButton: '.switch-input',
    iceCreamCounter: 'div=2',
    plusButton: 'div=+',
    carOrderButton: '.smart-button',
    // Modals
    phoneNumberModal: '.modal',
    carSearchModal: 'div=Car search',
    driverModal: 'div*=The driver will arrive in',
     // Functions Below
   
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    selectSupportivePlan: async function() {
        const selectSupportivePlanButton = await $(this.selectSupportivePlanButton);
        await selectSupportivePlanButton.waitForDisplayed();
        await selectSupportivePlanButton.click();
        return selectSupportivePlanButton;
    },
    sendOrder: async function () {
        const selectSleepyPlanButton = await $(this.selectSleepyPlanButton);
        await selectSleepyPlanButton.waitForDisplayed();
        await selectSleepyPlanButton.click();
        const carOrderButton = await $(this.carOrderButton);
        await carOrderButton.waitForDisplayed()
        await carOrderButton.click();
        
     },
    

    paymentMethod:  async function () {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

    },

    fillCardFields: async function () {
        const addCreditCardNumber = await $(this.creditCardField);
        await addCreditCardNumber.setValue('1776 1977 1945');
        return addCreditCardNumber;
    },
    
    fillCardCode: async function () {
        const addCardCodeNumber = await $(this.cardCodeField);
        await addCardCodeNumber.setValue ('12');
        return addCardCodeNumber;
     },

    paymentModal: async function () {
        await browser.keys('Tab');
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();     
    },
    

    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    messageField: async function (message) {
        const customerMessage = await $(this.customerMessage);
        await customerMessage.waitForDisplayed();
        await customerMessage.setValue(message);
    },

    selectingBlankHandkercheif: async function () {
        const handkercheifButton = await $(this.handkercheifButton);
        await handkercheifButton.waitForDisplayed();
        await handkercheifButton.click();
        
    },

    pressPlusButton: async function () {
        const plusButton = await $(this.plusButton);
        await plusButton.waitForDisplayed();
        await plusButton.click();
        await plusButton.click();
        
    },

    


    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
};