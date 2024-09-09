import { $ptext } from './geDom';

//이벤트 헨들러 함수
// export는 객체의 이름을 고정해서 내봅냅니다ㅣ.
expert const clickHandler = (e) => {
    alert('버튼 클릭함.')
    $ptext.textContent = '모듈사용법 익히는 중!'
} 
// 내보낼 데이터가 1개라면 default를 쓸 수 있다.
// export default clickHandler;




