import {$btn as $button, $ptext as $text} from './geDom';
import clickHandler from './event';

// 임포트한 데이터를 별칭을 붙여서 사횽할 시에는
// 동일한 름의 변수를 선언하는 것을 피해주야 한다.

$button.addEventListener('click', () => {
    alert('버튼 클릭됨!');
});
