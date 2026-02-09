import {expect, Locator, test} from '@playwright/test'


test('add prodduct to cart', async ({page}): Promise<void> => {
    await page.goto('https://automationexercise.com',{ waitUntil: 'domcontentloaded' });
    
    let username:string='abhishekPlay1';
    let userEmail:string='abhishekPlay1@gmail.com'
    let password:string="abhishekPlay@1"

    //Home Page
    const loginButton:Locator = page.locator('a[href="/login"]')
    const deleteAccountLink:Locator=page.locator('a[href="/delete_account"]')
    const name:Locator= page.locator('[data-qa="signup-name"]')
    const emailAddress:Locator=page.locator('[data-qa="signup-email"]')
    const signUpButton:Locator=page.getByRole('button',{name:'Signup'})
    
    //SignUp Page Info:
    const SignUpHeadingText:Locator=page.getByText('Enter Account Information');
    const title:Locator=page.locator('#id_gender1')
    const nameTxt:Locator=page.locator('#name');
    const emailTxt:Locator=page.locator('#email');
    const passwordTxt:Locator=page.locator('#password');
    const daysDropdown:Locator=page.locator('#days')
    const monthDropdown:Locator=page.locator('#months')
    const yearDropdown:Locator=page.locator('#years')
    const firstNameTxt:Locator=page.locator('#first_name')
    const lastNameTxt:Locator=page.locator('#last_name')
    const companyTxt:Locator=page.locator('#company')
    const address1Txt:Locator=page.locator('#address1')
    const countryDropdown:Locator=page.locator('#country')
    const stateTxt:Locator=page.locator('#state')
    const cityTxt:Locator=page.locator('#city')
    const zipcodeTxt:Locator=page.locator('#zipcode')
    const mobileNumberTxt:Locator=page.locator('#mobile_number')
    const createAccountButton=page.getByRole('button',{name:'Create Account'})

    // Account Created Page
    const textAccountCreated:Locator=page.locator('.title b');
    const continueButton:Locator=page.locator('[data-qa="continue-button"]')

    await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
    await loginButton.click()
    await expect(page.getByText('New User Signup!')).toBeVisible();
    await name.fill(username)
    await emailAddress.fill(userEmail)
    await signUpButton.click()
    expect(SignUpHeadingText).toBeVisible();
    await title.check();
    await expect(nameTxt).toHaveValue(username)
    
    await expect(emailTxt).toHaveValue(userEmail)
    await expect(emailTxt).toBeDisabled();
    await passwordTxt.fill(password)
    await daysDropdown.selectOption('15');
    await monthDropdown.selectOption('May');
    await yearDropdown.selectOption('1993')
    await firstNameTxt.fill(username);
    await lastNameTxt.fill('ModiPlay1')
    await companyTxt.fill('Glob1');
    await address1Txt.fill('Magar Patta 1, globant')
    await countryDropdown.selectOption('India')
    await stateTxt.fill('Maharashtra')
    await cityTxt.fill('Pune')
    await zipcodeTxt.fill('411030')
    await mobileNumberTxt.fill('9527523242')
    await createAccountButton.click();
    await expect(textAccountCreated).toHaveText('Account Created!');
    await continueButton.click();
    await deleteAccountLink.click();
    await expect(textAccountCreated).toHaveText('Account Deleted!');
    await continueButton.click();

})