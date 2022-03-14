import { assert } from "console"

describe('Master', function () {
    it.only('can login', function () {
        browser.url('/sign-in')
        
        const email = $('input[name="email"]')
        email.setValue('testuser@gmail.com')
        const password = $('input[name="password"]')
        password.setValue('12345678')
        
        const signIn = $('button[class="styles_btn__9DPcn styles_btnColorOrange__Jnd2G styles_btnStyleFilled__UVKdC"]')
        signIn.click()
        
        const button = $('img[class="styles_dropdownMenuImg__JuiAr"]')  
        //assert(!button.isDisplayed(), 'Err0r')
        
        //browser.pause(200000)
    })
})