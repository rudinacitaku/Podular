function CustomerLogout() {
    localStorage.removeItem('customer_login');
    localStorage.removeItem('customer_username');
    window.location.href='/';
}

export default CustomerLogout