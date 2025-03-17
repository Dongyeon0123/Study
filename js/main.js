// 버튼 0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// .eq는 인덱스
//$('.tab-button').eq(0).on('click', function() {
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(0).addClass('orange');
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(0).addClass('show');
//});
//$('.tab-button').eq(1).on('click', function() {
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(1).addClass('orange');
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(1).addClass('show');
//});
//$('.tab-button').eq(2).on('click', function() {
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(2).addClass('orange');
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(2).addClass('show');
//});

// 위 코드를 반복문으로 재사용한 코드
for(let i = 0 ; i < $('.tab-button').length ; i++) {
    $('.tab-button').eq(i).on('click', function() {
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}
