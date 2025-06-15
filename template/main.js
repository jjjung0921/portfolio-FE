const control_sidebar = () => {
    const sidebar = document.getElementById('left-sidebanner');
    // const content = document.getElementById('content'); // #main의 너비 조절에는 직접 사용되지 않음

    //sidebar 접고 펼치기
    sidebar.classList.toggle('activate'); // 'activate' 클래스 토글
}