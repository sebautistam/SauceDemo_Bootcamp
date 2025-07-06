import LoginPage from "./login.page";
import InventoryPage from "./inventory.page";

function pages (name) {
    const keyNamePage = name.toLowerCase();

    switch (keyNamePage) {
        case 'login':
            return new LoginPage();
        case 'inventory':
            return new InventoryPage();
        default:
            throw new Error('Page not in the index');
    }
}

export { LoginPage, InventoryPage, pages};