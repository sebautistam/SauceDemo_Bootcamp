class InventoryPage {

    selectors = {
        titletext: '//*[contains(@class, "app_logo")]'
    }

    get titleText() {
        return $(this.selectors.titletext)
    }
}

export default InventoryPage;

/**
 * @locators  
 * Dashboardd Title:  $('//*[contains(@class, "app_logo")]')  
 */