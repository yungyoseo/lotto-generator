

function createNumberCircles() {
	const rows = 5;
	const circleListNum = 6;
	const container = document.getElementById('numberContainer');

	for (let i = 0; i < rows; i++) {
		const row = document.createElement('div');
		row.classList.add('row');

		for (let j = 0; j < circleListNum; j++) {
			const numberCircle = document.createElement('div');
			numberCircle.classList.add('d-inline-block', 'numberCircle');

			const strong = document.createElement('strong');
			numberCircle.appendChild(strong); // <strong> 요소를 numberCircle에 추가
			row.appendChild(numberCircle); // numberCircle을 행에 추가
		}

		container.appendChild(row); // 행을 컨테이너에 추가
	}
}


function generateLotto() {

	const rows = document.querySelectorAll('.card-body .row');

	rows.forEach(row => {
		
		const strongTags = row.querySelectorAll('.numberCircle strong');
		const numberCircles = row.querySelectorAll('.numberCircle');
		const numbers = new Set();
	
		// 1~45 범위의 중복 없는 숫자 생성
		while (numbers.size < strongTags.length) {
			const randomNum = Math.floor(Math.random() * 45) + 1; // 1~45 랜덤 숫자
			numbers.add(randomNum); // Set에 추가 (중복 시 자동 무시)
		}
	
		// 선택된 숫자와 색상 적용
		Array.from(numbers).sort((a, b) => a - b).forEach((num, index) => {
			const strong = strongTags[index];
			const numberCircle = numberCircles[index];
			strong.textContent = num;
			numberCircle.style.backgroundColor = getColor(num);
		});
	});

}

function getColor(num) {
	if (num <= 10) return '#e4a716';
	if (num <= 20) return '#1993da';
	if (num <= 30) return '#e96353';
	if (num <= 40) return '#8f8f8f';
	return '#5ab545';
}

createNumberCircles();