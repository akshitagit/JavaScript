let numero = document.getElementById('numero')
let num = document.getElementById('num')
let sort = document.getElementById('sort')

numero.addEventListener('submit', (e)=>{
	e.preventDefault()
	n = parseInt(num.value)
	if(n > 0){
		
		a = Math.floor((1,n) * Math.random() + 1)
		sort.innerHTML = a
		sort.style.display = 'block'
		sort.style.color = '#ff0'
		sort.style.fontSize = '100px'
	}else{
		sort.innerHTML = 'Digite um numero'
		sort.style.fontSize = '30px'
	}
		
})
