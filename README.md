# Urban Routes - End-to-End (E2E) Testing

## Description
Urban Routes is a platform that allows users to order taxis and other amenities through an intuitive interface. This project includes automated tests that cover the full process of ordering a taxi, adding extra items such as a blanket, handkerchiefs, and ice creams, and verifying the ordering functionality, including the payment flow.

The test suite focuses on automating various interactions a user might have with the platform, ensuring that the ordering process works seamlessly from start to finish.

## Technologies and Techniques
This project uses the following technologies and techniques:
- **WebdriverIO**: For writing and running end-to-end automated tests.
- **Mocha**: As the testing framework.
- **Chai**: For assertions to verify expected outcomes.
- **Node.js**: JavaScript runtime environment.
- **JavaScript (ES6)**: The programming language used for the tests.
  
Key techniques applied in the tests:
- Simulating user interactions, such as setting the address, selecting plans, and entering payment information.
- Handling asynchronous operations, waiting for elements like the car search modal and driver info to appear.
- Managing focus changes in input fields to trigger UI state changes.
  
## Test Coverage
The automated tests cover the following user interactions:
- Setting an address for the taxi.
- Selecting the "Supportive" plan.
- Entering a phone number.
- Adding a credit card (handling focus changes for the CVV field).
- Writing a message to the driver.
- Ordering a blanket and handkerchiefs (validating the state change after selection).
- Ordering two ice creams.
- Handling the car search modal and waiting for driver information to appear.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- WebdriverIO and required dependencies installed.

### Installation
1. Create a Directory to store projects:
    cd ~               # make sure you're in your home directory
    mkdir projects     # create a folder called projects
    cd projects        # change directory into the new projects folder
 2. Clone the Repo 
    git clone git@github.com:username/hm08-qa-us.git
 3. Run command npm install in the terminal.
 
## How to run the project
    1. Start New Server
    2. Copy paste server link into configuration file wdio.conf.js
    3. Run automated asychronus tests:
    * Use command npm run wdio in terminal to perform tasks
 