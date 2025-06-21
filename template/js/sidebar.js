const control_sidebar = () => {
    const sidebar = document.getElementById('left-sidebanner');
    const menuBtn = document.getElementById('menu-btn');
    
    //sidebar 접고 펼치기
    sidebar.classList.toggle('activate'); // 'activate' 클래스 토글
    menuBtn.classList.toggle('activate');
}

const control_search = () => {
    const searchBar = document.getElementById('search-btn');

    searchBar.classList.toggle('activate');
}