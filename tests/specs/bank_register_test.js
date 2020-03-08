describe('Google\'s Search Functionality', () => {
  it('can find search results', () => {

      browser.url('https://parabank.parasoft.com/parabank/index.htm');

      $('#loginPanel > p:nth-child(3) > a').click();

      browser.getTitle().should.match(/ParaBank | Register for Free Online Account Access/i);
      
      $('//*[@name="customer.firstName"]').setValue('Automation');
      $('//*[@name="customer.lastName"]').setValue('Tester');
      $('//*[@name="customer.address.street"]').setValue('Oxford Street');
      $('//*[@name="customer.address.city"]').setValue('London');
      $('//*[@name="customer.address.state"]').setValue('London');
      $('//*[@name="customer.address.zipCode"]').setValue('EY12SS');
      $('//*[@name="customer.phoneNumber"]').setValue('0987654321');
      $('//*[@name="customer.ssn"]').setValue('SS23456B');
      $('//*[@name="customer.username"]').setValue('autotester');
      $('//*[@name="customer.password"]').setValue('Password@123');
      $('//*[@name="repeatedPassword"]').setValue('Password@123');
      $('#customerForm').click();
  });
});