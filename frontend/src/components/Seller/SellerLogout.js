function SellerLogout(){
    localStorage.removeItem('creator_login');
    localStorage.removeItem('creator_username');
    localStorage.removeItem('creator_id');
    window.location.href='/creator/login';
}
export default SellerLogout;