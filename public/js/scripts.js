//Toggle Button
function toggleClass()
{
	const body=document.querySelector('body');
	body.classList.toggle('dark');
	body.style.transition= '0.5s linear';
}
