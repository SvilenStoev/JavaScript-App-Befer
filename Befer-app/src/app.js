import addSession from './middlewares/session.js';
import { page } from './lib.js';
import { logout } from './api/user.js';
import { homePage } from './views/home.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { registerPage } from './views/register.js';
import { decorateContext, updateUserNav } from './middlewares/render.js';

page(addSession);
page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

page.start();

document.getElementById('logoutBtn').addEventListener('click', onLogout);

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/');
}