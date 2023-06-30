//для формы поиска
const searchForm = document.querySelector('form');    
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменяем отправку формы

  const region = searchForm.querySelector('input[name="region"]').value;
  const date = searchForm.querySelector('input[name="date"]').value;
  const participants = searchForm.querySelector('input[name="participants"]').value;
  const preparedness = searchForm.querySelector('input[name="preparedness"]').value;

  const searchParams = new URLSearchParams();
  searchParams.set('region', region);
  searchParams.set('date', date);
  searchParams.set('participants', participants);
  searchParams.set('preparedness', preparedness);

  const searchUrl = `/sitefortour/html/search.html?${searchParams.toString()}`;
  window.location.href = searchUrl;
});
